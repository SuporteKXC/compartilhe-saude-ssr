import { TestBed } from '@angular/core/testing';

import { VideoModalService } from './video-modal.service';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';

describe('VideoModalServiceService', () => {
  let service: VideoModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicDialogConfig, DialogService]
    });
    service = TestBed.inject(VideoModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
