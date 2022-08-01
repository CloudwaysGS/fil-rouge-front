import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'abs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() clickchanged: EventEmitter<string> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  filterProduct(value:string){
    // alert("ok")
    this.clickchanged.emit(value)

  }
  
  

}
