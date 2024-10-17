import { getMenuTitle } from '../../../../helpers/getMenuTitle';
import { menuItemsText } from '../../../molecules/header/schemas';

export const MenuItem = () => {
  return (
      <>
        {getMenuTitle(menuItemsText)}
      </>
  );
};
