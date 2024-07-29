class order {
  description: string;
  id: string;
  done: boolean;
  constructor(description: string) {
    this.description = description;
    this.id = `id-${crypto.randomUUID()}`;
    this.done = false;
  }
}
