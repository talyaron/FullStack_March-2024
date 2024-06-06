document.getElementById('birthdayForm')!.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    const nameInput: HTMLInputElement = document.getElementById('name') as HTMLInputElement;
    const birthdayInput: HTMLInputElement = document.getElementById('birthday') as HTMLInputElement;

    if (nameInput && birthdayInput) {
        const name: string = nameInput.value;
        const birthday: Date = new Date(birthdayInput.value);
        const today: Date = new Date();

        if (birthday > today) {
            const resultDiv: HTMLElement = document.getElementById('result')!;
            resultDiv.innerText = "Are you trying to mess with me, time traveler?";
            return;
        }

        let nextBirthday: Date = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
        
        if (nextBirthday < today) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }

        const timeDiff: number = nextBirthday.getTime() - today.getTime();
        const daysUntilBirthday: number = Math.ceil(timeDiff / (1000 * 3600 * 24));
        const age: number = nextBirthday.getFullYear() - birthday.getFullYear();

        const resultDiv: HTMLElement = document.getElementById('result')!;
        resultDiv.innerText = `Hello ${name}, you will turn ${age} in ${daysUntilBirthday} days!`;
    }
});
