import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonplaceholderService } from '../../../../rest';
import { tap } from 'rxjs/operators';
import { Post, PostComment } from '../../../../models';

/**
 * Showing post info with it's comments.
 */
@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.scss']
})
export class PostInfoComponent implements OnInit {

  post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };
  comments: PostComment[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jsonplaceholderService: JsonplaceholderService) {

  }

  ngOnInit(): void {
    // You don't have to manage this.route.paramMap's Subscription because Angular handled it in lifecycle.
    this.route.paramMap.subscribe((paramMap) => {
      console.log('paramMap: ', paramMap);
      if (!paramMap.has('postId')) {
        console.log('if (!paramMap.has(\'postId\')');
        // this.navController.navigateBack("/places/offers");
        this.router.navigateByUrl('/posts');
        return;
      } else {
        console.log('if (paramMap.has(\'postId\')');
        const postId = paramMap.get('postId');

        if (postId) {
          this.getPostInfo(+postId);
          this.loadPostComments(+postId);
        }
      }
    });
  }

  getPostInfo(postId: number): void {
    this.jsonplaceholderService.getPostInfo(postId).pipe(tap(post => {
      this.post = post;
    })).subscribe();
  }

  loadPostComments(postId: number): void {
    this.jsonplaceholderService.getPostComments(postId).pipe(tap(comments => {
      this.comments = comments;
    })).subscribe();
  }

}
