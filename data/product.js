const products = [
  {
    id: "BED",
    title: {
      en: "Samsung",
      ar: "سامسونج"
    },
    colorList: ["red", "yellow", "green"],
    price: "56.00",
    currency: "LE",
    image_src: [
      "/assets/images/mobile1.jpeg",
      "/assets/images/mobile1.jpeg",
      "/assets/images/mobile1.jpeg",
      "/assets/images/mobile1.jpeg",
    ],
    score: 3,
    reviews: "500+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['New', 'Hot Deals', 'Top Rated']
  },
  {
    id: "UPPERBLANKET",
    title: {
      en: "Air-Pods",
      ar: " سماعات لاسيلكيه"
    },
    colorList: ["black", "yellow", "brown", "blue"],
    price: "102.00",
    currency: "$",
    image_src: [
      "/assets/images/4.jpeg",
      "/assets/images/4.jpeg",
      "/assets/images/4.jpeg",
      "/assets/images/4.jpeg",
    ],
    score: 4,
    reviews: "500+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['Electronics ', 'Hot Deals']
  },
  {
    id: "BLANKET",
    title: {
      en: "JBL bluetooth",
      ar: "جي بي ل"
    },
    colorList: ["grey", "yellow"],
    price: "67.50",
    currency: "SR",
    image_src: [
      "/assets/images/jbl.jpeg",
      "/assets/images/jbl.jpeg",
      "/assets/images/jbl.jpeg",
      "/assets/images/jbl.jpeg",
    ],
    score: 2,
    reviews: "1000+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['New', 'Accessories ']
  },
  { 
    id: "CLEANINGBRUSH",
    title: {
      en: "Samsung",
      ar: "سامسونج"
    },
    colorList: ["purple", "green", "red"],
    price: "200.00",
    currency: "SR",
    image_src: [
      "/assets/images/mobile3.jpeg",
      "/assets/images/mobile3.jpeg",
      "/assets/images/mobile3.jpeg",
      "/assets/images/mobile3.jpeg",
    ],
    score: 5,
    reviews: "10000+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['New', 'Hot Deals']
  },
    {
    id: "BED1",
    title: {
      en: "Air-Pods",
      ar: " سماعات لاسيلكيه"
    },
    colorList: ["red", "yellow", "green"],
    price: "56.00",
    currency: "LE",
    image_src: [
      "/assets/images/4.jpeg",
      "/assets/images/4.jpeg",
      "/assets/images/4.jpeg",
      "/assets/images/4.jpeg",
    ],
    score: 3,
    reviews: "500+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['New', 'Hot Deals', 'Top Rated']
  },
  {
    id: "UPPERBLANKET1",
    title: {
      en: "Samsung",
      ar: "سامسونج"
    },
    colorList: ["black", "yellow", "brown", "blue"],
    price: "102.00",
    currency: "$",
    image_src: [
      "/assets/images/mobile1.jpeg",
      "/assets/images/mobile1.jpeg",
      "/assets/images/mobile1.jpeg",
      "/assets/images/mobile1.jpeg",
    ],
    score: 4,
    reviews: "500+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['Electronics', 'Hot Deals']
  },
  {
    id: "BLANKET1",
    title: {
      en: "JBL bluetooth",
      ar: "جي بي ل"
    },
    colorList: ["grey", "yellow"],
    price: "67.50",
    currency: "SR",
    image_src: [
      "/assets/images/jbl.jpeg",
      "/assets/images/jbl.jpeg",
      "/assets/images/jbl.jpeg",
      "/assets/images/jbl.jpeg",
    ],
    score: 2,
    reviews: "1000+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['New', 'Accessories']
  },
  { 
    id: "CLEANINGBRUSH1",
    title: {
      en: "Samsung",
      ar: "سامسونج"
    },
    colorList: ["purple", "green", "red"],
    price: "200.00",
    currency: "SR",
    image_src: [
      "/assets/images/mobile3.jpeg",
      "/assets/images/mobile3.jpeg",
      "/assets/images/mobile3.jpeg",
      "/assets/images/mobile3.jpeg",
    ],
    score: 5,
    reviews: "10000+",
    favourite: false,
    size: "130*50",
    noAddedToBag: 0,
    categories:['New', 'Hot Deals']
  }

];
export default products;
