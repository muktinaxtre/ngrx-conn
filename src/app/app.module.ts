import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ConnectionComponent } from './connection/connection.component';
import { connectionReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ConnectivityEffects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ appState: connectionReducer }),
    EffectsModule.forRoot([ConnectivityEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
