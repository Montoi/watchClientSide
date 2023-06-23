import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import Swiper, { SwiperOptions } from 'swiper';
// register Swiper custom elements
register();
@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements AfterViewInit {
  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  
  ngAfterViewInit(): void {
    this.swiper = this.swiperRef?.nativeElement.swiper
    if (this.swiper) {
      const swiperOptions: SwiperOptions = {
        spaceBetween: 24,
       
        breakpoints: {
          576: {
            
            slidesPerView: 2,
            allowTouchMove: true
          },
          768: {
           
            slidesPerView: 3,
            allowTouchMove: true

          },
          1024: {
          
            slidesPerView: 4,
            allowTouchMove: true

          },
      },
      }
      this.swiper.destroy()
      this.swiper = new Swiper(this.swiperRef?.nativeElement, swiperOptions);
      this.swiper.allowTouchMove = true
     
    }
    console.log(this.swiper?.allowTouchMove);
    
  }

  goPrev(): void {
    console.log('prev');
    
    this.swiper?.slidePrev();
  }
  goNext(): void {
    console.log('next');

    this.swiper?.slideNext();
  }
  
}
