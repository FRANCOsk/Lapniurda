import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  constructor() {

    

   }

  ngOnInit(): void {

   


  }

  fb(){

    window.location.href = 'https://www.facebook.com'

  } 


}
