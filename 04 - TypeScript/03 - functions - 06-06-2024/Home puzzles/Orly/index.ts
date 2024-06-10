      
    function introduce (name: string, age: number): string{
        try {
           
            if (age === undefined){
    
                throw new Error('Age not provided.');
            }
            return  "Hello I am, "+ name + " and I am  "+ age +" years old"
        }
        catch (error) {
            console.error(error);
            return "Hello I am, "+ name
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

  