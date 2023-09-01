import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamContrasenaPage } from './cam-contrasena.page';

const routes: Routes = [
  {
    path: '',
    component: CamContrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamContrasenaPageRoutingModule {}
