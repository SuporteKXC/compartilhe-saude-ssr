import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoModalComponent } from './video-modal.component';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';

describe('DynamicModalComponent', () => {
  let component: VideoModalComponent;
  let fixture: ComponentFixture<VideoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoModalComponent],
      providers: [
        {
          provide: DynamicDialogConfig,
          useValue: {
            data: {
              title: 'video-modal'
            }
          }
        },
        { provide: DialogService }
      ]
    });
    fixture = TestBed.createComponent(VideoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
