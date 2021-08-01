import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/app.animation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [slideInAnimation]
})
export class DashboardComponent implements OnInit {
  isVisible: boolean = true;
  constructor(){}

  ngOnInit() {
  }

  toggleSideBar(value: boolean){
    this.isVisible = !this.isVisible
  }
}
