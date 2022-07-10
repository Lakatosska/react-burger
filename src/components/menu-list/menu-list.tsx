import { FC } from 'react';
import { useSelector } from '../../services/types';
import { TType } from '../../services/types/data';
import { Card } from '../card/card';

import MenuListStyles from './menu-list.module.css';

interface IMenuListProps {
  type: TType;
}

export const MenuList: FC<IMenuListProps> = ({ type }) => {

  const { ingredients } = useSelector(store => store.ingredients);
  const typeData = ingredients.filter(item => item.type === type);

  return(
    <div className={`${MenuListStyles.main}`}>
      {typeData.map(item => (
        <Card key={item._id} cardData={item} />
      ))}
    </div>
  );
}