import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [TodoDetailComponent, TodoListComponent],
  imports: [CommonModule, TodoRoutingModule],
})
export class TodoModule {}
