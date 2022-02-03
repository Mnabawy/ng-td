import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  editable = false;

  @Input() item: Item;
  @Input() newItem: Item;
  @Output() remove = new EventEmitter<Item>();

  saveItem(desc) {
    if (!desc) return;
    this.editable = false;
    this.item.description = desc;
  }
}
