import React from 'react';
import { shuffle, range } from 'lodash';
import { App, snapshot, done, clear } from './sort-visualizer';

import './sort.css';

function sort(arr) {
  snapshot(arr);
  for (let i = 1; i < arr.length; i += 1) {
    let numberToInsert = arr[i];
    let j = 0;

    snapshot(arr);

    for (j = i - 1; arr[j] > numberToInsert && j >= 0; j--) {
      arr[j + 1] = arr[j];
      snapshot(arr);
    }

    arr[j + 1] = numberToInsert;
    snapshot(arr);
  }
  snapshot(arr);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(7)));
  done();
  return <App />;
}
