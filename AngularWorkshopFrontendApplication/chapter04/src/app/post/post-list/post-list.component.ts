import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList: Post[] = [];
  constructor(private _postService: PostService) {

  }

  ngOnInit() {
    this._postService.getPosts().subscribe(postList => {
      this.postList = postList;
    });
  }

}
