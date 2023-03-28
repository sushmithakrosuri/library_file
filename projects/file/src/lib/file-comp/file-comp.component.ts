import { Component } from '@angular/core';

@Component({
  selector: 'lib-file-comp',
  templateUrl: './file-comp.component.html',
  styleUrls: ['./file-comp.component.css']
})
export class FileCompComponent {
  file:any;
  name:any;
  size:any;
  type:any;
  format?:any;
  content:any;
//   onFileChange(event: any) {
//     const file = event.target.files.item(0);
//     console.log(file);
//     //console.log(event.target.files)
//     const reader = new FileReader();
//   reader.readAsDataURL(file);

//   reader.onload = () => {
//     if (reader.result) {
//       const base64String = reader.result.toString().split(',')[1];
//       console.log(base64String);
//     }
//   };
    
// }

// handleFileInput(event:Event, format: 'base64' | 'bytearray'): void {

//   const inputElement = event.target as HTMLInputElement;
//   const files = inputElement.files;
//   if (files != null && files.length > 0) {
//     // handle the files here
//     //let  file = files.item(0);
//   }
//   const file = files.item(0);

//   const reader = new FileReader();

//   if (format === 'base64') {
//     reader.readAsDataURL(file as Blob);
//   } else if (format === 'bytearray') {
//     reader.readAsArrayBuffer(file as Blob);
//   }

//   reader.onload = () => {
//     if (format === 'base64') {
//       const base64String = reader.result?.toString().split(',')[1];
//       console.log(base64String);
//     } else if (format === 'bytearray') {
//       const buffer = reader.result as ArrayBuffer;
//       const bytes = new Uint8Array(buffer);
//       console.log(bytes);
//     }
//   };

//   reader.onerror = (error) => {
//     console.log('Error: ', error);
//   };
// }
handleFileInput(event: Event, format: 'base64' | 'bytearray'): void {
  const inputElement = event.target  as HTMLInputElement;
  const files = inputElement.files;
  //const files = event.target?.files;
  if (files != null && files.length > 0) {
    this.file = files.item(0);
    const reader = new FileReader();

    if (format === 'base64') {
      reader.readAsDataURL(this.file as Blob);
    } else if (format === 'bytearray') {
      reader.readAsArrayBuffer(this.file as Blob);
    }

    reader.onload = () => {
      if (format === 'base64') {
        //const base64String = reader.result?.toString().split(',')[1];
        const base64String = reader.result?.toString()
        console.log(base64String);
        this.content=base64String
      } else if (format === 'bytearray') {
        const buffer = reader.result as ArrayBuffer;
        const bytes = new Uint8Array(buffer);
        this.content=bytes
        console.log(bytes);
        console.log(buffer)
        console.log(this.file)
        
      }
       
    };

    // reader.onerror = (error) => {
    //   console.log('Error: ', error);
    // };
    this.name=this.file.name
    this.size=this.file.size
    this.type=this.file.type;
  
  }
}
 
}