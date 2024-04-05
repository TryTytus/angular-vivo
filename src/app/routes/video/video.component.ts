import { Component, OnInit } from '@angular/core';
import { WideCardComponent } from '../../ui/wide-card/wide-card.component';
import {
  EntityModelVideo,
  VideoEntityControllerService,
} from '../../api';
import { ActivatedRoute } from '@angular/router';
import { getStatic } from '../../hooks/getStatic';


@Component({
  selector: 'app-video',
  standalone: true,
  imports: [WideCardComponent],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css',
})
export class VideoComponent implements OnInit {

  $id: string | null = null
  $video: EntityModelVideo | undefined

  constructor(
    private videoService: VideoEntityControllerService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getVideo()
  }

  getVideo(): void {
    this.$id = this.router.snapshot.paramMap.get('id');

    if (this.$id)
      this.videoService
        .getItemResourceVideoGet(this.$id)
        .subscribe((video: EntityModelVideo) => {
          this.$video = video
        });
    // else
  }

  getMp4(id: string | null) {
    return id ? getStatic(id) + '.mp4' : ''
  }

}
