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
      const parentCurrent = this.values[parentIndex];

      if (ele > parentCurrent) {
        // swap
        this.values[parentIndex] = ele;
        this.values[index] = parentCurrent;
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
    let rightChildIndex = 0;

    while (rightChildIndex < this.values.length) {
      let currentParent = this.values[index];
      let leftChildIndex = 2 * index + 1;
      rightChildIndex = 2 * index + 2;

      let leftChild = this.values[leftChildIndex];
      let rightChild = this.values[rightChildIndex];

      let maxChildIndex = leftChildIndex;
      if (rightChild > leftChild) maxChildIndex = rightChildIndex;

      if (currentParent < this.values[maxChildIndex]) {
        // swap
        this.values[index] = this.values[maxChildIndex];
        this.values[maxChildIndex] = this.values[index];
      }

      index++;
    }

    return max;
  }
}

const initialValues = [41, 39, 33, 18, 27, 12];

const heap = new MaxBinaryHeap(initialValues);
// console.log(heap.insert(55));
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);

console.log(heap.extractMax());
console.log(heap.values);

console.log(heap.extractMax());
console.log(heap.values);
