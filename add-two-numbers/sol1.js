/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let result = new ListNode(0);
  let curr = result;

  while (l1 || l2 || carry) {
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;

    let nextDigit = (l1Val + l2Val + carry) % 10;
    curr.next = new ListNode(nextDigit);
    curr = curr.next;
    carry = Math.floor((l1Val + l2Val + carry) / 10);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return result.next;
};
