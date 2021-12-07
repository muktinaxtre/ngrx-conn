import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnComponent } from './conn/conn.component';
import { ConnectionComponent } from './connection/connection.component';
import { ConntestComponent } from './conntest/conntest.component';

const routes: Routes = [
  { path: '', component: ConnectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
