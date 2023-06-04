import { Component ,OnInit } from '@angular/core';
 import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit() {
     AOS.init();
   }

  images = ['./../../../assets/banner1.jpg', './../../../assets/banner2.jpg', './../../../assets/banner3.jpg'];
  currentIndex = 0;

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
