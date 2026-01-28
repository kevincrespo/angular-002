import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})

export class PostListComponent {

  posts$!: Observable<Post[]>;

  constructor(private postsService: PostsService){
    this.posts$ = this.postsService.getAll();

  }
}
