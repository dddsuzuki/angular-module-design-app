import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';

const routes = [
  {
    path: '',
    component: TopComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopRoutingModule {}
