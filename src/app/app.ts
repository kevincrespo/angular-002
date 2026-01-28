import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from './models/post';
import { PostsService } from './services/posts';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent {
  protected readonly title = signal('posts-get');

  posts$: Observable<Post[]>;

  constructor(private PostsService: PostsService) {
    this.posts$ = this.PostsService.getAll();
  }
}
