async function handelAddUserToDB(e:any){
    try {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data)
        
            const response = await fetch('http://localhost:3000/users/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            if (jsonResponse.ok) {
                window.location.href = './login.html';
            } else {
                alert(jsonResponse.error);
            }
            if(!response.ok) throw new Error('Cannot add user');
            console.log(response.body);

    } catch (error) {
        console.error(error);
    }
}