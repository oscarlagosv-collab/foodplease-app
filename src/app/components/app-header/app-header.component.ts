import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink]
})
export class AppHeaderComponent {}