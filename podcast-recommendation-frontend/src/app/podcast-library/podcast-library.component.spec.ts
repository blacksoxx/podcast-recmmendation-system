import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastLibraryComponent } from './podcast-library.component';

describe('PodcastLibraryComponent', () => {
  let component: PodcastLibraryComponent;
  let fixture: ComponentFixture<PodcastLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodcastLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
