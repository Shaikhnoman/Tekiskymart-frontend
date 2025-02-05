import React from "react";

const categories = [
  {
    name: "GIFT-ITEMS",
    image:
      "https://images.stockcake.com/public/0/f/d/0fdc70d9-9a96-48c4-bb36-e713341114fc_medium/holiday-gift-collection-stockcake.jpg",
  },
  {
    name: "DATES",
    image:
      "https://statics.basalam.com/public-39/users/X6K88e/10-25/gzn0vsnruqoEGrccoj2ttNaqQUfkBRctg8QYQg8AFP6Sg61cAG.jpg_256X256X70.jpg",
  },
  {
    name: "PERFUMES",
    image:
      "https://images.stockcake.com/public/e/b/3/eb3d9618-4d24-4f60-bf9c-17168329eb84_medium/elegant-perfume-bottle-stockcake.jpg",
  },
  {
    name: "OTHERS",
    image:
      "	https://images.stockcake.com/public/3/0/9/309509ed-24ac-4563-b42b-cbb9a6d6c483_medium/neon-cybercity-laptop-stockcake.jpg",
  },
  {
    name: "CLOTHES",
    image:
      "https://images.stockcake.com/public/1/f/a/1fa2e6e3-7109-44b6-b105-4db05b7a3650_medium/colorful-clothes-rack-stockcake.jpg",
  },
  {
    name: "HOMEMADE SNACKS",
    image:
      "https://images.stockcake.com/public/9/8/9/9897737d-965a-40f3-a03a-587b2fd7d7a1_medium/indian-appetizer-spread-stockcake.jpg",
  },
  {
    name: "CROCKERY",
    image:
      "https://images.stockcake.com/public/d/4/f/d4f956b8-1bf3-4290-8f75-99eebfacbc83_medium/artistic-wooden-utensils-stockcake.jpg",
  },
  {
    name: "WATCHES",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5Jub8SwbgD8Locqx9fSvt0BzZA-NxQhDqw&s",
  },
  {
    name: "MOBILES",
    image:
      "https://images.stockcake.com/public/f/a/2/fa2682d0-09c1-4a79-8277-b7945031e40b_medium/smartphones-on-display-stockcake.jpg",
  },
  {
    name: "DRY FRUITS",
    image:
      "https://images.stockcake.com/public/7/d/c/7dc436d1-1227-43b2-b11c-55aa4d7a7619_medium/assorted-nuts-mix-stockcake.jpg",
  },
  {
    name: "ELECTRONICS",
    image:
      "https://images.stockcake.com/public/9/5/7/9570eacc-86d6-4162-ae49-a3be81147ef5_medium/advanced-circuitry-core-stockcake.jpg",
  },
  {
    name: "FOOD AND DRINKS",
    image:
      "https://images.stockcake.com/public/0/1/a/01a54868-fec8-49d9-8f4e-ae2012ec6ba0_medium/ultimate-gourmet-burger-stockcake.jpg",
  },
];

const Categories = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Categories Header */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Categories
        </h2>
        {/* Categories Grid */}
          {" "}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 justify-center">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Circular Image */}
                <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Category Name */}
                <p className="mt-2 text-xs font-semibold text-gray-700 uppercase">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Categories;
