import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../../../../rest';
import { Post } from '../../../../models';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-post-main',
  templateUrl: './post-main.component.html',
  styleUrls: ['./post-main.component.scss']
})
export class PostMainComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  posts: Post[] = [];

  constructor(private jsonplaceholderService: JsonplaceholderService) {
  }

  ngOnInit(): void {
    this.jsonplaceholderService.getPost().pipe(tap(postResponse => {
      this.posts = postResponse;
    })).subscribe();
  }

  onClick(postId: number): void {
    console.log('onClicked()');
    console.log('postId: ', postId);
  }
}
