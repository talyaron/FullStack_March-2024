let count:number = 0;
let dancing:number=0;
let isTired:boolean = false;
function dance(){
    try {
        const image = document.getElementById("dancingImages") as HTMLImageElement;
        //console.dir(image);
        if(count<=25 && isTired==false){
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
        }
        
    } catch (error) {
        console.error(error);
    }
}