let cnt:number = 0;

function handleCountClick(event:any){
    const div = document.getElementById("count") as HTMLDivElement;
    cnt++;
    console.log(cnt);
    getCountFromServer();
    postCountToServer();
}

async function getCountFromServer(){
    try{
    const responce = await fetch("/count");
    const data = await responce.json();
    console.log(data);
    }catch(error){
        console.error(error)
    }
}

async function postCountToServer(){
    try{
    const responce = await fetch("/updatecount");
    const data = await responce.json();
    console.log(data);
    }catch(error){
        console.error(error)
    }
}