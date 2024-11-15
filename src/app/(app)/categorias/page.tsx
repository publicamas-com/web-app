import React from 'react';
import { AppHeading } from '@/components/heading/AppHeading/AppHeading';
import { CategoryListElement } from '@/components';

const cateogries = [
  { 'id': '1', 'slug': 'autos-y-camionetas', 'name': 'Autos y Camionetas', 'href': '/autos-y-camionetas' },
  { 'id': '2', 'slug': 'motos', 'name': 'Motos', 'href': '/motos' },
  { 'id': '3', 'slug': 'camiones', 'name': 'Camiones', 'href': '/camiones' },
  { 'id': '4', 'slug': 'accesorios', 'name': 'Accesorios', 'href': '/accesorios' },
  { 'id': '5', 'slug': 'inmuebles', 'name': 'Inmuebles', 'href': '/inmuebles' },
  { 'id': '6', 'slug': 'servicios', 'name': 'Servicios', 'href': '/servicios' },
  { 'id': '7', 'slug': 'animales-y-mascotas', 'name': 'Animales y Mascotas', 'href': '/animales-y-mascotas' },
  { 'id': '8', 'slug': 'antiguedades', 'name': 'Antigüedades', 'href': '/antiguedades' },
  { 'id': '9', 'slug': 'alimentos-y-bebidas', 'name': 'Alimentos y Bebidas', 'href': '/alimentos-y-bebidas' },
  { 'id': '10', 'slug': 'bebes', 'name': 'Bebés', 'href': '/bebes' },
  { 'id': '11', 'slug': 'fotografia-y-video', 'name': 'Fotografía y Video', 'href': '/fotografia-y-video' },
  { 'id': '12', 'slug': 'celulares-y-telefonos', 'name': 'Celulares y Teléfonos', 'href': '/celulares-y-telefonos' },
  {
    'id': '13',
    'slug': 'coleccionables-y-hobbies',
    'name': 'Coleccionables y Hobbies',
    'href': '/coleccionables-y-hobbies',
  },
  { 'id': '14', 'slug': 'computacion', 'name': 'Computación', 'href': '/computacion' },
  { 'id': '15', 'slug': 'consolas-y-videojuegos', 'name': 'Consolas y Videojuegos', 'href': '/consolas-y-videojuegos' },
  { 'id': '16', 'slug': 'cotillon', 'name': 'Cotillón', 'href': '/cotillon' },
  { 'id': '17', 'slug': 'deportes-y-fitness', 'name': 'Deportes y Fitness', 'href': '/deportes-y-fitness' },
  {
    'id': '18',
    'slug': 'electrodomesticos-y-aires-ac',
    'name': 'Electrodomésticos y Aires Ac',
    'href': '/electrodomesticos-y-aires-ac',
  },
  {
    'id': '19',
    'slug': 'electronica-audio-y-video',
    'name': 'Electrónica, Audio y Video',
    'href': '/electronica-audio-y-video',
  },
  { 'id': '20', 'slug': 'empleo', 'name': 'Empleo', 'href': '/empleo' },
  {
    'id': '21',
    'slug': 'hogar-muebles-y-jardin',
    'name': 'Hogar, Muebles y Jardín',
    'href': '/hogar-muebles-y-jardin',
  },
  { 'id': '22', 'slug': 'industrias-y-oficinas', 'name': 'Industrias y Oficinas', 'href': '/industrias-y-oficinas' },
  { 'id': '23', 'slug': 'instrumentos-musicales', 'name': 'Instrumentos Musicales', 'href': '/instrumentos-musicales' },
  { 'id': '24', 'slug': 'joyas-y-relojes', 'name': 'Joyas y Relojes', 'href': '/joyas-y-relojes' },
  { 'id': '25', 'slug': 'juegos-y-juguetes', 'name': 'Juegos y Juguetes', 'href': '/juegos-y-juguetes' },
  {
    'id': '26',
    'slug': 'libros-revistas-y-comics',
    'name': 'Libros, Revistas y Comics',
    'href': '/libros-revistas-y-comics',
  },
  {
    'id': '27',
    'slug': 'musica-peliculas-y-series',
    'name': 'Música, Películas y Series',
    'href': '/musica-peliculas-y-series',
  },
  { 'id': '28', 'slug': 'ropa-y-accesorios', 'name': 'Ropa y Accesorios', 'href': '/ropa-y-accesorios' },
  {
    'id': '29',
    'slug': 'salud-y-equipamiento-medico',
    'name': 'Salud y Equipamiento Médico',
    'href': '/salud-y-equipamiento-medico',
  },
  { 'id': '30', 'slug': 'arte-y-artesanias', 'name': 'Arte y Artesanías', 'href': '/arte-y-artesanias' },
  { 'id': '31', 'slug': 'telas', 'name': 'Telas', 'href': '/telas' },
  { 'id': '32', 'slug': 'otras-categorias', 'name': 'Otras Categorías', 'href': '/otras-categorias' },
];

const CategoriesPage = () => {
  return (
    <div>
      <AppHeading title="Categorias" path={["Categorias"]} />
      <ul role="list" className="divide-y divide-gray-100">
        {cateogries.map((category) => (
          <li key={category.id} className="relative flex justify-between py-5">
            <CategoryListElement category={category} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;