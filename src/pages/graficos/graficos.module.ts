import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GraficosPage } from './graficos';

@NgModule({
  declarations: [
    GraficosPage,
  ],
  imports: [
    IonicPageModule.forChild(GraficosPage),
  ],
  exports: [
    GraficosPage
  ]
})
export class GraficosPageModule {}
