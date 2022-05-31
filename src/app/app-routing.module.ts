import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopModule } from './top/top.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => TopModule,
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then((m) => m.TodoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
