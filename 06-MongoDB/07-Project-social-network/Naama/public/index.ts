const userFunctionsDiv = document.getElementById('userFunctions') as HTMLDivElement;
async function main(){
  try {
    const idCookie = await fetch('http://localhost:3000/users/get-user-id-cookie');
    if(!idCookie.ok){
      userFunctionsDiv.innerHTML = `
      <a href="./pages/register.html">הרשמה</a>
      <a href="./pages/login.html">התחברות</a>
      `
    }else{
      userFunctionsDiv.innerHTML = `
      <a href="./pages/logout.html">התנתק</a>
      `
    }
  } catch (error) {
    console.error(error);
  }
}