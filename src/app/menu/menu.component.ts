import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MaterialModule, RouterOutlet, HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor( private router: Router, private route: ActivatedRoute){}
  
  irLocation(): void {
    this.router.navigate(["location"], {relativeTo: this.route});
  }

  irTodo(): void {
    this.router.navigate(["todo"], {relativeTo: this.route});
  }
}
