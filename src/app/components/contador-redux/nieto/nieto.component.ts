import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto-redux',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoReduxComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador')
    .subscribe(contador => {
      this.contador = contador;
      console.log(contador);
    });
  }

  reset() {
    const accion = new ResetAction();
    this.store.dispatch(accion);
  }

}
