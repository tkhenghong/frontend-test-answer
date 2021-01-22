import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { JsonplaceholderService } from '../../../../rest';
import { Post, PostComment } from '../../../../models';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss']
})
export class PostSearchComponent implements OnInit, OnDestroy {

  formGroup: FormGroup = this.initFormGroup();

  private unsubscribe: Subject<any> | undefined;

  resultPosts: Post[] = [];
  resultComments: PostComment[] = [];

  constructor(private jsonplaceholderService: JsonplaceholderService) {
    this.unsubscribe = new Subject();
  }

  ngOnInit(): void {
    this.setFormGroupListener();
  }

  initFormGroup(): FormGroup {
    return new FormGroup({
      search: new FormControl(null, {
        updateOn: 'change',
        validators: Validators.required,
      })
    });
  }

  setFormGroupListener(): void {
    if (!this.unsubscribe) {
      return;
    }

    this.formGroup.valueChanges.pipe(
      takeUntil(this.unsubscribe),
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.unsubscribe)
    ).subscribe(() => {
      this.onFilterChange();
    });
  }

  ngOnDestroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe.next();
      this.unsubscribe.complete();
    }
  }

  onFilterChange(): void {
    this.resultPosts = [];
    this.resultComments = [];
    this.searchPost();
  }

  searchPost(): void {
    if (!this.formGroup) {
      return;
    }

    const controls = this.formGroup.controls;
    const search = controls.search.value;

    if (!search) {
      return;
    }

    this.jsonplaceholderService.getPost().pipe(tap(posts => {
      if (posts && posts.length > 0) {
        posts.forEach(post => {
          this.checkPostInfo(post.id, search);
          this.searchPostComments(post.id, search);
        });
      }
    })).subscribe();
  }

  checkPostInfo(postId: number, searchText: string): void {
    this.jsonplaceholderService.getPostInfo(postId).pipe(tap(postInfo => {
      if (postInfo.title.includes(searchText) || postInfo.body.includes(searchText)) {
        this.resultPosts.push(postInfo);
      }
    })).subscribe();
  }

  searchPostComments(postId: number, searchText: string): void {
    this.jsonplaceholderService.getPostComments(postId).pipe(tap(comments => {
      if (comments && comments.length > 0) {
        comments.forEach(comment => {
          if (comment.name.includes(searchText) || comment.email.includes(searchText) || comment.body.includes(searchText)) {
            this.resultComments.push(comment);
          }
        });
      }
    })).subscribe();
  }

  /**
   * Checking control validation
   *
   * @param controlName: string => Equals to formControlName
   * @param validationType: string => Equals to validators name
   */
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.formGroup.controls[controlName];
    if (!control) {
      return false;
    }

    return control.hasError(validationType) && (control.dirty || control.touched);
  }

}
