import { generatorID } from "../controllers/counterID";

export class Pet {
  id: string;
  name: string;
  type: string;
  breed: string;
  story: string;
  shortStory: string;
  image: string;
  care: string;
  constructor(
    name: string,
    type: string,
    breed: string,
    story: string,
    shortStory: string,
    image: string,
    care: string
  ) {
    this.id = generatorID();
    this.name = name;
    this.type = type;
    this.breed = breed;
    this.story = story;
    this.shortStory = shortStory;
    this.image = image;
    this.care = care;
  }

}

export const pets: Pet[] = [
  new Pet(
    // "1",
    "Max",
    "Dog",
    "Mixed Breed",
    "Max was found wandering the streets of a small town, looking malnourished and scared. A concerned passerby noticed him near a busy intersection and called the shelter. It was evident that Max had once been someone’s pet; he was well-behaved and knew basic commands. After a thorough check-up, the vet confirmed that Max was healthy, aside from being underweight. Max’s previous owner was never located, and it is believed he was abandoned. Since then, he has flourished in the shelter environment, growing stronger every day. Max has a loving, friendly personality and gets along well with other dogs. He enjoys going for long walks and is always eager to meet new people. This happy dog is ready for a forever home where he can receive the love and attention he deserves.",
    "Max was found malnourished on the streets, but he’s now a playful, friendly dog.",
    "https://cdn.shopify.com/s/files/1/1897/4203/files/Editorial_17_July_2023_Image_1.jpg?v=1689815060",
    "Max is a medium-energy dog that needs daily exercise. A home with a yard or regular access to a park would be ideal, as he enjoys long walks and playtime. He’s well-suited to families with children or other pets, provided proper introductions are made. Max needs a balanced diet to maintain his healthy weight and requires regular vet check-ups, vaccinations, and flea treatments. His thick coat benefits from weekly brushing. Max loves companionship, so he would thrive in a home where he won’t be left alone for long periods."
  ),
  new Pet(
    // "2",
    "Bella",
    "Cat",
    "Domestic Shorthair",
    "Bella was found as a kitten, hiding under a car in a busy parking lot. She was frightened and hesitant to approach people, but with some patience and care, she was eventually coaxed out by a kind individual who brought her to the shelter. Bella was in good health but clearly had little experience with humans. Over time, she has become more comfortable around people, although she is still quite independent. Bella enjoys her space and likes to observe her surroundings before engaging. She would thrive in a quiet household, where she can relax and enjoy her favorite pastime—watching birds from the window. Bella is looking for a calm and patient owner who will give her the time and space she needs to feel safe and secure.",
    "Bella is a shy but curious cat who loves watching birds from the window.",
    "https://www.thesprucepets.com/thmb/fQmAnca8T3DT_7OycldvdcqZLUI=/3000x0/filters:no_upscale():strip_icc()/breeds-domestics-and-color-patterns-554862-hero-478231530f2d48d99ba41cededf48c40.jpg",
    "Bella is a low-maintenance cat, perfect for a quiet, calm household. She enjoys having her own space and needs areas where she can observe her environment without too much disruption. Bella is best suited to indoor living, as she tends to be shy and cautious in new environments. Regular play sessions and toys that engage her hunting instincts, such as laser pointers or feather wands, help keep her mentally stimulated. Bella will require a balanced diet and fresh water, as well as regular vet visits for vaccinations and overall health checks."
  ),
  new Pet(
    // "3",
    "Slinky",
    "Snake",
    "Ball Python",
    "Slinky was abandoned by his previous owner, who left him in a small, dirty enclosure without proper heating or care. A neighbor, concerned about Slinky’s welfare, contacted animal control, and he was brought to the shelter for immediate care. Under the shelter’s supervision, Slinky has regained his health and is now thriving. He’s calm, easygoing, and used to being handled. Slinky is looking for a new home with someone who understands the care and dedication required for a snake. He’s not demanding but does need the right environment to stay healthy.",
    "Slinky is a calm and easygoing snake who’s looking for a knowledgeable new owner.",
    "https://reptilerapture.net/cdn-cgi/image/quality%3D85/assets/images/IMG-1755.jpg",
    "Slinky needs a large, secure enclosure with proper heating and humidity levels to mimic his natural environment. He should have access to hiding spots and branches for climbing. A controlled diet of frozen-thawed mice or rats, fed once a week, is essential to his health. Slinky’s enclosure should be cleaned regularly to prevent infections, and he’ll require a shallow dish of water for drinking and soaking. He’s not a high-maintenance pet but needs consistent care to stay healthy."
  ),
  new Pet(
    // "4",
    "Rocky",
    "Dog",
    "Labrador Retriever",
    "Rocky was surrendered to the shelter by his previous owners, who could no longer care for him due to a change in their living situation. Despite the emotional toll of losing his family, Rocky has remained resilient and affectionate. He’s a gentle giant who loves nothing more than curling up next to his favorite humans after a day of playing fetch. Rocky has a calm demeanor but enjoys regular walks and some playtime to stay fit. At the shelter, he’s quickly become a favorite due to his friendly nature and loyalty. He has adjusted well, but it`s clear he misses having a family. Rocky is eager to find a new home where he can give and receive love once again.",
    "Rocky, a gentle and loyal dog, was surrendered by his previous owners and is looking for a new home.",
    "https://images.prismic.io/doge/71da0779-7008-4104-9352-ec7233db75e1_puppy-dog-mammal-vertebrate-labrador-retriever-labrador-dog-breed-retriever-labradorka-dog-like-mammal-carnivoran-719129.jpg?auto=compress,format&rect=785,0,2592,2592&w=456&h=456",
    "Rocky is a low-energy dog, making him a great companion for someone who enjoys a laid-back lifestyle. He needs one or two daily walks and occasional playtime to stay healthy. He thrives in environments where he can be around people most of the time, as he loves companionship. Rocky is comfortable around children and other pets, making him an ideal family dog. Regular vet visits, a balanced diet, and grooming sessions to manage his shedding are essential to keeping him happy and healthy."
  ),
  new Pet(
    // "5",
    "Kiwi",
    "Parrot",
    "Green-cheeked Conure",
    "Kiwi was brought to the shelter after being rescued from a home where his needs were not being met. His previous owners didn’t understand how to care for such an intelligent and social bird, leading to behavioral issues from boredom. Since coming to the shelter, Kiwi has been learning to trust humans again, and he’s already showing improvement. He loves interacting with shelter staff, particularly during playtime with his toys or when he’s learning new tricks. Kiwi has a curious and playful nature, and he’s looking for a home that can provide him with the mental stimulation and social interaction he craves.",
    "Kiwi is a playful parrot who loves learning tricks and interacting with people.",
    "https://www.whidbeynewstimes.com/wp-content/uploads/2023/01/31616586_web1_parrot.jpg",
    "Parrots like Kiwi are highly intelligent and need plenty of mental stimulation to stay happy. He requires daily interaction with humans, as well as toys that challenge his mind. A spacious cage with plenty of room to stretch his wings is essential, but Kiwi should also be let out of his cage regularly for exercise. A diet of fresh fruits, vegetables, and high-quality parrot pellets will keep him healthy. Kiwi will also need regular vet check-ups to monitor his health, as parrots are prone to certain diseases if not properly cared for."
  ),
  new Pet(
    // "6",
    "Luna",
    "Cat",
    "Siamese",
    "Luna was found wandering the streets, clearly lost and confused. She was malnourished and suffering from dehydration, but after being brought to the shelter, she quickly regained her strength. Luna is a friendly and curious cat who loves exploring her surroundings. She enjoys sitting by windows, watching birds, and basking in the sun. Despite her independent nature, Luna also enjoys snuggling with people she trusts. She’s playful and enjoys interactive toys. Luna has adjusted well to the shelter, but she would love to find a permanent home where she can feel safe and secure.",
    "Luna, a curious Siamese cat, was found wandering the streets and is now ready for her forever home.",
    "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/June/06-23/Siamese+Cat+Facts+_+Siamese+cat+lying+on+an+ottoman+-min.jpg",
    "Siamese cats are highly social and intelligent. Luna will need a home that provides plenty of stimulation, including interactive toys and regular playtime. A quiet, stable environment will help her thrive, but she also enjoys human interaction and will need companionship. Regular vet check-ups, a healthy diet, and grooming sessions will keep Luna in top shape. Siamese cats can be prone to dental issues, so dental care is also important."
),
new Pet(
    // "7",
    "Buddy",
    "Dog",
    "Golden Retriever",
    "Buddy was brought to the shelter after his owner passed away. This friendly Golden Retriever has been grieving but is slowly adjusting to life in the shelter. He’s a lovable and energetic dog who adores human company. Buddy enjoys long walks, playing fetch, and getting plenty of belly rubs. He’s great with kids and other pets, making him the perfect family dog. Despite his age, Buddy is still full of energy and always ready for an adventure. He’s looking for a loving family who can give him the care and attention he deserves.",
    "Buddy, a lovable Golden Retriever, is looking for a new family after his owner passed away.",
    "https://13630656.rocketcdn.me/wp-content/uploads/2020/01/Golden4.jpg.webp",
    "Golden Retrievers like Buddy are active and social dogs. He will need regular exercise, such as daily walks and playtime, to stay healthy and happy. A large yard would be ideal for him to run around and explore. Buddy thrives on human interaction and does well with children and other pets. Regular grooming to manage his shedding and a healthy diet will ensure he stays in great condition. It's also important to keep him mentally stimulated with toys and activities."
),
new Pet(
    // "8",
    "Zara",
    "Parrot",
    "African Grey Parrot",
    "Zara was rescued from a home where she was kept in a small cage with minimal interaction. Despite her past, she has a calm and intelligent demeanor. Zara loves to learn new words and tricks, and she thrives in an environment where she can interact with people. She enjoys perching on shoulders and observing her surroundings. African Grey Parrots are known for their intelligence, and Zara is no exception. She’s looking for a home that can provide her with the stimulation she needs to stay happy and healthy.",
    "Zara, a calm and intelligent African Grey Parrot, is seeking a home where she can interact with people and thrive.",
    "https://www.stodels.com/wp-content/uploads/2009/03/8453530769_9bab22d205_b-1.jpg",
    "African Grey Parrots are highly intelligent and require mental stimulation to avoid boredom. Zara needs a spacious cage with plenty of toys to challenge her mind. Regular out-of-cage time is important for exercise, and she thrives with human interaction. A varied diet of fruits, vegetables, and high-quality parrot pellets is essential to keep her healthy. African Greys also need regular vet check-ups to monitor their health, especially since they are prone to certain illnesses if not properly cared for."
),
new Pet(
    // "9",
    "Simba",
    "Cat",
    "Maine Coon",
    "Simba was surrendered to the shelter after his previous owners could no longer care for him. Despite his large size, Simba is a gentle and affectionate cat who loves to be around people. He enjoys lounging in cozy spots and being petted. Maine Coons are known for their friendly personalities, and Simba is no exception. He’s great with children and other pets and would make a wonderful addition to any family. He’s looking for a home where he can relax and enjoy the company of his new family.",
    "Simba, a large and gentle Maine Coon, is looking for a home where he can relax and be loved.",
    "https://i0.wp.com/thediscerningcat.com/wp-content/uploads/2021/02/ginger-maine-coon-cat.jpg?resize=1200%2C800&ssl=1",
    "Maine Coons like Simba are known for their large size and friendly nature. They enjoy being around people and are typically good with other pets and children. Regular grooming is necessary to maintain their long, thick coats, and they need a balanced diet to support their size. Simba will need a comfortable home with plenty of cozy spots to lounge in. Regular vet check-ups, especially for joint health, are important as Maine Coons can be prone to hip dysplasia."
),
new Pet(
    // "10",
    "Oscar",
    "Dog",
    "Beagle",
    "Oscar was rescued from a neglectful situation where he wasn’t getting enough food or exercise. Despite his rough start, Oscar is a spirited Beagle who loves to sniff around and explore. He’s a bit shy at first but warms up quickly to people, especially when treats are involved. Oscar enjoys walks and needs plenty of exercise to burn off his energy. He’s looking for a home with an active family who can keep up with his energetic nature and give him the love and attention he’s missed out on.",
    "Oscar, a spirited Beagle, is looking for an active family to give him the love he deserves.",
    "https://www.dogster.com/wp-content/uploads/2019/11/Beagle-dog-standing-on-a-field_Artyom-Gantsev_Shutterstock-600x439.jpg",
    "Beagles like Oscar are energetic and love to explore. He will need daily walks and playtime to stay healthy and happy. Beagles are known for their strong sense of smell, so interactive toys that challenge his nose will keep him entertained. A secure yard is essential as Beagles are prone to wandering off if they catch an interesting scent. Regular vet check-ups, a healthy diet, and grooming will help maintain his overall well-being."
),
new Pet(
    // "11",
    "Cleo",
    "Cat",
    "Bengal",
    "Cleo was surrendered to the shelter after her previous owners realized they couldn’t handle her high energy levels. Bengal cats are known for their active and playful nature, and Cleo is no exception. She loves climbing, chasing toys, and exploring her environment. Cleo is affectionate but also independent, enjoying her alone time as much as she enjoys being with people. She’s looking for a home where she can have plenty of space to run and play, as well as people who can keep up with her energetic personality.",
    "Cleo, an active Bengal cat, is seeking a home where she can run, play, and explore.",
    "https://media-be.chewy.com/wp-content/uploads/2015/08/22145406/bengal.jpg",
    "Bengal cats are highly energetic and need a lot of space to run and play. Cleo will need plenty of toys and climbing structures to keep her entertained. Regular playtime is essential to help her burn off energy and stay happy. A high-protein diet and regular vet visits are necessary to maintain her health. Bengals are also known for their intelligence, so Cleo will enjoy learning new tricks or solving puzzle toys."
),
new Pet(
    // "12",
    "Milo",
    "Dog",
    "Cocker Spaniel",
    "Milo was brought to the shelter after being found abandoned in a park. He’s a sweet and gentle Cocker Spaniel who loves being around people. Milo enjoys leisurely walks and cuddling on the couch. He’s good with children and other dogs, making him a great family pet. At the shelter, Milo has quickly become a favorite due to his calm and friendly nature. He’s looking for a loving home where he can relax and be part of the family.",
    "Milo, a sweet Cocker Spaniel, is looking for a loving home where he can relax and be part of the family.",
    "https://stayloyal.com.au/cdn/shop/articles/Depositphotos_2163597_S.jpg?v=1691575105",
    "Cocker Spaniels like Milo are gentle and loving dogs. They need moderate exercise, such as daily walks, and enjoy spending time with their families. Regular grooming is essential to keep their long coats in good condition, and they need regular ear cleanings to prevent infections. A balanced diet and routine vet check-ups will help Milo stay healthy. He’s a great dog for families or individuals looking for a calm and affectionate companion."
),
new Pet(
    // "13",
    "Nemo",
    "Parrot",
    "Cockatiel",
    "Nemo was brought to the shelter after his owner could no longer care for him. This friendly Cockatiel loves to whistle and mimic sounds. He enjoys interacting with people and other birds, often showing off his playful personality. Nemo is looking for a home where he can get plenty of attention and mental stimulation. He thrives in environments where he can be part of the family, and he’s eager to bond with his new owners.",
    "Nemo, a playful Cockatiel, is looking for a home where he can bond with his new family.",
    "https://petopedia.petscorner.co.uk/wp-content/uploads/cockatiel.jpg",
    "Cockatiels like Nemo are social birds that need daily interaction with people. He will thrive with plenty of toys and challenges to keep his mind active. Nemo needs a spacious cage but should be allowed out of his cage regularly for exercise. A balanced diet of seeds, pellets, and fresh vegetables is essential to his health. Regular vet visits will help monitor his well-being, as Cockatiels are prone to certain respiratory issues."
),
new Pet(
    // "14",
    "Daisy",
    "Dog",
    "Shih Tzu",
    "Daisy was surrendered to the shelter when her elderly owner could no longer care for her. This sweet and gentle Shih Tzu loves being pampered and cuddled. She’s a low-energy dog who enjoys lounging around the house and getting attention from people. Daisy is good with children and would make a perfect companion for someone looking for a calm, affectionate pet. She’s looking for a quiet home where she can relax and enjoy her golden years.",
    "Daisy, a sweet Shih Tzu, is looking for a quiet home where she can enjoy her golden years.",
    "https://www.petspyjamas.com/uploads/2017/08/P6122442-690x518.jpg",
    "Shih Tzus like Daisy are low-energy dogs that don’t require much exercise beyond short walks. Regular grooming is essential to keep their coats in good condition, and their eyes and ears should be checked regularly for any signs of infection. A balanced diet and routine vet check-ups will help Daisy stay healthy. She’s a great companion for someone looking for a relaxed and loving dog."
),
new Pet(
    // "15",
    "Oliver",
    "Cat",
    "British Shorthair",
    "Oliver was surrendered to the shelter after his previous owners moved to a no-pet apartment. This calm and dignified British Shorthair loves to lounge in sunny spots and watch the world go by. He’s independent but enjoys human company when he’s in the mood. Oliver is looking for a quiet home where he can feel safe and comfortable. He’s great with other pets and would make a wonderful companion for someone who appreciates a relaxed and easy-going cat.",
    "Oliver, a calm British Shorthair, is looking for a quiet home where he can relax and feel comfortable.",
    "https://catinaflat.blog/wp-content/uploads/2022/03/british-shorthair-1.jpg",
    "British Shorthairs like Oliver are known for their calm and independent nature. They don’t require much attention but enjoy human company when they’re in the mood. Regular grooming is needed to keep their short coats healthy, and a balanced diet will help maintain their weight. British Shorthairs are prone to obesity, so portion control is important. Regular vet visits and dental care will help Oliver stay healthy and happy."
),

];
