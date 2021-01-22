import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostMainComponent } from './post-main/post-main.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { PostRoutingModule } from './post-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { JsonplaceholderService } from '../../../rest';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [PostComponent, PostMainComponent, PostInfoComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    JsonplaceholderService
  ]
})
export class PostModule {
}
