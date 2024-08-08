function something(event:any){
    const form = event.target;
    const name = form.name.value;
    localStorage.setItem('name',name);
    const pass = form.pass.value;
    localStorage.setItem('pass',pass);
    //const userid:string=crypto.randomUUID;
    //localStorage.setItem('userId',userid);

}

while(localStorage.getItem('name')){
    const mifclasses = document.querySelector('#mif')?.classList;
    mifclasses?.add('hidden');
}