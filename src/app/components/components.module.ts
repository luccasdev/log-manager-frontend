import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './dashboard/list/list.component';
import { CreateComponent } from './create/create.component';
import { UploadComponent } from './upload/upload.component';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {DragDropDirective} from '../../shared/directives/drag-drop.directive';
import {AngularSvgIconModule} from 'angular-svg-icon';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UploadComponent,
    SidebarComponent,
    DashboardComponent,
    DragDropDirective
  ],
  exports: [
    SidebarComponent,
    DragDropDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AngularSvgIconModule.forRoot()
  ]
})
export class ComponentsModule { }
