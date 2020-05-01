import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromContador from './components/contador-redux/contador.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;

  constructor(private store: Store<AppState>) {
    this.contador = 10;

    // this.store.subscribe(state => {
    //   this.contador = state.contador;
    //   console.log(state);
    // });
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }


  incrementarRedux() {
    const action = new fromContador.IncrementarAction();

    this.store.dispatch(action);
  }

  decrementarRedux() {
    const action = new fromContador.DecrementarAction();
    this.store.dispatch(action);
  }
}
