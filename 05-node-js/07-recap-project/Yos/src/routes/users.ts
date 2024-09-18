const route = require('express');
const router = route.Router();

class User{
    name:string;
    id:string;
    age:number;
    title:string;
    constructor(name:string,  age:number, title:string, id:string,){
        this.name = name;
        this.id = crypto.randomUUID();
        this.age = age;
        this.title = title;
    }
}

const users:User[] = [
    new User('John', 23, 'Mr', '1'),
    new User('Jane', 24, 'Mrs', '2'),
    new User('Dan', 25, 'Dr', '1234'),
    new User('Doe', 26, 'Prof', '12345'),
]


router.get('/all-users', (req:any, res:any) => {
    res.json(users);
})


module.exports = router