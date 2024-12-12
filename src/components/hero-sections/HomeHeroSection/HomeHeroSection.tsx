import React from 'react';
import Image from 'next/image';

type HomeHeroSectionProps= {

};

export const HomeHeroSection:React.FC<HomeHeroSectionProps> = ({}) => {
  return (
    <section aria-labelledby="cause-heading">
      <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            alt=""
            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
            className="size-full object-cover object-center"
            layout="responsive"  // Esta propiedad ayuda a la optimización
            width={700}         // Especifica el ancho de la imagen
            height={475}        // Especifica la altura de la imagen
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900/50" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 id="cause-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Vende más, comprá mejor
          </h2>
          <div className="mt-8 flex w-full flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="flex-grow rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Quiero comprar
            </a>
            <a
              href="#"
              className="flex-grow rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Quiero vender
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}