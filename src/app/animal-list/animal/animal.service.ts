import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from './animal.model';

@Injectable()
export class AnimalService {

    public ANIMAL_API = 'http://localhost:3000/animais'
    constructor(public http: HttpClient) { }

    getAnimal(): Observable<Animal[]> {
        return this.http.get<Animal[]>(`${this.ANIMAL_API}`)
    }
}