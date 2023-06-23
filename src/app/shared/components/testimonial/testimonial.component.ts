import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements AfterViewInit{
  constructor(){
    
  }
  ngAfterViewInit(): void {
    this.swiper = this.swiperRef?.nativeElement.swiper
  }
  
  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  
  
  
  goPrev(): void {
    console.log('prev');
    
    this.swiper?.slidePrev();
  }
  goNext(): void {
    console.log('next');

    this.swiper?.slideNext();
  }
  swiperReady(): void{
  }
  ngOnInit(): void {
    
  }
}
