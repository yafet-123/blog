const ExportSummaryArray = [
  {
    id: "1",
    name: "Agricultural Products",
    description: "Fresh and organic agricultural exports including coffee, oilseeds, pulses, and spices sourced directly from Ethiopian farms.",
    group: "Agriculture",
    price: "Contact for pricing",
    image: "/Exports/Agricultural Products (1).jpg",
    otherImage: [
      "/Exports/Agricultural Products (2).jpg",
      "/Exports/Agricultural Products (3).jpg",
      "/Exports/Agricultural Products (4).jpg",
      "/Exports/Agricultural Products (5).jpg"
    ]
  },
  {
    id: "2",
    name: "Handicrafts & Cultural Goods",
    description: "Authentic handmade crafts and cultural items that showcase Ethiopia’s rich heritage, including woven baskets, pottery, and jewelry.",
    group: "Cultural Goods",
    price: "2,000 ETB",
    image: "/Exports/Handicrafts & Cultural Goods 1.jpg",
    otherImage: [
      "/Exports/Handicrafts & Cultural Goods 2.jpg",
      "/Exports/Handicrafts & Cultural Goods 3.jpg",
      "/Exports/Handicrafts & Cultural Goods 4.jpg",
      "/Exports/Handicrafts & Cultural Goods 5.jpg"
    ]
  },
  {
    id: "3",
    name: "Natural Resources",
    description: "Export-ready natural resources such as minerals, gemstones, and eco-products, responsibly sourced and processed.",
    group: "Natural Resources",
    price: "Varies by material",
    image: "/Exports/Natural Resources 1.jpg",
    otherImage: [
      "/Exports/Natural Resources 1.jpg",
      "/Exports/Natural Resources 2.jpg",
      "/Exports/Natural Resources 3.jpg",
      "/Exports/Natural Resources 4.jpg"
    ]
  },
  {
    id: "4",
    name: "Processed Food & Beverages",
    description: "High-quality processed food items, traditional beverages, and packaged goods ready for global export.",
    group: "Food & Beverages",
    price: "3,800 ETB",
    image: "/Exports/Processed Food & Beverages 1.jpg",
    otherImage: [
      "/Exports/Processed Food & Beverages 1.jpg",
      "/Exports/Processed Food & Beverages 2.jpg",
      "/Exports/Processed Food & Beverages 3.jpg",
      "/Exports/Processed Food & Beverages 4.jpg"
    ]
  },
  {
    id: "5",
    name: "Leather & Textile Goods",
    description: "Ethiopia’s finest leather and textile products including bags, garments, and footwear, crafted for global markets.",
    group: "Fashion & Textiles",
    price: "6,500 ETB",
    image: "/Exports/Leather & Textile Goods 1.jpg",
    otherImage: [
      "/Exports/Leather & Textile Goods 1.jpg",
      "/Exports/Leather & Textile Goods 2.jpg",
      "/Exports/Leather & Textile Goods 3.jpg",
      "/Exports/Leather & Textile Goods 4.jpg"
    ]
  }
];





export function getFeaturedExports() {
  return ExportSummaryArray.filter((Exports) => Exports.isFeatured);
}

export function getAllExports() {
  return ExportSummaryArray;
}

export function getExportById(id) {
  return ExportSummaryArray.filter((Exports) => Exports.id === id);
}
