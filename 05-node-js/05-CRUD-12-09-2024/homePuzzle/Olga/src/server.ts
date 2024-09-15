import express from "express";
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.json());

class Post {
  id: string;
  description: string;
  image: string;
  place: string;
  postDate: Date;
  constructor(
    description: string,
    image: string,
    place?: string,
    postDate?: Date
  ) {
    this.id = `id-${crypto.randomUUID()}`;
    this.description = description;
    this.image = image;
    this.place = place || "";
    this.postDate = postDate || new Date();
  }
}

const posts: Post[] = [];

getApiPic("https://some-random-api.com/animal/cat", "I love my cat");
getApiPic("https://some-random-api.com/animal/raccoon", "I like raccoons");
getApiPic("https://some-random-api.com/animal/dog", "I love my dog");
getApiPic("https://some-random-api.com/animal/fox", "I like foxs");
getApiPic("https://some-random-api.com/animal/bird", "I like birds");
getApiPic("https://some-random-api.com/animal/panda", "I like pandas");
getApiPic("https://some-random-api.com/animal/kangaroo", "I like kangaroos");
getApiPic("https://some-random-api.com/animal/koala", "I like koalas");


async function getApiPic(url: string, text: string) {
  const response = await fetch(url);
  const data = await response.json();
  posts.push(new Post(text, data.image));
}

app.get("/getData", (req, res) => {
  try {
    res.status(200).send(posts);
  } catch (error) {
    console.error(error);
  }
});

app.post("/addPost", (req, res) => {
  try {
    const newPost = new Post(
      req.body.description,
      req.body.image,
      req.body.place
    );
    posts.unshift(newPost);
    res.status(200).send(newPost);
  } catch (error) {
    console.error(error);
  }
});

app.patch("/updatePost", (req, res) => {
  try {
    const newPost = new Post(
      req.body.description,
      req.body.image,
      req.body.place
    );
    posts.unshift(newPost);
    res.status(200).send(newPost);
  } catch (error) {
    console.error(error);
  }
});

app.delete("/deletePost", (req, res) => {
  try {
    const index = posts.findIndex((post) => post.id === req.body.id);
    if (index > -1) {
      posts.splice(index, 1);
      res.status(200).send({ message: "Post deleted" });
    } else {
      res.status(404).send({ error: "Post not found" });
    }
  } catch (error) {
    console.error(error);
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
