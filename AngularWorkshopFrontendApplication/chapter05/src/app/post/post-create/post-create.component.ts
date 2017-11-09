import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  // tslint:disable-next-line:semicolon
  post: Post = new Post();

  constructor(private _postService: PostService) {
  }

  save(): void {
      this._postService.insertPost(this.post)
          .subscribe(r => {
              if (r) {
                  alert('İşlem Başarılı');
              } else {
                  alert('İşlem Başarısız');
              }
          });

  }


}
