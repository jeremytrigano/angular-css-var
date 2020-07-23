import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorlistComponent } from './colorlist/colorlist.component';

const routes: Routes = [
  {
    path: 'colors',
    component: ColorlistComponent,
  },
  { path: '', redirectTo: 'colors', pathMatch: 'full' },
  { path: '**', redirectTo: 'colors' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
