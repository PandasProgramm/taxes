import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'cavok-ng-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.less']
})
export class ContentHeaderComponent implements OnInit {

  /**
   * @param { EventEmitter<boolean>} pushRemoveEvent to push event to remove content
   * @param { string} title to show task name
   */
  @Output()pushRemoveEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() title: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
}
