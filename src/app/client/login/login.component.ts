import { Component, OnInit } from '@angular/core';
import { Icredentials } from 'src/app/shared/models/credentials';
import { LoginService } from 'src/app/shared/services/login.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'abs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: Icredentials = {
    login: '',
    password: ''
  }

  constructor(private loginServ:LoginService, private tokenServ: TokenService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.form)
    this.loginServ.login(this.form).subscribe(
      data => {
        console.log(data.token),
        this.tokenServ.saveToken(data.token)      
      },
      err => console.log(err)
    )
  }
  

}
