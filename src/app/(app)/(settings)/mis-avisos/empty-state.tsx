import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { CalendarIcon, HomeIcon, MegaphoneIcon, TruckIcon } from '@heroicons/react/24/outline';

const items = [
  {
    name: 'Productos',
    description: 'Publica productos en venta. No olvides incluir una descripción detallada. Y en caso de no tener un precio fijo, puedes indicar "Precio a convenir".',
    href: '/crear-aviso/productos',
    iconColor: 'bg-pink-500',
    icon: MegaphoneIcon,
  },{
    name: 'Vehiculos',
    description: 'Publica vehículos en venta o alquiler. No olvides incluir una descripción detallada. Y en caso de no tener un precio fijo, puedes indicar "Precio a convenir".',
    href: '/crear-aviso/vehiculos',
    iconColor: 'bg-orange-500',
    icon: TruckIcon,
  },
  {
    name: 'Inmuebles',
    description: 'Publica propiedades en venta o alquiler. No olvides incluir una descripción detallada. Y en caso de no tener un precio fijo, puedes indicar "Precio a convenir".',
    href: '/crear-aviso/inmuebles',
    iconColor: 'bg-purple-500',
    icon: HomeIcon,
  },
  {
    name: 'Servicios',
    description: 'Publica los servicios que ofreces. No olvides incluir una descripción detallada. Y en caso de no tener un precio fijo, puedes indicar "Precio a convenir".',
    href: '/crear-aviso/servicios',
    iconColor: 'bg-yellow-500',
    icon: CalendarIcon,
  },
];

function classNames(...classes: (string | boolean | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

type MisAvisosEmptyStateProps = {

}

export const MisAvisosEmptyState : React.FC<MisAvisosEmptyStateProps> = ({}) => {
  return (
    <div className="mx-auto max-w-lg">
      <h2 className="text-base font-semibold text-gray-900">Vemos que no tienes publicaciones creadas</h2>
      <p className="mt-1 text-sm text-gray-500">Puedes crear aqui tu primera publicación.</p>
      <ul role="list" className="mt-6 divide-y divide-gray-200 border-b border-t border-gray-200">
        {items.map((item, itemIdx) => (
          <li key={itemIdx}>
            <div className="group relative flex items-start space-x-3 py-4">
              <div className="shrink-0">
                <span
                  className={classNames(item.iconColor, 'inline-flex size-10 items-center justify-center rounded-lg')}
                >
                  <item.icon aria-hidden="true" className="size-6 text-white" />
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-gray-900">
                  <a href={item.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.name}
                  </a>
                </div>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <div className="shrink-0 self-center">
                <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-400 group-hover:text-gray-500" />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex">
        <a href="mailto:hola@publicamas.com.ar" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Necesitas ayuda? Contactanos.
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  );
}