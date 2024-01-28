import { Component, OnInit } from '@angular/core';
import { ZToysService } from '../ztoys.service';
import { ZToys } from '../ZToys';

@Component({
  selector: 'app-add-toy',
  templateUrl: './add-toy.component.html',
  styleUrl: './add-toy.component.css'
})
export class AddToyComponent implements OnInit {

  ztoys: ZToys = null; 

  private url: string = 'http://localhost:8080/toys'; 

  constructor(private toyService: ZToysService) {}

  ngOnInit(): void {
    this.toyService.postToys<ztoys>(this.url)
  }



}
