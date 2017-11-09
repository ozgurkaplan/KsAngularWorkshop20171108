import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  id: number;

  constructor(private _postService: PostService,
    private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    this._postService.getPost(this.id)
      .subscribe(article => { this.post = article; });
  }

  postRated(rating: number): void {
    alert(`Bu yazıya ${rating} puan verdiniz`);
    this._postService.ratePost(this.post.id, rating)
    .subscribe(score => this.post.score = score);
  }

}
