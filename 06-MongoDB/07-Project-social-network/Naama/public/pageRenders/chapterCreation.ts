
export async function handelAddChapterToDB(e:any){
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
                window.location.href = '/add-book2';
            } else {
                alert(jsonResponse.error);
            }
            if(!response.ok) throw new Error('Cannot add user');
            console.log(response.body);

    } catch (error) {
        console.error(error);
    }
}
export function renderChapterCreation(){
    return `<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>
    <script>
        tinymce.init({
        selector: 'textarea#content'
        });
    </script>
    <form id="bookCreationForm2">
        <input type="text" name="title" placeholder="כותרת לפרק" required>
        <textarea id="content">Hello, World!</textarea>
        <button type="submit">לשלב הבא</button>
    </form>
    `;
}