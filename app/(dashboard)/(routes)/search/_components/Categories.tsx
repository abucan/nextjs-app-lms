'use client';

import { Category } from '@prisma/client';

import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
} from 'react-icons/fc';
import { IconType } from 'react-icons';
import { CategoryItem } from './CategoryItem';

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category['name'], IconType> = {
  Music: FcMusic,
  Filming: FcFilmReel,
  Fitness: FcSportsMode,
  Engineering: FcEngineering,
  Accounting: FcSalesPerformance,
  Photography: FcOldTimeCamera,
  Technology: FcMultipleDevices,
};

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className='flex items-center gap-x-2 pb-2 overflow-x-auto'>
      {items.map((item) => {
        return (
          <CategoryItem
            key={item.id}
            label={item.name}
            value={item.id}
          />
        );
      })}
    </div>
  );
};
