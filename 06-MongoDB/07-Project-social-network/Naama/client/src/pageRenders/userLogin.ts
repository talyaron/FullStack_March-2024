export async function handelLogin(e:any){
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
            } else {
                alert(jsonResponse.error);
            }
            if(!response.ok) throw new Error('Cannot Login');
            console.log(response.body);

    } catch (error) {
        console.error(error);
    }
}

export function renderLogin(){
    return `<form id="loginForm">
        <input type="email" name="email"  placeholder="אימייל" required>
        <input type="password" name="password" placeholder="סיסמא" required>
        <button type="submit">התחבר!</button>
    </form>
    <a href="register">הרשם</a>
    `;
}


