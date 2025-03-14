import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss']
})
export class VideoModalComponent {
  protected videoUrl!: SafeResourceUrl;
  private videoPath = environment.videoPath;

  constructor(
    protected dialogConfig: DynamicDialogConfig, 
    private sanitizer: DomSanitizer
  ) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoPath);
  }
}
