import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
