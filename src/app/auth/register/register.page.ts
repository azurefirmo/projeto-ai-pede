import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  standalone: false,
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  isLoading = false;
  errorMessage = '';

  constructor(private  authService:  AuthService, private  router:  Router) { }

  register(form: NgForm): void {
    if (form.value.password !== form.value.confirm) {
      this.errorMessage = 'As senhas precisam ser iguais.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.authService.register(form.value).subscribe({
      next: () => this.router.navigateByUrl('/tabs/tab1'),
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Não foi possível criar a conta. Tente outro e-mail.';
      }
    });
  }

}
