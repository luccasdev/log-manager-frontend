import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input()
  public menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      iconPath: 'assets/svg/dashboard-icon.svg',
      router: 'dashboard'
    },
    {
      label: 'Create',
      iconPath: 'assets/svg/create-icon.svg',
      router: 'create'
    },
    {
      label: 'Upload',
      iconPath: 'assets/svg/upload-icon.svg',
      router: 'upload'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

export class MenuItem {
  label: string;
  iconPath: string;
  router: string;
}
