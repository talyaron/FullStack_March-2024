const express = require('express')
const router = express.Router();

class User {
  name: string;
  mail: string;
  password: string;
  isAdmin: boolean;

  constructor(name: string, mail: string, password: string, isAdmin?: boolean) {
      this.name = name
      this.mail = mail
      this.password = password
      this.isAdmin = isAdmin || false
  }
}

class Pet {
  id: string;
  name: string;
  type: string;
  breed: string;
  story: string;
  shortStory: string;
  image: string;
  care: string;
  constructor(name: string, type: string, breed: string, story: string, shortStory: string, image: string, care: string) {
      this.id = `id-${crypto.randomUUID()}`
      this.name = name
      this.type = type
      this.breed = breed
      this.story = story
      this.shortStory = shortStory
      this.image = image
      this.care = care
  }
}

const pets: Pet[] = [
    new Pet (
        'Max',
        'Dog',
        'Mixed Breed',
        'Max was found wandering the streets of a small town, looking malnourished and scared. A concerned passerby noticed him near a busy intersection and called the shelter. It was evident that Max had once been someone’s pet; he was well-behaved and knew basic commands. After a thorough check-up, the vet confirmed that Max was healthy, aside from being underweight. Max’s previous owner was never located, and it is believed he was abandoned. Since then, he has flourished in the shelter environment, growing stronger every day. Max has a loving, friendly personality and gets along well with other dogs. He enjoys going for long walks and is always eager to meet new people. This happy dog is ready for a forever home where he can receive the love and attention he deserves.',
        'Max was found malnourished on the streets, but he’s now a playful, friendly dog.',
        'https://cdn.shopify.com/s/files/1/1897/4203/files/Editorial_17_July_2023_Image_1.jpg?v=1689815060',
        'Max is a medium-energy dog that needs daily exercise. A home with a yard or regular access to a park would be ideal, as he enjoys long walks and playtime. He’s well-suited to families with children or other pets, provided proper introductions are made. Max needs a balanced diet to maintain his healthy weight and requires regular vet check-ups, vaccinations, and flea treatments. His thick coat benefits from weekly brushing. Max loves companionship, so he would thrive in a home where he won’t be left alone for long periods.'
    ),
    new Pet (
        'Bella',
        'Cat',
        'Domestic Shorthair',
        'Bella was found as a kitten, hiding under a car in a busy parking lot. She was frightened and hesitant to approach people, but with some patience and care, she was eventually coaxed out by a kind individual who brought her to the shelter. Bella was in good health but clearly had little experience with humans. Over time, she has become more comfortable around people, although she is still quite independent. Bella enjoys her space and likes to observe her surroundings before engaging. She would thrive in a quiet household, where she can relax and enjoy her favorite pastime—watching birds from the window. Bella is looking for a calm and patient owner who will give her the time and space she needs to feel safe and secure.',
        'Bella is a shy but curious cat who loves watching birds from the window.',
        'https://www.thesprucepets.com/thmb/fQmAnca8T3DT_7OycldvdcqZLUI=/3000x0/filters:no_upscale():strip_icc()/breeds-domestics-and-color-patterns-554862-hero-478231530f2d48d99ba41cededf48c40.jpg',
        'Bella is a low-maintenance cat, perfect for a quiet, calm household. She enjoys having her own space and needs areas where she can observe her environment without too much disruption. Bella is best suited to indoor living, as she tends to be shy and cautious in new environments. Regular play sessions and toys that engage her hunting instincts, such as laser pointers or feather wands, help keep her mentally stimulated. Bella will require a balanced diet and fresh water, as well as regular vet visits for vaccinations and overall health checks.'
    ),
    new Pet (
        'Slinky',
        'Snake',
        'Ball Python',
        'Slinky was abandoned by his previous owner, who left him in a small, dirty enclosure without proper heating or care. A neighbor, concerned about Slinky’s welfare, contacted animal control, and he was brought to the shelter for immediate care. Under the shelter’s supervision, Slinky has regained his health and is now thriving. He’s calm, easygoing, and used to being handled. Slinky is looking for a new home with someone who understands the care and dedication required for a snake. He’s not demanding but does need the right environment to stay healthy.',
        'Slinky is a calm and easygoing snake who’s looking for a knowledgeable new owner.',
        'https://reptilerapture.net/cdn-cgi/image/quality%3D85/assets/images/IMG-1755.jpg',
        'Slinky needs a large, secure enclosure with proper heating and humidity levels to mimic his natural environment. He should have access to hiding spots and branches for climbing. A controlled diet of frozen-thawed mice or rats, fed once a week, is essential to his health. Slinky’s enclosure should be cleaned regularly to prevent infections, and he’ll require a shallow dish of water for drinking and soaking. He’s not a high-maintenance pet but needs consistent care to stay healthy.'
    ),
    new Pet (
        'Rocky',
        'Dog',
        'Labrador Retriever',
        'Rocky was surrendered to the shelter by his previous owners, who could no longer care for him due to a change in their living situation. Despite the emotional toll of losing his family, Rocky has remained resilient and affectionate. He’s a gentle giant who loves nothing more than curling up next to his favorite humans after a day of playing fetch. Rocky has a calm demeanor but enjoys regular walks and some playtime to stay fit. At the shelter, he’s quickly become a favorite due to his friendly nature and loyalty. He has adjusted well, but it`s clear he misses having a family. Rocky is eager to find a new home where he can give and receive love once again.',
        'Rocky, a gentle and loyal dog, was surrendered by his previous owners and is looking for a new home.',
        'https://images.prismic.io/doge/71da0779-7008-4104-9352-ec7233db75e1_puppy-dog-mammal-vertebrate-labrador-retriever-labrador-dog-breed-retriever-labradorka-dog-like-mammal-carnivoran-719129.jpg?auto=compress,format&rect=785,0,2592,2592&w=456&h=456',
        'Rocky is a low-energy dog, making him a great companion for someone who enjoys a laid-back lifestyle. He needs one or two daily walks and occasional playtime to stay healthy. He thrives in environments where he can be around people most of the time, as he loves companionship. Rocky is comfortable around children and other pets, making him an ideal family dog. Regular vet visits, a balanced diet, and grooming sessions to manage his shedding are essential to keeping him happy and healthy.'
    ),
    new Pet (
        'Kiwi',
        'Parrot',
        'Green-cheeked Conure',
        'Kiwi was brought to the shelter after being rescued from a home where his needs were not being met. His previous owners didn’t understand how to care for such an intelligent and social bird, leading to behavioral issues from boredom. Since coming to the shelter, Kiwi has been learning to trust humans again, and he’s already showing improvement. He loves interacting with shelter staff, particularly during playtime with his toys or when he’s learning new tricks. Kiwi has a curious and playful nature, and he’s looking for a home that can provide him with the mental stimulation and social interaction he craves.',
        'Kiwi is a playful parrot who loves learning tricks and interacting with people.',
        'https://www.whidbeynewstimes.com/wp-content/uploads/2023/01/31616586_web1_parrot.jpg',
        'Parrots like Kiwi are highly intelligent and need plenty of mental stimulation to stay happy. He requires daily interaction with humans, as well as toys that challenge his mind. A spacious cage with plenty of room to stretch his wings is essential, but Kiwi should also be let out of his cage regularly for exercise. A diet of fresh fruits, vegetables, and high-quality parrot pellets will keep him healthy. Kiwi will also need regular vet check-ups to monitor his health, as parrots are prone to certain diseases if not properly cared for.'
    )
]

router.get('/get-all-pets', (req: any, res: any) => {
  try {
    res.status(200).send(pets);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
})

module.exports = router