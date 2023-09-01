import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamContrasenaPageRoutingModule } from './cam-contrasena-routing.module';

import { CamContrasenaPage } from './cam-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamContrasenaPageRoutingModule
  ],
  declarations: [CamContrasenaPage]
})
export class CamContrasenaPageModule {}
