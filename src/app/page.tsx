import React from 'react';
import { ListProductElement } from '@/components/Product/ListProductElement/ListProductElement';

const products = [
  {
    id:"1234",
    uri:"agua-de-mar-1010101",
    name: "Agua de mar",
    frontImage: "https://www.publicamas.com.ar/img/productos/grandes/ARG-2840-1.jpg?v=1026",
    price:"67.900",
    currency:"ARS",
    location:"Buenos Aires, General San Martin",
  },{
    id:"1235",
    uri:"nos-ayudas-a-seguir-creciendo-1010101",
    name: "Nos ayudas a seguir creciendo?",
    frontImage: "https://publicamas.com.ar/img/productos/chicas/ARG-2853-1.png?v=4753",
    price:"67.900",
    currency:"ARS",
    location:"Buenos Aires, General San Martin",
  },{
    id:"1234",
    uri:"agua-de-mar-1010101",
    name: "Agua de mar",
    frontImage: "https://www.publicamas.com.ar/img/productos/grandes/ARG-2840-1.jpg?v=1026",
    price:"67.900",
    currency:"ARS",
    location:"Buenos Aires, General San Martin",
  },{
    id:"1234",
    uri:"agua-de-mar-1010101",
    name: "Agua de mar",
    frontImage: "https://www.publicamas.com.ar/img/productos/grandes/ARG-2840-1.jpg?v=1026",
    price:"67.900",
    currency:"ARS",
    location:"Buenos Aires, General San Martin",
  },
];

export default async function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ListProductElement key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
}
