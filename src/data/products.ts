export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  origin: string;
  roast: string;
  flavorNotes: string[];
  weight: string;
  image: string;
}

export const categories = [
  "All",
  "Single Origin",
  "Blend",
  "Espresso",
  "Decaf",
];

export const products: Product[] = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    category: "Single Origin",
    price: 18.99,
    description:
      "A bright and complex coffee from the birthplace of coffee. Grown at high elevations in the Yirgacheffe region, this lot delivers an exquisite cup with floral aromatics and a silky body that lingers on the palate.",
    origin: "Ethiopia",
    roast: "Light",
    flavorNotes: ["Blueberry", "Jasmine", "Citrus", "Honey"],
    weight: "250g",
    image: "🫘",
  },
  {
    id: 2,
    name: "Colombian Supremo",
    category: "Single Origin",
    price: 16.49,
    description:
      "A classic Colombian coffee with a rich, full body and bright acidity. Sourced from small farms in the Huila region, this coffee offers a perfectly balanced cup with notes of caramel and nuts.",
    origin: "Colombia",
    roast: "Medium",
    flavorNotes: ["Caramel", "Walnut", "Red Apple", "Cocoa"],
    weight: "250g",
    image: "☕",
  },
  {
    id: 3,
    name: "Midnight Velvet Blend",
    category: "Blend",
    price: 15.99,
    description:
      "Our signature house blend combines beans from Brazil, Guatemala, and Sumatra for a smooth, full-bodied cup with low acidity. Perfect for those who enjoy a rich, chocolatey coffee any time of day.",
    origin: "Multi-origin",
    roast: "Dark",
    flavorNotes: ["Dark Chocolate", "Toasted Almond", "Molasses"],
    weight: "250g",
    image: "🌙",
  },
  {
    id: 4,
    name: "Italian Espresso Roast",
    category: "Espresso",
    price: 17.99,
    description:
      "Crafted for the perfect espresso shot, this blend of Brazilian and Indonesian beans produces a thick, syrupy crema with intense flavors. Ideal for espresso machines and moka pots.",
    origin: "Brazil & Indonesia",
    roast: "Dark",
    flavorNotes: ["Dark Chocolate", "Hazelnut", "Smoky", "Caramel"],
    weight: "250g",
    image: "⚡",
  },
  {
    id: 5,
    name: "Swiss Water Decaf",
    category: "Decaf",
    price: 19.49,
    description:
      "All the flavor, none of the caffeine. This decaf is processed using the Swiss Water method — chemical-free decaffeination that preserves the bean's natural flavors. A smooth, comforting cup any time.",
    origin: "Mexico",
    roast: "Medium",
    flavorNotes: ["Milk Chocolate", "Vanilla", "Brown Sugar"],
    weight: "250g",
    image: "💧",
  },
  {
    id: 6,
    name: "Morning Sunrise Blend",
    category: "Blend",
    price: 14.99,
    description:
      "A bright, energizing blend designed to start your day right. Combining Kenyan and Costa Rican beans, this coffee delivers a clean cup with vibrant fruit notes and a crisp finish.",
    origin: "Kenya & Costa Rica",
    roast: "Light",
    flavorNotes: ["Grapefruit", "Peach", "Honey", "Floral"],
    weight: "250g",
    image: "🌅",
  },
];
