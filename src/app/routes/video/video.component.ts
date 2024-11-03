import { Component, OnInit } from '@angular/core';
import { WideCardComponent } from '../../ui/wide-card/wide-card.component';
import {
  CollectionModelVideo,
  EntityModelVideo,
  VideoEntityControllerService,
} from '../../api';
import { ActivatedRoute } from '@angular/router';
import { getStatic } from '../../hooks/getStatic';
import { CommentFormComponent } from '../../ui/comment-form/comment-form.component';
import { CommentComponent } from '../../ui/comment/comment.component';


@Component({
  selector: 'app-video',
  standalone: true,
  imports: [WideCardComponent, CommentFormComponent, CommentComponent],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css',
})
export class VideoComponent implements OnInit {

  $id: string | null = null
  $video: EntityModelVideo | undefined

  $many_videos: CollectionModelVideo | undefined

  constructor(
    private videoService: VideoEntityControllerService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getVideo()
    this.getAll()
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

  getAll(): void {
    this.videoService.getCollectionResourceVideoGet1()
    .subscribe((videos: CollectionModelVideo) => {
      this.$many_videos = videos
    })
  }

  getMp4(id: string | null) {
    return id ? getStatic(id) + '.mp4' : ''
  }

}
