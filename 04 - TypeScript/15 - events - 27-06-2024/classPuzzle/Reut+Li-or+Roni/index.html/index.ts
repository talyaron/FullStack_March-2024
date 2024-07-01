let count=0;

function handleClick(event) { 
    document.body.style.backgroundImage = photos[count];
    count++;
    if (count === photos.length) {
        count =0;
    }
}

const photos: string[] = [
    "url('https://thumbs.dreamstime.com/b/beautiful-view-nature-mountains-near-konigssee-lake-bavaria-germany-blue-sky-clouds-97444419.jpg')",
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqvFdpefJi2hOnOjNhVL78frJ-clk2_NqW8Q&s')",
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURbpZgp6ZhbhEwHa8rByWdCd6arBMpJsKVg&s')",
    "url('https://media.wired.com/photos/5a55457ef41e4c2cd9ee6cb5/master/w_2560%2Cc_limit/Doggo-TopArt-104685145.jpg')"
]