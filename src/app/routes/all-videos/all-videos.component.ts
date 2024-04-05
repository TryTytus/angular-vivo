import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import {
  CollectionModelEntityModelVideo,
  CollectionModelVideo,
  EntityModelVideo,
  VideoEntityControllerService,
  VideoResponse,
} from '../../api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-videos',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './all-videos.component.html',
  styleUrl: './all-videos.component.css',
})
export class AllVideosComponent implements OnInit {
  $videos: EntityModelVideo[] | undefined;

  constructor(
    private videoService: VideoEntityControllerService,
  ) {}

  ngOnInit(): void {
    this.getAllVideos();
  }

  getAllVideos(): void {

    this.videoService
    .getCollectionResourceVideoGet1()
    .subscribe((x: CollectionModelEntityModelVideo) => {
      this.$videos = x._embedded?.videos;
    })

  }
}
