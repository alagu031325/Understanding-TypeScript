class ListNode<T> {
    //public property to store a pointer to next node
    next?: ListNode<T>;
    constructor(public value: T) {}
}

// Generic class
class LinkedList<T> {
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length = 0;

    add(value: T) {
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            // Now new node will be the tail node
            this.tail = node;
        }
        this.length++;
    }

    insertAt(value: T, pos: number) {
        if (pos > -1 && pos < this.length && this.root) {
            let current = this.root;
            let index = 0;
            let previous = current;
            let node = new ListNode(value);

            if (pos === 0) {
                node.next = this.root;
                this.root = node;
            } else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        } else {
            return false;
        }
    }

    removeAt(pos: number) {
        if (pos > -1 && pos < this.length && this.root) {
            let current = this.root;
            let previous = current;
            let index = 0;
    
            if (pos === 0) {
                this.root = current.next;
            } else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current;
        } else {
            return null;
        }
    }

    //Helper methods
    getNumberOfElements() {
        return this.length;
    }

    printNodes() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Number linked list
const numberList = new LinkedList<number>();
numberList.add(10);
numberList.add(-3);
numberList.add(1);

console.log(`The total number of items is ${numberList.getNumberOfElements()}`);
numberList.printNodes();
// String linked list
const nameList = new LinkedList<string>();