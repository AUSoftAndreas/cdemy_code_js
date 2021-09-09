// import 'package:dart_stack_queue/queue.dart';
// import 'package:dart_stack_queue/stack.dart';
// import 'package:test/test.dart';

// void main() {
//   test('Stack-Tests', () {
//     var stack = Stack();
//     expect(stack.length, 0);

//     stack.push(1);
//     expect(stack.length, 1);
//     expect(stack.preview(), 1);

//     stack.push(2);
//     expect(stack.length, 2);
//     expect(stack.preview(), 2);

//     stack.push('Hallo');
//     expect(stack.length, 3);
//     expect(stack.preview(), 'Hallo');

//     stack.push(true);
//     expect(stack.preview(), true);
//     expect(stack.length, 4);

//     expect(stack.preview(), true);
//     expect(stack.pop(), true);
//     expect(stack.length, 3);

//     expect(stack.preview(), 'Hallo');
//     expect(stack.pop(), 'Hallo');
//     expect(stack.length, 2);

//     expect(stack.preview(), 2);
//     expect(stack.pop(), 2);
//     expect(stack.length, 1);

//     expect(stack.preview(), 1);
//     expect(stack.pop(), 1);
//     expect(stack.length, 0);

//     expect(stack.preview(), null);
//     expect(stack.pop(), null);
//   });

//   test('Queue-Tests', () {
//     var queue = Queue();
//     expect(queue.length, 0);

//     queue.push(1);
//     expect(queue.length, 1);
//     expect(queue.preview(), 1);

//     queue.push(2);
//     expect(queue.length, 2);
//     expect(queue.preview(), 1);

//     queue.push('Hallo');
//     expect(queue.length, 3);
//     expect(queue.preview(), 1);

//     queue.push(true);
//     expect(queue.preview(), 1);
//     expect(queue.length, 4);

//     expect(queue.preview(), 1);
//     expect(queue.pop(), 1);
//     expect(queue.length, 3);

//     expect(queue.preview(), 2);
//     expect(queue.pop(), 2);
//     expect(queue.length, 2);

//     expect(queue.preview(), 'Hallo');
//     expect(queue.pop(), 'Hallo');
//     expect(queue.length, 1);

//     expect(queue.preview(), true);
//     expect(queue.pop(), true);
//     expect(queue.length, 0);

//     expect(queue.preview(), null);
//     expect(queue.pop(), null);
//   });
// }
