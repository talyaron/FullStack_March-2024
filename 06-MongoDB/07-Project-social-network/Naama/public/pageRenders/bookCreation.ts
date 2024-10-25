export async function handelAddBookToDB(e:any){
    try {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data)
        
            const response = await fetch('http://localhost:3000/books/add-new-book',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            if (jsonResponse.ok) {
                window.location.href = '/my-books';
            } else {
                alert(jsonResponse.error);
            }
            if(!response.ok) throw new Error('Cannot add user');
            console.log(response.body);

    } catch (error) {
        console.error(error);
    }
}

export function renderBookCreation1(){
    return `<form id="bookCreationForm">
        <input type="text" name="title" placeholder="כותרת" required>
        <input type="text" name="description"  placeholder="תיאור" required>
        <label for="genre">ג'אנר</label>
        <select name="genre" id="genre" form="bookCreationForm" required>
            <option value="רומנטיקה">רומנטיקה</option>
            <option value="דיכאוני">דיכאוני</option>
            <option value="פאנפיקים">פאנפיקים</option>
            <option value="מדע בדיוני">מדע בדיוני</option>
            <option value="אחר" default>אחר</option>
        </select>
        <label for="privecy">פרטיות</label>
        <select name="privecy" id="privecy" form="bookCreationForm" required>
            <option value="ציבורי" default>ציבורי</option>
            <option value="חברים בלבד">חברים בלבד</option>
            <option value="פרטי">פרטי</option>
        </select>
        <button type="submit">לשלב הבא</button>
    </form>
    `;
}



