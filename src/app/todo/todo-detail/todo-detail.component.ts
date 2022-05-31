import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { distinctUntilChanged, takeUntil } from 'rxjs';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit, OnDestroy {
  todo: Todo | null = null;

  private destroy$ = new EventEmitter<void>();

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$), distinctUntilChanged())
      .subscribe((paramMap: ParamMap) => {
        const id = paramMap.get('id')!;

        this.todoService.getTodo(id).subscribe((todo) => {
          this.todo = todo;
        });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.emit();
  }
}
