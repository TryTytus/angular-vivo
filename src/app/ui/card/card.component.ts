import { Component, Input } from '@angular/core';
import { EntityModelVideo, VideoResponse } from '../../api';
import { getStatic } from '../../hooks/getStatic';
import { RouterLink } from '@angular/router';
import { linkFix } from '../../hooks/linkFix';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() video: EntityModelVideo  | undefined;

  linkFix = linkFix

  getImg(id: string | undefined) {
    return getStatic(id);
  }


}
