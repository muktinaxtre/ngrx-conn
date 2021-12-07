import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ConnectionComponent } from './connection/connection.component';
import { connectionReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ConnectivityEffects } from './store/effects';
import { FormsModule } from '@angular/forms';
import { ConnComponent } from './conn/conn.component';
import { ConntestComponent } from './conntest/conntest.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    ConnComponent,
    ConntestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ appState: connectionReducer }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([ConnectivityEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
