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

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const initialValues = [41, 39, 33, 18, 27, 12];

const heap = new MaxBinaryHeap(initialValues);
// console.log(heap.insert(55));
console.log(heap.values);
console.log(heap.dequeue());
console.log(heap.values);

console.log(heap.dequeue());
console.log(heap.values);

console.log(heap.dequeue());
console.log(heap.values);
