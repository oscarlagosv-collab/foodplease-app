import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { AppFooterComponent } from '../../components/app-footer/app-footer.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppHeaderComponent,
    AppFooterComponent
  ]
})
export class LoginPage {

  username = '';
  password = '';
  mostrarClave = false;
  modalRecuperarAbierto = false;
  correoRecuperacion = '';

  constructor(private alertController: AlertController) {}

  cambiarVisibilidadPassword() {
    this.mostrarClave = !this.mostrarClave;
  }

  iniciarSesion() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);

    alert('Login prototipo');
  }

  abrirRecuperarPassword() {
    this.modalRecuperarAbierto = true;
  }

  cerrarRecuperarPassword() {
    this.modalRecuperarAbierto = false;
  }

  async enviarRecuperacion() {
    const alert = await this.alertController.create({
      header: 'Recuperación enviada',
      message: 'Si el correo existe, se enviará una contraseña temporal.',
      buttons: ['Aceptar']
    });

    await alert.present();
    this.cerrarRecuperarPassword();
  }
}