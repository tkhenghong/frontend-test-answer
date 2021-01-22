import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CoreService } from '../../services';
import { Post, PostComment } from '../../models';

@Injectable()
export class JsonplaceholderService {
  private restURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient,
              private coreService: CoreService) {
  }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.restURL}/posts`);
  }

  getPostInfo(postId: number): Observable<Post> {
    return this.http.get<Post>(`${this.restURL}/posts/${postId}`);
  }

  getPostComments(postId: number): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(`${this.restURL}/comments?postId=${postId}`);
  }
}
