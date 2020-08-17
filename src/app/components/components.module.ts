import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UploadComponent } from './upload/upload.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    NavigationBarComponent,
    ListComponent,
    CreateComponent,
    UploadComponent
  ],
  exports: [
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
