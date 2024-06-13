document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('Modulu') as HTMLFormElement;
    const num1_input = document.getElementById('num1') as HTMLInputElement;
    const num2_input = document.getElementById('num2') as HTMLInputElement;
    const result_output = document.getElementById('result') as HTMLDivElement;

    form.addEventListener('submit', (e) => {
        e.preventDefault();        
        try {
            const num1 = parseInt(num1_input.value, 10);
            const num2 = parseInt(num2_input.value, 10);
            if (isNaN(num1) || isNaN(num2) || num2 === 0) {
                throw new Error('Oh oh, you broke it!');
            }

            const Result = num1 % num2;
            result_output.textContent = `${Result}`;

        } catch (error) {
            result_output.textContent = (error as Error).message;
            result_output.className = 'error';
        }
    });
});

window.onload = function () {
    const backgroundImg = [
        "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1667761634654-7fcf176434b8?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];

    setInterval(changeImage, 5000);
    function changeImage() {   
        const i = Math.floor((Math.random() * 4));
        document.body.style.backgroundImage = `url('${backgroundImg[i]}')`;
    }
}
