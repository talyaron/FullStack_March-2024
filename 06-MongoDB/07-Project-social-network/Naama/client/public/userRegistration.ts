import {encrypting} from "./functions";

export function renderRegister(){
    const html:string = `
        <form onsubmit="handelAddUserToDB(event)">
            <input type="text" name="userName" placeholder="שם משתמש" required>
            <input type="email" name="email"  placeholder="אימייל" required>
            <input type="password" name="password" placeholder="סיסמא" required>
            <input type="text" name="pronounce"  placeholder="לשון פניה" required>
            <input type="date" name="birthday" placeholder="שנת לידה">
            <button type="submit">הירשם!</button>
        </form>
    `;
    const div = document.getElementById("content") as HTMLDivElement;
    div.innerHTML = html;
}

export async function handelAddUserToDB(e:any){
    e.preventDefault();
    try {
        const form = e.target;
        const name = form.userName.value;
        const email = form.email.value;
        const uncryptpassword = form.password.value;
        const cryptpassword = encrypting(uncryptpassword);
        const pronounce = form.pronounce.value;
        const birthday = new Date(form.birthday.value);
        
            const response = await fetch('http://localhost:3000/users/add-new-user',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: name,
                    email: email,
                    password: cryptpassword,
                    pronounce: pronounce,
                    birthday: birthday.toISOString()
                })
            });

            if(!response.ok) throw new Error('Cannot add user');
            console.log(response.body);

    } catch (error) {
        console.error(error);
    }
}