import { Component, Input, OnInit } from '@angular/core';
import { ApiModule, EntityModelVideo } from '../../api';
import { HttpClientModule } from '@angular/common/http';
import { getStatic } from '../../hooks/getStatic';

@Component({
  selector: 'app-wide-card',
  standalone: true,
  imports: [],
  templateUrl: './wide-card.component.html',
  styleUrl: './wide-card.component.css'
})
export class WideCardComponent {
  @Input() video: EntityModelVideo | undefined

  getImg(id: string | undefined) {
    return getStatic(id);
  }


}
