import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSearchComponent } from './post-search.component';
import { JsonplaceholderService } from '../../../../rest';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoreService } from '../../../../services';

describe('PostSearchComponent', () => {
  let component: PostSearchComponent;
  let fixture: ComponentFixture<PostSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PostSearchComponent],
      providers: [JsonplaceholderService, CoreService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
