import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISmartField } from './models/items.models';

/** @title Virtual scroll with view recycling disabled. */
@Component({
  selector: 'cdk-virtual-scroll-append-only-example',
  styleUrls: ['cdk-virtual-scroll-append-only-example.css'],
  templateUrl: 'cdk-virtual-scroll-append-only-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkVirtualScrollAppendOnlyExample {
  index: number;
  _load: any;
  @Input() set load(value: any) {
    this._load = value;
    this.getFields();
  }

  items = Array.from({ length: 100000 }).map((_, i) => {
    return {
      id: i,
      value: `Item #${i}`,
      metadata: {
        type: i % 1 ? 'TEXT' : i % 2 ? 'RADIO' : 'CHECK',
      },
    } as ISmartField;
    // return `Item #${i}`;
  });

  filtered: ISmartField[];

  getFields() {
    this.filtered = this.items;
  }

  filter(type: 'ALL' | '2X' | '3X') {
    switch (type) {
      case '2X':
        this.filtered = this.items.filter((item, index) => index % 2);
        break;
      case '3X':
        this.filtered = this.items.filter((item, index) => index % 3);
        break;
      default:
        this.filtered = this.items;
        break;
    }
  }

  onIndexChange($event: number) {
    this.index = $event;
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
