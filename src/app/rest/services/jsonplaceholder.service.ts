import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CoreService } from '../../services';
import { Post, PostComment } from '../../models';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class JsonplaceholderService {
  private restURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient,
              private coreService: CoreService) {
  }

  /**
   * Get all posts.
   * NOTE: No pagination.
   */
  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.restURL}/posts`);
  }

  /**
   * Get info about a post.
   * @param postId: ID of the post.
   */
  getPostInfo(postId: number): Observable<Post> {
    return this.http.get<Post>(`${this.restURL}/posts/${postId}`);
  }

  /**
   * Get the comments of the post.
   * NOTE: No pagination.
   * @param postId: ID of the post.
   */
  getPostComments(postId: number): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(`${this.restURL}/comments?postId=${postId}`);
  }

  /**
   * NOTE: This should be the API that search the DB in the backend to find out the post
   * @param searchText: Search keyword.
   */
  searchPost(searchText: string): void /*Observable<SearchResult[]>*/ {
    // Do nothing.
  }
}
