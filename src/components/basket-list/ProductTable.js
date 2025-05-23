import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, filterText, inStockOnly }) => {
    const rows = [];
    const categories = {};
    var len_categories = 0;

    products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (!(product.category in categories)) {
            rows.push([])
            categories[product.category] = len_categories;
            rows[len_categories].push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );            
            len_categories += 1;
        }
        rows[categories[product.category]].push(
            <ProductRow
                product={product}
                key={product.name} />
        );
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default ProductTable
