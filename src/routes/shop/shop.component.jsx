import { Fragment, useContext } from "react";

import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview title={title} key={title} products={products} />
        );
      })}
    </div>
  );
};
export default Shop;
