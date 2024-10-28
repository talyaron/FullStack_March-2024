async function handelLogin(e:any){
    try {
        console.log("handelLogin")  
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data)
        
            const response = await fetch('http://localhost:3000/users/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            if (jsonResponse.ok) {
                // window.location.href = '/';ok
                console.log("ok")
                window.location.href = '../index.html';
                //alert("Login successful");
            } else {
                alert(jsonResponse.error);
            }
            if(!response.ok) throw new Error('Cannot Login');
            console.log(response.body);

    } catch (error) {
        console.error(error);
    }
}