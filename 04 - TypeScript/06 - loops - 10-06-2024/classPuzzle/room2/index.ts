function evenFactorial(num:number):number|undefined{
    try {
        let count = 1;
        for(let i=2; i<num ; i+=2){
            count*=i;
        }
        return count;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

//console.log(evenFactorial(5));

// Exercise: Calculate Bus Ticket Price
// Write a TypeScript function called calculateBusTicketPrice that takes a person's age and the regular ticketPrice as input. The function should return the adjusted ticket price based on the following rules:
// If the person is under 18 years old, they get a 50% discount.
// If the person is between 18 and 67 (inclusive), they pay the full ticket price.
// If the person is over 67 years old, nagid its free. 


function calculateBusTicketPrice(personAge:number,ticketPrice:number,condition?:string):number|undefined{
    try {
        switch(condition){
            case "batsherut":
                return 0;
                break;
            case "disabled":
                return ticketPrice/2;
                break;
            case "soldier":
                return 0;
        }
        if (personAge<18) {
            return ticketPrice/2;
        }else if(personAge>67){
            return 0;
        }else{
            return ticketPrice;
        }
    } catch (error) {
        console.error(error)
        return undefined;
    }
}

console.log(calculateBusTicketPrice(20,5,"disabled"));