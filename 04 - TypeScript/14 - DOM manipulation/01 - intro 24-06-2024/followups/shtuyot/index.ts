let count:number = 0;
let dancing:number=0;
let tired:number = 0;

function dance(){
    try {
        const image = document.getElementById("dancingImages") as HTMLImageElement;
        const text = document.getElementById("text") as HTMLParagraphElement;
        if(count<=25){
            switch(dancing){
                case 0:
                    image.src = "./images/dance1.png";
                    count++;
                    dancing=1;
                break;
                case 1:
                    image.src = "./images/dance2.png";
                    count++;
                    dancing=0;
                break;
            }
        }else{
            text.innerText="עכשיו היא עייפה, זהו.";
            switch(tired){
                case 0:
                    image.src = "./images/tired1.png";
                    tired=1;
                break;
                case 1:
                    image.src = "./images/tired2.png";
                    tired=0;
                break;
            }
        }
        
    } catch (error) {
        console.error(error);
    }
}