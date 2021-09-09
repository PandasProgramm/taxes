import {EventEmitter, Injectable} from '@angular/core';
import {combineLatest, Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  pushInputField: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }


  getFilteredRows(inputRows$: Observable<string[]>, searchValue$: Observable<string>) : Observable<string[]> {
    return combineLatest([inputRows$,searchValue$]).pipe(
      map(([rows,value]) => {
        const temp: string[]= [];
        let rowTemp = '';
        if( value === '' || value === null ) {
          return rows;
        }
        rows.forEach(row => {
          rowTemp = row.slice(0, value.length);
          if( rowTemp === value ){ temp.push(row); }
        });
        return temp;
      }));
  }

  pushInput(): void {
    this.pushInputField.emit(0);
  }
}
