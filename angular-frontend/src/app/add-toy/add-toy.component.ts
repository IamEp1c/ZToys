import { Component, OnInit } from '@angular/core';
import { ZToysService } from '../ztoys.service';
import { ZToys } from '../ZToys';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-toy',
  templateUrl: './add-toy.component.html',
  styleUrl: './add-toy.component.css'
})
export class AddToyComponent {


 // ztoys: ZToys = null; 

  private url: string = 'http://localhost:8080/toys'; 

  toys: any

  constructor(private toyService: ZToysService){

  }
 

  getToyFormData(data:any){
    this.toyService.postToys(data).subscribe((result)=> {
      this.toys = result; 
      console.log(this.toys); 
      //console.warn(result); 
    })
  }

  onClick(){
   console.log("koi nayh jatt a"); 
  }



}
