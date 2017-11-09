import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { EditorModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LoginGuard } from './guards/login.guard';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostService } from './post/post.service';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostCreateComponent } from './post/post-create/post-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PostListComponent,
    PostDetailComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    EditorModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'blog', component: HomeComponent, canActivate: [LoginGuard], children: [
        { path: 'post-list', component: PostListComponent, canActivate: [LoginGuard] },
        { path: 'post-create', component: PostCreateComponent, canActivate: [LoginGuard] },
        { path: 'post-detail/:id', component: PostDetailComponent, canActivate: [LoginGuard] }
      ] }
    ])
  ],
  providers: [LoginService, LoginGuard, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
