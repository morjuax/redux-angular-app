import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo-redux',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoReduxComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('contador')
    .subscribe(contador => {
      this.contador = contador;
    });
  }


  multiplicar() {
    const accion = new MultiplicarAction(2);
    this.store.dispatch(accion);
  }


  dividir() {
    const accion = new DividirAction(2);
    this.store.dispatch(accion);
  }

}
