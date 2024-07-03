import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Location } from '../location.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-location-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.css'
})
export class LocationListComponent {
  locations: Location[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLocations().subscribe(data => {
      this.locations = data;
    });
  }
}
