      
    function introduce (name: string, age: number): string{
        try {
            //assertion
            if (age === undefined){
    
                throw new Error('Age not provided.');
            }
            return "Hello I am, "+ Name + " and I am  "+ age +" years old"
        }
        catch (error) {
            console.error(error);
            return ("Hello I am, "+ Name)
        }
    }
    console.log  ("Jane", 12);
    
    console.log ("Jane");
    

  
    let message = "Hello";
    message += ", Everyone!";
    
    console.log(message); 
  

    
    type MyString = "hello"; 
    type CapitalizedString = Capitalize<MyString>; 
    const result: CapitalizedString = "Hello"; 
    console.log(result);

  