import { NgModule } from '@angular/core';
import { FileComponent } from './file.component';
import { FileCompComponent } from './file-comp/file-comp.component';



@NgModule({
  declarations: [
    FileComponent,
    FileCompComponent
  ],
  imports: [
  ],
  exports: [
    FileComponent,FileCompComponent
  ]
})
export class FileModule { }
