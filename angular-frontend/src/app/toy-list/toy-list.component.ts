import { Component, OnInit, inject } from '@angular/core';
import { ZToysService } from '../ztoys.service';
import { ZToys } from '../ZToys';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-toy-list',
  templateUrl: './toy-list.component.html',
  styleUrl: './toy-list.component.css'
})
export class ToyListComponent implements OnInit {

toys: ZToys[] = []


  constructor(private toyService: ZToysService) {}


  ngOnInit(): void {
    console.log("kee dekhrya?"); 
    this.toyService.getToys().subscribe(toy => {
      this.toys = toy; 
    })
  };

  }
