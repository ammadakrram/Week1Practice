class QueueNode {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor () {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue (val) {
        const newNode = new QueueNode(val);
        if (this.size === 0) {
            this.front = newNode;
            this.back = newNode;
        }
        else {  
            this.back.next = newNode;
            this.back = newNode;
        }
        this.size++;
    }

    dequeue () {
        if (this.size === 0) return null;
        if (this.size === 1) {
            this.back = null;
        }
        const dequeuedNode = this.front;
        this.front = this.front.next;
        this.size--; 
        return dequeuedNode.val;
    }
}

const queue = new Queue();
queue.enqueue(50);
queue.enqueue(52);
console.log(queue);
// queue.enqueue(54);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);

// console.log(queue.front.val, queue.back.val);