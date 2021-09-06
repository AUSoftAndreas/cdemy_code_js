class Stack<R> {
  final List<R> _stack = [];

  int get length => _stack.length;

  R? preview() => _stack.isEmpty ? null : _stack.last;

  void push(R item) {
    _stack.add(item);
  }

  R? pop() {
    return (_stack.isEmpty ? null : _stack.removeLast());
  }
}
