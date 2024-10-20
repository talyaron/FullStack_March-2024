export async function handelAddUserToDB(e:any){
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
                window.location.href = '/login';
            } else {
                alert(jsonResponse.error);
            }
            if(!response.ok) throw new Error('Cannot add user');
            console.log(response.body);

    } catch (error) {
        console.error(error);
    }
}

export function renderRegistretion(){
    return `<form id="registerForm">
        <input type="text" name="userName" placeholder="שם משתמש" required>
        <input type="email" name="email"  placeholder="אימייל" required>
        <input type="password" name="password" placeholder="סיסמא" required>
        <input type="text" name="pronounce"  placeholder="לשון פניה" required>
        <input type="date" name="birthday" placeholder="1.1.2000">
        <button type="submit">הירשם!</button>
    </form>
    <a href="login">התחברות</a>
    `;
}


