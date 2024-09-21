// We will have to great our class constructor for our nodes.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// test case 1
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergeTwoList = (list1, list2) => {
  const newNode = new ListNode();
  let tail = newNode;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  tail.next = list1 || list2;

  return newNode.next;
};

const printList = (head) => {
  let curr = head;
  let output = "";
  while (curr) {
    output += curr.val + "->";
    curr = curr.next;
  }
  output += "null";
  console.log(output);
};

let mergeSoreted = mergeTwoList(list1, list2);
printList(mergeSoreted);

//test case 2
list1 = null;
list2 = new ListNode(0);
mergeSoreted = mergeTwoList(list1, list2);
printList(mergeSoreted);
