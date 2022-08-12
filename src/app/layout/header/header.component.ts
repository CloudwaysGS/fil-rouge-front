import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'abs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() clickchanged: EventEmitter<string> = new EventEmitter

  constructor(private PanierServ:PanierService) { }

  ngOnInit(): void {
  }

  filterProduct(value:string){
    // alert("ok")
    this.clickchanged.emit(value)

  }

  items$=this.PanierServ.panier
  
  

}
