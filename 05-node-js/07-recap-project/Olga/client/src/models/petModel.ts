export class Pet {
    id: string;
    name: string;
    type: string;
    breed: string;
    story: string;
    shortStory: string;
    image: string;
    care: string;
    constructor(id: string, name: string, type: string, breed: string, story: string, shortStory: string, image: string, care: string) {
      this.id = id
      this.name = name
      this.type = type
      this.breed = breed
      this.story = story
      this.shortStory = shortStory
      this.image = image
      this.care = care
    }
  }
  

  export const pets: Pet[] = []