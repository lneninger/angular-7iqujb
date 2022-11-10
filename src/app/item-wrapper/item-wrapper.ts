import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-item-wrapper',
  templateUrl: './item-wrapper.html',
  styleUrls: ['./item-wrapper.css']
})
export class ItemWrapper {

@Input() item: any;




}