import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Users } from "./users/users";
import { Users2 } from "./users2/users2";

@Component({
  selector: 'app-root',
  imports: [Header, Users, Users2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EasyTask');
} 
