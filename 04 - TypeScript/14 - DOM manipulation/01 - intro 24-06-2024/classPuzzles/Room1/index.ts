interface Pet {
  picture: string;
  name: string;
  breed: string;
  color: string;
  size: string;
  getcard: (arr: Pet[]) => string | undefined;
}

const lychee1: Pet = {
  name: "lychee",
  picture:
    "https://cdn-ghckb.nitrocdn.com/ywsRCaHzPZOrRGmIQthcAKzblzYFHUKW/assets/images/optimized/rev-d3835d7/blog.myollie.com/wp-content/uploads/2021/05/cute-Shih-Tzu-with-mud-on-his-fur-sticks-tongue-out-.jpg",
  breed: "shihtzu",
  color: "white",
  size: "small",
  getcard: buildCards
};
const lychee2: Pet = {
  name: "lychee",
  picture:
    "https://cdn-ghckb.nitrocdn.com/ywsRCaHzPZOrRGmIQthcAKzblzYFHUKW/assets/images/optimized/rev-d3835d7/blog.myollie.com/wp-content/uploads/2021/05/cute-Shih-Tzu-with-mud-on-his-fur-sticks-tongue-out-.jpg",
  breed: "shihtzu",
  color: "white",
  size: "small",
  getcard: buildCards

};

const lychee3: Pet = {
  name: "lychee",
  picture:
    "https://cdn-ghckb.nitrocdn.com/ywsRCaHzPZOrRGmIQthcAKzblzYFHUKW/assets/images/optimized/rev-d3835d7/blog.myollie.com/wp-content/uploads/2021/05/cute-Shih-Tzu-with-mud-on-his-fur-sticks-tongue-out-.jpg",
  breed: "shihtzu",
  color: "white",
  size: "small",
  getcard: buildCards

};

function buildCards(pets: Pet): string | undefined {
  try {
    return `<div class="pet">
        <div class="pet__picture" style="background-image:url(${pets.picture})">
        </div>
        <div class="pet__info">
        <h2>${pets.name}</h2>
        <p> breed: ${pets.breed} </p>
        <p> color: ${pets.color} </p>
        <p> size: ${pets.size} </p>
        </div>
        </div>`;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}



