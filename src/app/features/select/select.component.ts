import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {DataService} from "../../../shared/data.service";
import {StoreService} from "../../../shared/store.service";

@Component({
  selector: 'cavok-ng-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})

/**
 * @param {BehaviorSubject<string>} searchValue$ to listen for each new input.
 * @param {string} pushData to push the Selection in the main control.
 * @param {string} selected to show selected value.
 * @param {string} defaultSelected is never undefined after content init.
 *        This value is a backup to reset the entry on push the remove button.
 * @param {Observable<string[]>} inputRows$ describe the input from the soap request.
 * @param {Observable<string[]>} filteredRows$ is the result from filtered entry's of inputRows.
 * @param {boolean} panelState to used to control the panel.
 */

export class SelectComponent implements OnInit {

  @Input()searchValue$: BehaviorSubject<string>
  @Output()pushData: EventEmitter<string>

  titleTask = 'Auswahl';
  selected: string | undefined;
  defaultSelected: string | undefined;

  inputRows$: Observable<string[]>;
  filteredRows$: Observable<string[]>;

  panelState = false;

  constructor(private store: StoreService, private dataService: DataService) {
    this.pushData = new EventEmitter<string>();
    this.searchValue$ = new BehaviorSubject<string>('');
    this.inputRows$ = this.store.getSelections();
    this.filteredRows$ = this.dataService.getFilteredRows(this.inputRows$, this.searchValue$);
  }

  /**
   * subscribe the inputRows$ to show the first entry by default.
   */
  ngOnInit(): void {
    this.inputRows$.subscribe(rows => {
      this.selected = rows[0];
      this.defaultSelected = rows[0];
    }).unsubscribe();
  }

  /**
   * The selected value is passed to the expression panel head to display the selected value.
   * This method passes the selected value to the parent component.
   */
  onSelect(row: string): void {
    this.selected = row;
    this.panelState = false;
    this.pushData.emit(row);
  }

  /**
   * This method reset all values including the search field.
   */
  onReset(event: boolean): void {
    if(event) {
      this.selected = this.defaultSelected;
      this.dataService.pushInput();
      this.panelState = false;
      this.pushData.emit('');
    }
  }
}
