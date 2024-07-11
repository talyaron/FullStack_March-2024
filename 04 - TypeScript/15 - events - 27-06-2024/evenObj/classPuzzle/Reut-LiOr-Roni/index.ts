function handleDissappear(event) {
    try {
        const blackBox=document.querySelector("#blackBox") as HTMLImageElement;
        if (!blackBox) throw new Error("blackBox not found");
        blackBox.style.display="none"
        
    } catch (error) {
        console.error(error); 
    }
}