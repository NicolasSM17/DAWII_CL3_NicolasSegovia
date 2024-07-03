import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Location, LocationResponse } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://rickandmortyapi.com/api/location';

  constructor(private http: HttpClient) { }

  getLocations(): Observable<Location[]> {
    return this.http.get<LocationResponse>(this.apiUrl).pipe(
      map(response => response.results.filter(location => location.type === 'Planet'))
    );
  }
}
