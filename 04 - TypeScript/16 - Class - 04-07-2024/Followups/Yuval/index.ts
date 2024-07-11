class Human {
  id: number;
  age: number;
  gender: string;
  nation: string;
  religion: string;

  constructor(id: number, age: number ,gender: string, nation: string, religion: string) {
    this.id = id;
    this.age = age;
    this.gender = gender;
    this.nation = nation;
    this.religion= religion;
  }
  
}

const Yuval = new Human(203829122, 32, "male", "israeli", "jewish");