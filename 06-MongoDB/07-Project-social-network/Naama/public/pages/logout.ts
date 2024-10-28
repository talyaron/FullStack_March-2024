async function logout(){
    try {
            const response = await fetch('http://localhost:3000/users/user-logout',{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                window.location.href = '../index.html';
            } else {
                alert("לא יכול להתנתק");
            }
    } catch (error) {
        console.error(error);
    }
}