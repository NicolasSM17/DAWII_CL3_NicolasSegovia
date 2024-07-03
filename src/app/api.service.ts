import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Location, LocationResponse } from './location.model';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl1 = 'https://rickandmortyapi.com/api/location';
  private apiUrl2 = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getLocations(): Observable<Location[]> {
    return this.http.get<LocationResponse>(this.apiUrl1).pipe(
      map(
        response => response.results.filter(
          location => location.type === 'Planet'
        )
      )
    );
  }

  getFilteredTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl2).pipe(
      map(
        todos => todos.filter(
          todo => todo.id >= 25 && todo.id <= 90 && todo.completed
        )
      )
    );
  }
}
