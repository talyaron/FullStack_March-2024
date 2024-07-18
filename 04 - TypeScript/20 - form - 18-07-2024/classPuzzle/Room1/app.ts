class Coffee {
  name: string;
  type: string;
  size: string;
  extra: string;

  constructor(name: string, type: string, size: string, extra: string) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.extra = extra;
  }
}
const coffees: Coffee[] = [];
function handleAddCoffeeOrder(ev: any) {
  try {
    ev.preventDefault();
    const form = ev.target;
    const name = form.name.value;
    const type = form.type.value;
    const size = form.size.value;
    const extra = form.extra.value;
    extra.forEach((extra: any) => {
      if (extra.checked) {
        console.log("extra", extra.value);
      }
    });
    const coffee = new Coffee(name, type, size, extra);
    coffees.push(coffee);
    console.log(coffees);
    form.reset();
  } catch (e) {
    console.error("Error:", e);
  }
}
