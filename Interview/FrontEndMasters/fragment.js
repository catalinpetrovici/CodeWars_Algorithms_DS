// re render

const fragment = document.createDocumentFragment();

this._data.forEach((i) => {
  fragment.appendChild(this.createFoodItem(i));
});

this._root.appendChild(fragment);
