function main(){
    try {
        const getDanBtn = document.getElementById('getDanBtn');
        if(!getDanBtn) throw new Error('No button found');
        
        getDanBtn.addEventListener('click', async () => {
            
            
            
            const getDan= await fetch(`/api/users/1234`);
            if(!getDan.ok) throw new Error("no response");
            
            const data = await getDan.json();
            console.log(data);
        });
    } catch (error) {
        console.error(error);
        
    }
}