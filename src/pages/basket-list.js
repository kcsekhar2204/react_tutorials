import FilterableProductTable from '../components/FilterableProductTable';
import {basket_items} from '../utils/data';

const BasketList = () => {
  return <FilterableProductTable products={basket_items} />;
}

export default BasketList
