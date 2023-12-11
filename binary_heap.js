class MaxBinaryHeap {
  constructor(values) {
    this.values = values;
  }

  insert(ele) {
    this.values.push(ele);
    let index = this.values.length - 1;

    // Bubble up
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];

      if (ele > parent) {
        // swap
        this.values[parentIndex] = ele;
        this.values[index] = parent;
        index = parentIndex;
      }
    }

    return this.values;
  }
}

const initialValues = [41, 39, 33, 18, 27, 12];

const heap = new MaxBinaryHeap(initialValues);
console.log(heap.insert(55));
