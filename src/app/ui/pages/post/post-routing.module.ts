import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostMainComponent } from './post-main/post-main.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { PostSearchComponent } from './post-search/post-search.component';


const routes: Routes = [
  {
    path: '',
    component: PostMainComponent
  },
  {
    path: 'info/:postId',
    component: PostInfoComponent
  },
  {
    path: 'search',
    component: PostSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
