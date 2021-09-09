import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
  //todo: get data from storage
  getSelections(): Observable<string[]> {
    return of(['bitte auswählen','ein Platzhalter','sehr gut', 'gut', 'befriedigend', 'ausreichend', 'mangelhaft']);
  }
}
