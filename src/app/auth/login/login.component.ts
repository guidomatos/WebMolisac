import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder
    ) { }

    public loginForm = this.fb.group({
      usuario: [ localStorage.getItem('usuario') || '' , [ Validators.required ] ],
      password: ['', Validators.required ]
    });

  ngOnInit(): void {
  }

  login() {

    console.log('loginForm', this.loginForm.value);
    let formData = this.loginForm.value;
    let usuario = formData.usuario;
    let password = formData.password;

    if (usuario === 'gmatos' && password === '123456') {
      
      // Navegar al Dashboard
      this.router.navigateByUrl('/dashboard');
      
    } else {
      console.log('credenciales inválidas');
    }

  }

}
