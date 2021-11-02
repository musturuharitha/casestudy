import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-sidebar',
  templateUrl: './manager-sidebar.component.html',
  styleUrls: ['./manager-sidebar.component.css']
})
export class ManagerSidebarComponent implements OnInit {
  @Input() isclass: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
