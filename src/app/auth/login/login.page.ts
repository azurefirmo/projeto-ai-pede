import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  isLoading = false;
  errorMessage = '';

  constructor(private  authService:  AuthService, private  router:  Router) { }

  login(form: NgForm): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.authService.login(form.value).subscribe({
      next: () => this.router.navigateByUrl('/tabs/tab1'),
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Não foi possível entrar. Verifique seus dados.';
      }
    });
  }

}
