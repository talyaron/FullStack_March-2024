import express from 'express'
const app = express()
const port = 3000;
app.use(express.static('public'));
app.use(express.json());

class Post {
    id: string;
    description: string;
    image: string;
    place: string;
    postDate: Date;
    constructor(description: string, image: string, place?: string, postDate?: Date) {
        this.id = `id-${crypto.randomUUID()}`;
        this.description = description;
        this.image = image;
        this.place = place || '';
        this.postDate = postDate || new Date();
    }
}

const posts: Post[] = [
    // new Post ('I love my cat', 'https://cataas.com/cat'),
]

getApiPic('https://some-random-api.com/animal/cat', 'I love my cat');
getApiPic('https://some-random-api.com/animal/raccoon', 'I love my raccoon');
getApiPic('https://some-random-api.com/animal/dog', 'I love my dog');
getApiPic('https://some-random-api.com/animal/fox', 'I love my fox');
getApiPic('https://some-random-api.com/animal/bird', 'I love my bird');
getApiPic('https://some-random-api.com/animal/panda', 'I love my panda');
getApiPic('https://some-random-api.com/animal/kangaroo', 'I love my kangaroo');
getApiPic('https://some-random-api.com/animal/koala', 'I love my koala');


async function getApiPic(url: string, text: string) {
    const response = await fetch(url)
    const data = await response.json()
    posts.push (new Post(text, data.image));
}

app.get('/getData', (req, res) => {
    try {
        res.status(200).send(posts);
    } catch (error) {
        console.error(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})