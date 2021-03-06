import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  @Input() contador: number;
  @Output() contadorReset = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.contador = 0;
    this.contadorReset.emit(0);

  }

}
