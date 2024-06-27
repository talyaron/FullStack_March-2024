//https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/png_96_dpi/blue.png
let flip = 0;

function handleclick(event){
    try {
        const backimg = document.getElementById("back") as HTMLDivElement;
        switch(flip){
            case 0:
                backimg.style.display = "block";
                //backimg.style.transform = "rotate(180deg)";
                flip=1;
            break;
            case 1:
                backimg.style.display = "none";
                flip=0;
            break;
        }
    } catch (error) {
        
    }
}