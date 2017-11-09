import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Post } from '../models/post';
import { environment } from '../../environments/environment';

@Injectable()
export class PostService {
  private _postsUrl = `${environment.baseApiEndPoint}/post`;
  private _getPostUrl = `${environment.baseApiEndPoint}/post`;
  private _insertPostUrl = `${environment.baseApiEndPoint}/post/insert`;

  constructor(private _http: Http) {

  }

  getPosts(): Observable<Post[]> {
    return this._http.get(this._postsUrl)
      .map(r => <Post[]>r.json())
      .do(data => console.log('Post/Get: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getPost(id: number): Observable<Post> {
    return this._http.get(`${this._getPostUrl}/${id}`)
      .map(r => <Post>r.json())
      .do(data => console.log(`Post/Get/${id}: ` + JSON.stringify(data)))
      .catch(this.handleError);
  }
  insertPost(post: Post): Observable<boolean> {
    return this._http.post(this._insertPostUrl, post)
      .map(r => <boolean>r.json())
      .do(data => console.log(`Post/Insert/` + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
  }
}
