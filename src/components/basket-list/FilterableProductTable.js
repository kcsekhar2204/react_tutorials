import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from "react";

const FilterableProductTable = ({ products }) => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            <SearchBar 
                filterText={filterText} 
                inStockOnly={inStockOnly} 
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable 
                products={products} 
                filterText={filterText} 
                inStockOnly={inStockOnly}
            />
        </div>
    );
}

export default FilterableProductTable
