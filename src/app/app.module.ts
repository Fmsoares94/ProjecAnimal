import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalComponent } from './animal-list/animal/animal.component';
import { AnimalService } from './animal-list/animal/animal.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    AnimalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
