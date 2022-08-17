import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/shared/services/commande.service';

@Component({
  selector: 'abs-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css']
})
export class ListeCommandeComponent implements OnInit {
  donnees:any
  date:any
  searchText:any
  constructor(private commandeServ:CommandeService) { }


  ngOnInit(): void {

    this.commandeServ.ClientCmd().subscribe(
      data=>{
        this.donnees=data["hydra:member"]
        console.log(this.donnees);
        
      }
    )
  }

}
