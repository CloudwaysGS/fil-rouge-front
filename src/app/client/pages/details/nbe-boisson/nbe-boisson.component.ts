import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abs-nbe-boisson',
  templateUrl: './nbe-boisson.component.html',
  styleUrls: ['./nbe-boisson.component.css']
})
export class NbeBoissonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  valid(){
    alert('ok')
    // let input=document.querySelector('input')
    // console.log(input)
  }
}
