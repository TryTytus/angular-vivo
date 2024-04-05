import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HtmlParser } from '@angular/compiler';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthResponse } from '../../api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';

  alertVal: string | undefined = '';

  constructor(private auth: AuthService, private router: Router) {}

  async onSubmit() {
    console.log(this.email, this.password);

    try {
      this.auth.token = (
        await this.auth.login(this.email, this.password)
      ).token;

      if (this.auth.token) localStorage.setItem('authKey', this.auth.token);


      this.router.navigate(['/']);
    } catch (e) {
      if (e instanceof HttpErrorResponse) this.alertVal = e.message;
      else console.error(e);
    }
  }
  // {

  //   console.log(this.email, this.password)

  //   this.loginService.loginPost(this.email, this.password)
  //   .subscribe( async (res:Response) => {
  //      let htmlRaw:string = await res.text()
  //      const regex: RegExp = /\<div\sclass\=\"alert\salert-danger\"\srole\=\"alert\"\>(.*?)\<\/div\>/g
  //       this.alertVal = htmlRaw.match(regex)?.at(0)?.toString()
  //   })
  // }
}
