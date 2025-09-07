const ImportSummaryArray = [
  {
    id: "1",
    name: "Consumer Electronics",
    description: "High-quality electronic devices including smartphones, laptops, accessories, and more sourced from leading global manufacturers.",
    group: "Electronics",
    price: "12,000 ETB",
    image: "/import/consumer_electronics1.jpg",
    otherImage: [
      "/import/consumer_electronics2.jpg",
      "/import/consumer_electronics3.jpg",
      "/import/consumer_electronics4.jpg",
      "/import/consumer_electronics5.jpg"
    ]
  },
  {
    id: "2",
    name: "Industrial Machinery",
    description: "Robust and efficient machinery solutions for factories, construction, and production lines sourced from trusted international suppliers.",
    group: "Machinery",
    price: "450,000 ETB",
    image: "/import/Industrial Machinery 1.jpg",
    otherImage: [
      "/import/Industrial Machinery 1.jpg",
      "/import/Industrial Machinery 2.webp",
      "/import/Industrial Machinery 3.jpg",
      "/import/Industrial Machinery.jpg"
    ]
  },
  {
    id: "3",
    name: "Health & Beauty Products",
    description: "Imported wellness and beauty items including skincare, personal care tools, and health supplements from reputable brands.",
    group: "Health & Beauty",
    price: "3,200 ETB",
    image: "/import/Health & Beauty Products 1.jpg",
    otherImage: [
      "/import/Health & Beauty Products 1.jpg",
      "/import/Health & Beauty Products 2.jpg",
      "/import/Health & Beauty Products 3.jpg",
      "/import/Health & Beauty Products 4.jpg"
    ]
  },
  {
    id: "4",
    name: "Household Goods",
    description: "Essential household products ranging from kitchenware to home organization tools, offering comfort and convenience.",
    group: "Home & Living",
    price: "2,800 ETB",
    image: "/import/Household Goods 1.jpg",
    otherImage: [
      "/import/Household Goods 1.jpg",
      "/import/Household Goods 2.jpg",
      "/import/Household Goods 3.jpg",
      "/import/Household Goods 4.jpg"
    ]
  }
];




export function getFeaturedImports() {
  return ImportSummaryArray.filter((imports) => imports.isFeatured);
}

export function getAllImports() {
  return ImportSummaryArray;
}
 
export function getImportById(id) {
  return ImportSummaryArray.filter((imports) => imports.id === id);
}
