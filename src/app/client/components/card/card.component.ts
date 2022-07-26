import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('posts') post : Post|null = null;

constructor() { }

  ngOnInit(): void {
  }

}
