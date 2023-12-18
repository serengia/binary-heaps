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
      } else break;
    }

    return this.values;
  }

  extractMax() {
    const max = this.values[0];
    const last = this.values.pop();
    this.values[0] = last;

    let index = 0;

    while (index < this.values.length) {
      let currentParent = this.values[index];
      let leftChild = this.values[2(index + 1)] || 0;
      let rightChild = this.values[2(index + 2)] || 0;

      if (currentParent < Math.max(leftChild, rightChild)) {
        // swap
      }
    }

    return max;
  }
}

const initialValues = [41, 39, 33, 18, 27, 12];

const heap = new MaxBinaryHeap(initialValues);
console.log(heap.insert(55));
