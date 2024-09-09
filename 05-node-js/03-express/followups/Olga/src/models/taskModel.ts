export class Task {
  id: string;
  name: string;
  isCompleted: boolean;

  constructor(name: string) {
    this.id = `id-${crypto.randomUUID()}`;
    this.name = name;
    this.isCompleted = false;
  }

  complete() {
    this.isCompleted = true;
  }
}
