import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInfoComponent } from './post-info.component';
import { RouterTestingModule } from '@angular/router/testing';
import { JsonplaceholderService } from '../../../../rest';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoreService } from '../../../../services';

describe('PostInfoComponent', () => {
  let component: PostInfoComponent;
  let fixture: ComponentFixture<PostInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [PostInfoComponent],
      providers: [JsonplaceholderService, CoreService],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
