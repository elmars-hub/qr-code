export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  tags: string[];
  isPopular?: boolean;
  isNew?: boolean;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  isSpicy?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  image: string;
  menuType: "food" | "drinks";
}

export const categories: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters",
    icon: "🥗",
    image:
      "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=200&h=200&fit=crop",
    menuType: "food",
  },
  {
    id: "mains",
    name: "Main Course",
    icon: "🍽️",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&h=200&fit=crop",
    menuType: "food",
  },
  {
    id: "pasta",
    name: "Pasta",
    icon: "🍝",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop",
    menuType: "food",
  },
  {
    id: "grill",
    name: "From the Grill",
    icon: "🥩",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?w=200&h=200&fit=crop",
    menuType: "food",
  },
  {
    id: "seafood",
    name: "Seafood",
    icon: "🦐",
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=200&h=200&fit=crop",
    menuType: "food",
  },
  {
    id: "sides",
    name: "Sides",
    icon: "🥦",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=200&fit=crop",
    menuType: "food",
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: "🍰",
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=200&h=200&fit=crop",
    menuType: "food",
  },

  {
    id: "cocktails",
    name: "Cocktails",
    icon: "🍸",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=200&h=200&fit=crop",
    menuType: "drinks",
  },
  {
    id: "wines",
    name: "Wines",
    icon: "🍷",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&h=200&fit=crop",
    menuType: "drinks",
  },
  {
    id: "beers",
    name: "Beers",
    icon: "🍺",
    image:
      "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=200&h=200&fit=crop",
    menuType: "drinks",
  },
  {
    id: "spirits",
    name: "Spirits",
    icon: "🥃",
    image:
      "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=200&h=200&fit=crop",
    menuType: "drinks",
  },
  {
    id: "soft-drinks",
    name: "Soft Drinks",
    icon: "🥤",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=200&h=200&fit=crop",
    menuType: "drinks",
  },
  {
    id: "hot-drinks",
    name: "Hot Drinks",
    icon: "☕",
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=200&h=200&fit=crop",
    menuType: "drinks",
  },
];

export const menuItems: MenuItem[] = [
  // STARTERS
  {
    id: "f1",
    name: "Truffle Burrata",
    description:
      "Creamy burrata with black truffle, heirloom tomatoes, and aged balsamic",
    price: 18,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=300&fit=crop",
    category: "starters",
    tags: ["vegetarian", "popular"],
    isPopular: true,
    isVegetarian: true,
  },
  {
    id: "f2",
    name: "Tuna Tartare",
    description: "Fresh yellowfin tuna with avocado, sesame, and citrus ponzu",
    price: 22,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=300&fit=crop",
    category: "starters",
    tags: ["gluten-free"],
    isGlutenFree: true,
  },
  {
    id: "f3",
    name: "Crispy Calamari",
    description: "Golden fried calamari with lemon aioli and marinara",
    price: 16,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
    category: "starters",
    tags: ["popular"],
    isPopular: true,
  },
  {
    id: "f4",
    name: "Beef Carpaccio",
    description: "Thinly sliced beef with rocket, parmesan, and truffle oil",
    price: 20,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=300&fit=crop",
    category: "starters",
    tags: ["gluten-free"],
    isGlutenFree: true,
  },

  // MAINS
  {
    id: "f5",
    name: "Pan-Seared Duck Breast",
    description:
      "With cherry reduction, sweet potato purée, and seasonal greens",
    price: 34,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&h=300&fit=crop",
    category: "mains",
    tags: ["gluten-free"],
    isGlutenFree: true,
  },
  {
    id: "f6",
    name: "Herb-Crusted Lamb Rack",
    description: "New Zealand lamb with rosemary jus and roasted vegetables",
    price: 42,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    category: "mains",
    tags: ["popular"],
    isPopular: true,
  },
  {
    id: "f7",
    name: "Chicken Supreme",
    description: "Free-range chicken with wild mushroom sauce and truffle mash",
    price: 28,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
    category: "mains",
    tags: [],
  },

  // PASTA
  {
    id: "f8",
    name: "Black Truffle Tagliatelle",
    description: "Handmade pasta with black truffle cream and parmesan",
    price: 26,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
    category: "pasta",
    tags: ["vegetarian", "popular"],
    isPopular: true,
    isVegetarian: true,
  },
  {
    id: "f9",
    name: "Lobster Linguine",
    description: "Fresh lobster in a rich tomato and white wine sauce",
    price: 36,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop",
    category: "pasta",
    tags: ["new"],
    isNew: true,
  },
  {
    id: "f10",
    name: "Cacio e Pepe",
    description: "Classic Roman recipe with pecorino and black pepper",
    price: 20,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
    category: "pasta",
    tags: ["vegetarian"],
    isVegetarian: true,
  },

  // GRILL
  {
    id: "f11",
    name: "Wagyu Ribeye 300g",
    description:
      "A5 Japanese wagyu with bone marrow butter and charred vegetables",
    price: 68,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop",
    category: "grill",
    tags: ["popular"],
    isPopular: true,
  },
  {
    id: "f12",
    name: "Grilled Veal Chop",
    description: "With rosemary, garlic butter, and potato gratin",
    price: 44,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&crop=center",
    category: "grill",
    tags: [],
  },

  // SEAFOOD
  {
    id: "f13",
    name: "Grilled Mediterranean Sea Bass",
    description: "Whole sea bass with lemon, capers, and olive oil",
    price: 38,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop",
    category: "seafood",
    tags: ["gluten-free"],
    isGlutenFree: true,
  },
  {
    id: "f14",
    name: "Seared Scallops",
    description: "With cauliflower purée, pancetta crumble, and brown butter",
    price: 32,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&h=300&fit=crop",
    category: "seafood",
    tags: ["new", "gluten-free"],
    isNew: true,
    isGlutenFree: true,
  },

  // SIDES
  {
    id: "f15",
    name: "Truffle Fries",
    description: "Crispy fries with truffle oil, parmesan, and fresh herbs",
    price: 10,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
    category: "sides",
    tags: ["vegetarian", "popular"],
    isPopular: true,
    isVegetarian: true,
  },
  {
    id: "f16",
    name: "Grilled Asparagus",
    description: "With hollandaise sauce and toasted almonds",
    price: 12,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?w=400&h=300&fit=crop",
    category: "sides",
    tags: ["vegetarian", "vegan", "gluten-free"],
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
  },

  // DESSERTS
  {
    id: "f17",
    name: "Molten Chocolate Fondant",
    description: "Dark chocolate lava cake with vanilla bean ice cream",
    price: 14,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop",
    category: "desserts",
    tags: ["popular"],
    isPopular: true,
  },
  {
    id: "f18",
    name: "Crème Brûlée",
    description: "Classic vanilla custard with caramelized sugar crust",
    price: 12,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=300&fit=crop",
    category: "desserts",
    tags: ["vegetarian", "gluten-free"],
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "f19",
    name: "Tiramisu",
    description: "Espresso-soaked ladyfingers with mascarpone cream",
    price: 13,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    category: "desserts",
    tags: ["vegetarian"],
    isVegetarian: true,
  },

  // COCKTAILS
  {
    id: "d1",
    name: "Gold Rush",
    description: "Bourbon, honey syrup, and fresh lemon juice",
    price: 16,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
    category: "cocktails",
    tags: ["popular"],
    isPopular: true,
  },
  {
    id: "d2",
    name: "Espresso Martini",
    description: "Vodka, fresh espresso, coffee liqueur, and vanilla",
    price: 15,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop&crop=entropy",
    category: "cocktails",
    tags: ["popular"],
    isPopular: true,
  },
  {
    id: "d3",
    name: "Smoky Old Fashioned",
    description: "Smoked bourbon, demerara sugar, and aromatic bitters",
    price: 18,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=300&fit=crop",
    category: "cocktails",
    tags: ["new"],
    isNew: true,
  },
  {
    id: "d4",
    name: "Aperol Spritz",
    description: "Aperol, prosecco, and soda with a slice of orange",
    price: 13,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1560512823-829485b8bf24?w=400&h=300&fit=crop",
    category: "cocktails",
    tags: [],
  },

  // WINES
  {
    id: "d5",
    name: "Château Margaux 2015",
    description: "Bordeaux, France — Full-bodied, elegant red",
    price: 45,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
    category: "wines",
    tags: ["popular"],
    isPopular: true,
  },
  {
    id: "d6",
    name: "Sancerre Blanc 2022",
    description: "Loire Valley, France — Crisp, mineral white",
    price: 14,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?w=400&h=300&fit=crop",
    category: "wines",
    tags: [],
  },
  {
    id: "d7",
    name: "Barolo DOCG 2018",
    description: "Piedmont, Italy — Bold and structured red",
    price: 38,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=300&fit=crop",
    category: "wines",
    tags: [],
  },

  // BEERS
  {
    id: "d8",
    name: "Craft IPA",
    description: "Local brewery hoppy IPA with citrus notes",
    price: 8,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=400&h=300&fit=crop",
    category: "beers",
    tags: ["popular"],
    isPopular: true,
  },
  {
    id: "d9",
    name: "Belgian Wheat",
    description: "Refreshing wheat beer with coriander and orange peel",
    price: 7,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=300&fit=crop",
    category: "beers",
    tags: [],
  },

  // SPIRITS
  {
    id: "d10",
    name: "Macallan 18",
    description: "Single malt Scotch whisky, sherry oak cask",
    price: 28,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&h=300&fit=crop",
    category: "spirits",
    tags: ["popular"],
    isPopular: true,
  },
  {
    id: "d11",
    name: "Don Julio 1942",
    description: "Premium añejo tequila, smooth caramel finish",
    price: 32,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=300&fit=crop",
    category: "spirits",
    tags: [],
  },

  // SOFT DRINKS
  {
    id: "d12",
    name: "Fresh Lemonade",
    description: "House-made with mint, ginger, and sparkling water",
    price: 6,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop",
    category: "soft-drinks",
    tags: ["vegan"],
    isVegan: true,
  },
  {
    id: "d13",
    name: "San Pellegrino",
    description: "Italian sparkling mineral water 750ml",
    price: 5,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop",
    category: "soft-drinks",
    tags: [],
  },

  // HOT DRINKS
  {
    id: "d14",
    name: "Espresso",
    description: "Double shot of single-origin Colombian coffee",
    price: 4,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop",
    category: "hot-drinks",
    tags: ["vegan"],
    isVegan: true,
  },
  {
    id: "d15",
    name: "Matcha Latte",
    description: "Ceremonial grade matcha with oat milk",
    price: 7,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=300&fit=crop",
    category: "hot-drinks",
    tags: ["vegan", "new"],
    isVegan: true,
    isNew: true,
  },
];
