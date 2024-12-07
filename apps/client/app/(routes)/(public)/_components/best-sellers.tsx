import React from 'react';
import ItemCard from './sub-components/best-sellers/item-card';

const items = [
    {
      itemName: 'Rohu (Rui Fish)',
      itemImage: '/home/seller-card/rui.png',
      itemPrice: 150,
      discount: 20,
    },
    {
      itemName: 'Katla Fish',
      itemImage: '/home/seller-card/katla.png',
      itemPrice: 150,
      discount: 20,
    },
    {
      itemName: 'Topshey Fish',
      itemImage: '/home/seller-card/topshey.png',
      itemPrice: 150,
      discount: 20,
    },
    {
      itemName: 'Bata Fish',
      itemImage: '/home/seller-card/bata.png',
      itemPrice: 150,
      discount: 20,
    },
  ];

const BestSellers = () => {


  return (
    <section className="w-full max-w-screen-2xl h-auto px-5 md:px-14 flex items-center flex-col m-auto gap-10 mt-10">
      <div className="w-full md:text-start text-center">
        <h1 className="text-3xl text-customBlack font-medium">Best Sellers</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
        {items.map((item, index) => (
          <ItemCard
            key={index}
            itemName={item.itemName}
            itemImage={item.itemImage}
            itemPrice={item.itemPrice}
            discount={item.discount}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
