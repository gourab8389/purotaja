import React from 'react';
import ItemCard from './sub-components/best-sellers/item-card';

const BestSellers = () => {
  // Array of items
  const items = [
    {
      itemName: 'Rohu (Rui Fish)',
      itemImage: '/home/seller-card/rui.png',
      itemPrice: 120,
      discount: 25,
      originalPrice: 150,
    },
    {
      itemName: 'Katla Fish',
      itemImage: '/home/seller-card/katla.png',
      itemPrice: 120,
      discount: 25,
      originalPrice: 150,
    },
    {
      itemName: 'Topshey Fish',
      itemImage: '/home/seller-card/topshey.png',
      itemPrice: 120,
      discount: 25,
      originalPrice: 150,
    },
    {
      itemName: 'Bata Fish',
      itemImage: '/home/seller-card/bata.png',
      itemPrice: 120,
      discount: 25,
      originalPrice: 150,
    },
    {
      itemName: 'Bhetki Fish',
      itemImage: '/home/seller-card/bhetki.png',
      itemPrice: 120,
      discount: 25,
      originalPrice: 150,
    },
    {
      itemName: 'Mud Crab',
      itemImage: '/home/seller-card/mud-crab.png',
      itemPrice: 120,
      discount: 25,
      originalPrice: 150,
    },
    {
      itemName: 'Pabda Fish',
      itemImage: '/home/seller-card/pabda.png',
      itemPrice: 120,
      discount: 25,
      originalPrice: 150,
    },
    {
      itemName: 'Pomfret Fish',
      itemImage: '/home/seller-card/pomphet.png',
      itemPrice: 120,
      discount: 25,
      originalPrice: 150,
    },
  ];

  return (
    <section className="w-full max-w-screen-2xl min-h-screen px-5 md:px-14 flex items-center flex-col m-auto gap-6 mt-10">
      <div className="w-full md:text-start text-center">
        <h1 className="text-3xl text-customBlack font-medium">Best Sellers</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {items.map((item, index) => (
          <ItemCard
            key={index}
            itemName={item.itemName}
            itemImage={item.itemImage}
            itemPrice={item.itemPrice}
            discount={item.discount}
            originalPrice={item.originalPrice}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
