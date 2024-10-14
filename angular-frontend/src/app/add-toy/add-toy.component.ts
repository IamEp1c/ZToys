import { Component, OnInit } from '@angular/core';
import { ZToysService } from '../ztoys.service';
import { ZToys } from '../ZToys';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Component({
  selector: 'app-add-toy',
  templateUrl: './add-toy.component.html',
  styleUrl: './add-toy.component.css'
})
export class AddToyComponent {


 // ztoys: ZToys = null; 

  private url: string = 'http://localhost:8080/toys'; 

  toys: any
  handleError: any;
  

  constructor(private toyService: ZToysService, private http: HttpClient){

  }
 

  getToyFormData(data:any){
    this.toyService.postToys(data).subscribe((result)=> {
      this.toys = result; 
      console.log(this.toys); 
      //console.warn(result); 
    })
  }


  // getToyFormData(form: NgForm) {
  //   if (form.valid) { // Check if the form is valid
  //     this.toyService.postToys(form.value).subscribe(
  //       (result) => {
  //         this.toys = result;
  //         console.log(this.toys);
  //         form.reset(); // Reset the form after successful submission
  //       },
  //       (error) => {
  //         console.error('Error occurred while saving the toy:', error);
  //       }
  //     );
  //   } else {
  //     console.warn('Form is invalid');
  //   }
  // }



  onClick(form: NgForm){
  //  this.getToyFormData(form)
  this.toyService.postToys(this.toys).subscribe(toy => this.toy.)
  }

  



}
