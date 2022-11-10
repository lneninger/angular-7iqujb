import {ChangeDetectionStrategy, Component} from '@angular/core';

/** @title Virtual scroll with view recycling disabled. */
@Component({
  selector: 'cdk-virtual-scroll-append-only-example',
  styleUrls: ['cdk-virtual-scroll-append-only-example.css'],
  templateUrl: 'cdk-virtual-scroll-append-only-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkVirtualScrollAppendOnlyExample {


  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  filtered = this.items;

  filter(type: 'ALL' | 'EVEN'){
    switch(type){
        case 'EVEN' :
          this.filtered = this.items.filter((item, index) => index % 2);
          break;
          default:
            this.filtered = this.items;
            break;
          }
  }
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */