import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './modules/home/main/main.component';
import { FirstLookComponent } from './shared/components/Home-first-look/first-look.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FeaturedComponent } from './shared/components/featured/featured.component';
import { StoryComponent } from './shared/components/story/story.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { TestimonialComponent } from './shared/components/testimonial/testimonial.component';
import { NewArrivalsComponent } from './shared/components/new-arrivals/new-arrivals.component';
import { NewsLetterComponent } from './shared/components/news-letter/news-letter.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { CartComponent } from './shared/components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FirstLookComponent,
    FooterComponent,
    FeaturedComponent,
    StoryComponent,
    ProductsComponent,
    TestimonialComponent,
    NewArrivalsComponent,
    NewsLetterComponent,
    NavComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
