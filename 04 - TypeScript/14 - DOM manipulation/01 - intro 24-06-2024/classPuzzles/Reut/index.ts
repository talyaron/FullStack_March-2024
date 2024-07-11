interface Album {
    title: string;
    artist: string;
    year: number;
    numberOfTracks: number;
    coverImg: string;
}

const abbeyRoad: Album = {
    title: "Abbey Road",
    artist: "The Beatles",
    year: 1969,
    numberOfTracks: 17,
    coverImg: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-005-Beatles-ABBEY-ROAD.jpg?w=1000"
}

const songsInTheKeyOfLife: Album = {
    title: "Songs in the Key of Life",
    artist: "Stevie Wonder",
    year: 1976,
    numberOfTracks: 10,
    coverImg: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-004-Stevie-Wonder-SONGS-IN-THE-KEY-OF-LIFE.jpg?w=1000"
}

const blue: Album = {
    title: "Blue",
    artist: "Joni Mitchell",
    year: 1971,
    numberOfTracks: 12,
    coverImg: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-003-JoniMitchell-BLUE-HR.jpg?w=1000"
}

const petSounds: Album = {
    title: "Pet Sounds",
    artist: "The Beach Boys",
    year: 1966,
    numberOfTracks: 14,
    coverImg: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-002-Beach-Boys-PET-SOUNDS-update.jpg?w=1000"
}

const whatsGoingOn: Album = {
    title: "What's Going On",
    artist: "Marvin Gaye",
    year: 1971,
    numberOfTracks: 17,
    coverImg: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-001-Marvin-Gaye-WHATS-GOING-ON.jpg?w=1000"
}

const albums = [
    abbeyRoad,
    songsInTheKeyOfLife,
    blue,
    petSounds,
    whatsGoingOn
];

const albumsDiv = document.querySelector('#album') as HTMLDivElement;

function writeAlbumsToDOM (albums: Album[], element:HTMLDivElement) {
    try {
        if (!element) throw new Error("Element not found");
        if (!albums) throw new Error("No albums found");

        let html:string =``;
        albums.forEach(album => {
            const htmlAlbum = albumCard(album);
           if(htmlAlbum) html += htmlAlbum;
        });

        element.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

writeAlbumsToDOM(albums, albumsDiv);

function albumCard(album: Album): string | undefined {
    try {
        return `<div class="album">
        <div class="album__cover" style="background-image:url(${album.coverImg})">
        </div>
        <div class="album__info">
        <h2>${album.title}</h2>
        <p>by ${album.artist} (${album.year}) </p>
        <p> number of tracks: ${album.numberOfTracks} </p>
        </div>
        </div>`;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}


