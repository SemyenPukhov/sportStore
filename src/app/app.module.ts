import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from './store/store.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
