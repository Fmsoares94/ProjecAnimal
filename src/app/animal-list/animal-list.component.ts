import { Component, OnInit } from '@angular/core';
import { AnimalService } from './animal/animal.service';
import { Animal } from './animal/animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {
  animais: Animal[]
  constructor( private animalService: AnimalService) { }

  ngOnInit() {
    this.animalService.getAnimal()
    .subscribe(animal => this.animais = animal)   
  }

}
