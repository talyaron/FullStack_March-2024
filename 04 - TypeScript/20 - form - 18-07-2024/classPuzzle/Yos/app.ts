function handleSubmitEvent(event: Event): void {
    event.preventDefault();
    try {
        const form = event.target as HTMLFormElement;
        const name = form.name.value
        const type = form.type.value;
        const coffee = form.coffee;
        let coffees = [];
        coffee.forEach(item => { if (item.checked) { coffees.push(item.defaultValue) } })
        if (coffees.length > 1) { alert('Please choose only one Coffee'); form.reset(); return; }
        console.log('sdfs', coffees)
        const strong = form.strong.checked;
        const sugar = form.sugar;
        const featuresArray = [];
        const features = form.features;
        form.features.forEach(i => { if (i.checked) { featuresArray.push(i.defaultValue) } })
        console.dir(form, features,);
        console.log(name, type, strong, sugar.value);
        console.log('sdf', featuresArray, features);

        form.reset();


    } catch (error) {
        console.error(error);
    }
}

function handleCoffeeType(event: Event) {
    try {
        let coffeeType = [];

        const form = event.target as HTMLFormElement;
        const coffee = form.coffee;
        console.log(coffee);
        console.dir(event);
    } catch (error) {
        console.error(error);
    }
}