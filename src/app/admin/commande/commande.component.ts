import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/shared/services/commande.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'abs-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  commandes:any[]=[]
  date: any
  searchText: any;
  constructor(private http: HttpClient, private comService:CommandeService,private tokenServ:TokenService) { }

  ngOnInit(): void {
  this.comService.allCommandes().subscribe(
    data=>{
      this.commandes=data
      console.log(this.commandes);
      
    }
   )
  }
}
