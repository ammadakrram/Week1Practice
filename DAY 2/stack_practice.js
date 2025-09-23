class StackNode {
    constructor( val ) {
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor () {
        this.top = null;
        this.size = 0;
    }

    push (val) {
        if (this.size === 0){
            this.top = new StackNode(val);
        }
        else {
            const pushedNode = new StackNode(val);
            pushedNode.next = this.top;
            this.top = pushedNode;
        }

        this.size++;
    }

    pop () {
        if (this.size === 0){
            return null;
        }
        const poppedNode = this.top.val;
        this.top = this.top.next;
        this.size--;
        return poppedNode; 
    }

    getTop(){
        return this.top.val;
    }
}

const stack = new Stack();
// console.log(stack);
stack.push(4);
stack.push(5);
console.log(stack.pop());
console.log(stack.getTop())