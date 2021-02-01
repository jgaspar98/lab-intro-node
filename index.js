class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a, b){return a-b});
  }

  get(pos) {
      if (this.length > 0 && pos < this.length){
        return this.items[pos]; 
      } else {
        throw new Error('OutOfBounds');
      }
  }

  max() {
      if (this.items.length === 0){
        throw new Error('EmptySortedList');
      } else {
        this.items.sort(function(a, b){return a-b});
        return this.items[this.length-1];
      }
  }

  min() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
      this.items.sort(function(a, b){return a-b});
      return this.items[0];
    }
  }

  sum() {
    if (this.items.length === 0){
      return 0;
    } else {
      this.items.sort(function(a, b){return a-b});
      return this.items.reduce((a,b) => a+b,0);
    }
  }

  avg() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
      this.items.sort(function(a, b){return a-b});
      return this.items.reduce((a,b) => a+b,0)/this.length;
    }
  }
}

module.exports = SortedList;
