import { Routes } from '@angular/router';
import { PostListComponent } from './pages/post-list/post-list';
import { PostDetailComponent } from './pages/post-detail/post-detail';
import { PostFormComponent } from './pages/post-form-component/post-form-component';

export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/new', component: PostFormComponent },  // las estáticas siempre antes que las dinámicas
  { path: 'posts/:id', component: PostDetailComponent },
  { path: '**', redirectTo: 'posts' },
];
