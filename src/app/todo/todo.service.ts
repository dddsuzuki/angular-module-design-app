import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { Todo } from './todo';

const TODO_LIST: Todo[] = [
  {
    id: '1',
    content: '買い物',
    done: false,
  },
  {
    id: '2',
    content: '洗濯',
    done: true,
  },
  {
    id: '3',
    content: '掃除',
    done: false,
  },
];

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor() {}

  getTodoList(): Observable<Todo[]> {
    return timer(0).pipe(map(() => TODO_LIST));
  }

  getTodo(id: string): Observable<Todo | null> {
    const todo = TODO_LIST.find((item) => item.id === id);

    return timer(0).pipe(map(() => (todo ? todo : null)));
  }
}
