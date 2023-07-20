type SNode<T> = {
  value: T;
  previus?: SNode<T>;
  next?: SNode<T>;
};

export default class Stack<T> {
  public length: number;
  public head?: SNode<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node = { value: item } as SNode<T>;
    this.length++;

    if (!this.head) {
      this.head = node;
      return;
    }

    node.previus = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);

    if (this.length == 0) {
      const head = this.head as SNode<T>;
      this.head = undefined;

      return head?.value;
    }

    const head = this.head as SNode<T>;
    this.head = head.previus;

    return this.head?.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

const stack = new Stack();

stack.push(1);