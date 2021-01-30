import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogSideComponent } from './blog-side/blog-side.component';

@NgModule({
  declarations: [
    BlogPostComponent,
    BlogPostListComponent,
    BlogSideComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'blog/:id', component: BlogPostComponent },
      { path: 'blog', component: BlogPostListComponent },
    ])
  ],
  exports: [
    BlogPostComponent,
    BlogPostListComponent,
    BlogSideComponent,
  ],
  providers: [DatePipe]
})
export class BlogModule { }
