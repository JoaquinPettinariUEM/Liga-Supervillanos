import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../models/heroe';
import { superevilsDataMock } from '../supervillanos/evilsDataMock';
import { SupervillanoComponent } from './supervillano/supervillano';

const mensajeNoHayGuerra =
  'La guerra contra los supervillanos ha terminado. ¡Gracias por tu ayuda!';
const mensajeHayGuerra =
  '¡Estamos en guerra contra los supervillanos! Mantente alerta y evita caer en sus trampas.';

@Component({
  selector: 'app-supervillanos',
  standalone: true,
  imports: [CommonModule, SupervillanoComponent],
  templateUrl: './supervillanos.html',
  styleUrl: './supervillanos.css',
})
export class Supervillanos implements OnInit {
  villanos: Heroe[] = [];

  guerra = false;

  mensaje = mensajeHayGuerra;

  ngOnInit(): void {
    this.villanos = superevilsDataMock;
  }

  eliminarVillano(id: string) {
    this.villanos = this.villanos.filter((v) => v.id !== id);
  }

  toggleGuerra() {
    this.mensaje = this.guerra ? mensajeHayGuerra : mensajeNoHayGuerra;

    this.guerra = !this.guerra;
  }
}
