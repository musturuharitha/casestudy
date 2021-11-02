import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-sidebar',
  templateUrl: './owner-sidebar.component.html',
  styleUrls: ['./owner-sidebar.component.css']
})
export class OwnerSidebarComponent implements OnInit {
  @Input() isclass: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
