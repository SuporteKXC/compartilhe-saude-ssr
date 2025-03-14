import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { VideoModalComponent } from '../../video-modal.component';
import { VideoModal } from '../../models/video-modal.model';

@Injectable({
  providedIn: 'root'
})
export class VideoModalService {
  private _ref: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService) { }

  open(config: VideoModal) {
    this._ref = this.dialogService.open(VideoModalComponent, {
      data: config,
      showHeader: true,
      baseZIndex: 2000,
      width: '90%',
    });
  }
}
