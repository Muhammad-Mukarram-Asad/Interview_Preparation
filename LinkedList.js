class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // Make the next pointer to null just for first element.
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Function to add a new node at the end of the linked list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Method for adding elements at the beginning of the list:

  prepend(data)
  {
    const newNode = new Node(data);
    newNode.next = this.head; // Means the new added value ka next pointer ko head krdiya ab wo whatever jo bhi value ho. Agr wo pehla element hai tou this.head jo hai
    // wo null ho ga warna phr koi value ho gi.
    this.head = newNode; // Aur yahan ham na head ko newValue krdi.
  }
    

  // Function to reverse the linked list
  reverse() {
    let prev = null; 
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  // Function to display the linked list
  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Create a new linked list
const myList = new LinkedList();

// Add elements to the linked list
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);

console.log("Original Linked List:");
myList.display();

// Reverse the linked list
myList.reverse();

console.log("\nReversed Linked List:");
myList.display();
