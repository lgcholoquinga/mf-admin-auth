import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'auth-auth-layout',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './auth-layout.component.html',
	styleUrl: './auth-layout.component.scss',
})
export default class AuthLayoutComponent {}
