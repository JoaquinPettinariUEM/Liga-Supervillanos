import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Heroe } from '../../../models/heroe';
import { superevilsDataMock } from '../evilsDataMock';

@Component({
  selector: '[app-supervillano]',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './supervillano.html',
  styleUrl: './supervillano.css',
})
export class SupervillanoComponent implements OnDestroy {
  @Input() villano: Heroe = superevilsDataMock[0];

  @Output() deleteVillano = new EventEmitter<string>();

  eliminado = false;

  eliminar() {
    this.eliminado = true;
    this.deleteVillano.emit(this.villano.id);
  }

  ngOnDestroy(): void {
    if (this.eliminado) {
      alert(`Se ha eliminado el supervillano ${this.villano.nombre}`);
    }
  }
}
