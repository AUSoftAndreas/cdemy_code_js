class Queue<T> {
  final List<T> _queue = [];

  int get length => _queue.length;

  T? preview() => _queue.isEmpty ? null : _queue.first;

  void push(T item) {
    _queue.add(item);
  }

  T? pop() {
    return _queue.isEmpty ? null : _queue.removeAt(0);
  }
}
