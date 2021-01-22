import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostMainComponent } from './post-main/post-main.component';
import { PostInfoComponent } from './post-info/post-info.component';


const routes: Routes = [
  {
    path: '',
    component: PostMainComponent
  },
  {
    path: 'info/:postId',
    component: PostInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
