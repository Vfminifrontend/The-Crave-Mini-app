const products = [
  {
    id: "ChickenSoup",
    title: {
      en: "Chicken soup",
      ar: "حساء الدجاج"
    },
    price: "56.00",
    currency: "LE",
    image_src: [
      "/assets/images/Chicken_soup.png",
      "/assets/images/Chicken_soup.png",
      "/assets/images/Chicken_soup.png",
      "/assets/images/Chicken_soup.png",
    ],
    score: 3,
    reviews: "500+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['New', 'Hot Deals', 'Top Rated', 'Soup']
  },
  {
    id: "OnionSoup",
    title: {
      en: "Onion soup",
      ar: "حساء البصل"
    },
    price: "102.00",
    currency: "LE",
    image_src: [
      "/assets/images/Onion_soup.png",
      "/assets/images/Onion_soup.png",
      "/assets/images/Onion_soup.png",
      "/assets/images/Onion_soup.png",
    ],
    score: 4,
    reviews: "500+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['Hot Deals', 'Soup']
  },
  {
    id: "TomatoSoup",
    title: {
      en: "Tomato soup",
      ar: "حساء الطماطم"
    },
    price: "67.50",
    currency: "LE",
    image_src: [
      "/assets/images/Tomato_soup.png",
      "/assets/images/Tomato_soup.png",
      "/assets/images/Tomato_soup.png",
      "/assets/images/Tomato_soup.png",
    ],
    score: 2,
    reviews: "1000+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['New', 'Soup']
  },
  { 
    id: "FungiSalad",
    title: {
      en: "Fungi salad",
      ar: "سلطة فطر"
    },
    price: "200.00",
    currency: "LE",
    image_src: [
      "/assets/images/Fungi_Salad.png",
      "/assets/images/Fungi_Salad.png",
      "/assets/images/Fungi_Salad.png",
      "/assets/images/Fungi_Salad.png",
    ],
    score: 5,
    reviews: "10000+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['New', 'Hot Deals','Salad']
  },
    {
    id: "SalmonSalad",
    title: {
      en: "Salmon salad",
      ar: "سلطة السلمون"
    },
    price: "56.00",
    currency: "LE",
    image_src: [
      "/assets/images/Salamon_salad.png",
      "/assets/images/Salamon_salad.png",
      "/assets/images/Salamon_salad.png",
      "/assets/images/Salamon_salad.png",
    ],
    score: 3,
    reviews: "500+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['New', 'Hot Deals', 'Top Rated','Salad']
  },
  {
    id: "ZombieBurger",
    title: {
      en: "Zombie burger",
      ar: "زومبي برجر"
    },
    price: "102.00",
    currency: "LE",
    image_src: [
      "/assets/images/Zombie_burger.png",
      "/assets/images/Zombie_burger.png",
      "/assets/images/Zombie_burger.png",
      "/assets/images/Zombie_burger.png",
    ],
    score: 4,
    reviews: "500+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['Hot Deals','Burger']
  },
  {
    id: "KidsChickenStrips",
    title: {
      en: "Kids chicken strips",
      ar: "شرائح دجاج اطفال"
    },
    price: "67.50",
    currency: "LE",
    image_src: [
      "/assets/images/Kids_chicken_strips.png",
      "/assets/images/Kids_chicken_strips.png",
      "/assets/images/Kids_chicken_strips.png",
      "/assets/images/Kids_chicken_strips.png",
    ],
    score: 2,
    reviews: "1000+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['Strips']
  },
  { 
    id: "PhillyCheese",
    title: {
      en: "Phily cheese bowl sandwich",
      ar: "شطيرة جبن فيلي"
    },
    price: "200.00",
    currency: "LE",
    image_src: [
      "/assets/images/Phily_cheese_Bowl_sandwich.png",
      "/assets/images/Phily_cheese_Bowl_sandwich.png",
      "/assets/images/Phily_cheese_Bowl_sandwich.png",
      "/assets/images/Phily_cheese_Bowl_sandwich.png",
    ],
    score: 5,
    reviews: "10000+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['New', 'Hot Deals','Sandwich']
  },
  { 
    id: "SmokedSalamon",
    title: {
      en: "Smoked salmon sandwich",
      ar: "ساندوتش سلمون مدخن"
    },
    price: "200.00",
    currency: "LE",
    image_src: [
      "/assets/images/Smoked_salmon_sandwich.png",
      "/assets/images/Smoked_salmon_sandwich.png",
      "/assets/images/Smoked_salmon_sandwich.png",
      "/assets/images/Smoked_salmon_sandwich.png",
    ],
    score: 5,
    reviews: "10000+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['New', 'Hot Deals', 'Sandwich']
  },
  { 
    id: "SteakAndMushroom",
    title: {
      en: "Steak and mushroom pasta",
      ar: "باستا ستيك و مشروم"
    },
    price: "200.00",
    currency: "LE",
    image_src: [
      "/assets/images/Steak_and_Mushroom_pasta.png",
      "/assets/images/Steak_and_Mushroom_pasta.png",
      "/assets/images/Steak_and_Mushroom_pasta.png",
      "/assets/images/Steak_and_Mushroom_pasta.png",
    ],
    score: 5,
    reviews: "10000+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['New', 'Hot Deals', 'Pasta']
  }

];
export default products;
