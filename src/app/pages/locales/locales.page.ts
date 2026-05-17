import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { AppFooterComponent } from '../../components/app-footer/app-footer.component';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.page.html',
  styleUrls: ['./locales.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, AppHeaderComponent, AppFooterComponent]
})
export class LocalesPage implements OnInit {

  locales: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const categoriaId = this.route.snapshot.paramMap.get('id');

    fetch(`http://127.0.0.1:8000/api/locales/?categoria=${categoriaId}`)
      .then(response => response.json())
      .then(data => {
        console.log('Locales recibidos:', data);
        this.locales = data;
      })
      .catch(error => {
        console.error('Error cargando locales:', error);
      });
  }
}