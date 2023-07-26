import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { Category, Helmet, Navigate, ProductList } from "..";
import { useAppSelector } from "../../hooks/hooks";
import { ProductProps, optionSelected } from "../../typeProps";

const ProductCategory = ({ ...rest }) => {
  const { getCategoryBySlug } = rest;
  const { slug } = useParams();
  const productList = useAppSelector((state) => state.products.product);
  const category = getCategoryBySlug(productList, slug);
  const [selected, setSelected] = useState<any>();
  const [result, setResult] = useState<string>("Showing 1-12 of 71 results");
  const [products, setProducts] = useState<ProductProps[]>(category);
  const [productsOriginal, setProductsOriginal] =
    useState<ProductProps[]>(category);
  const options: optionSelected[] = [
    {
      value: "Sort by popularity",
      label: "Sort by popularity",
    },
    {
      value: "Sort by average rating",
      label: "Sort by average rating",
    },
    {
      value: "Sort by lastest",
      label: "Sort by lastest",
    },
    {
      value: "Sort by price: low to high",
      label: "Sort by price: low to high",
    },
    {
      value: "Sort by price: high to low",
      label: "Sort by price: high to low",
    },
  ];

  const handleChangeSelected = (e: any) => {
    setSelected(e);
  };

  const handleSort = (minVal: number, maxVal: number) => {
    let result = productsOriginal.filter((item) => {
      return item.price >= minVal && item.price <= maxVal;
    });
    setProducts(result);
  };

  const InstancePrice = useCallback(() => {
    let instancePrice = productsOriginal
      .map((item) => item.price)
      .sort((a, b) => a - b);
    let [minPrice, ...rest] = instancePrice;
    let maxPrice = [...rest].pop();
    return {
      minPrice,
      maxPrice,
    };
  }, []);
  return (
    <Helmet title={`${slug}`}>
      <div style={{ backgroundColor: "#fff" }}>
        <div style={{ backgroundColor: "#f7f8f9" }}>
          <div className="elementor-container">
            <Navigate />
          </div>
        </div>
        <div className="elementor-container pt-28">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ProductList
              result={result}
              options={options}
              products={products}
              selected={selected}
              placeholder="Default sorting"
              handleChangeSelected={handleChangeSelected}
            />
            <Category
              step={5}
              category={[]}
              handleSort={handleSort}
              min={InstancePrice().minPrice}
              max={InstancePrice().maxPrice}
            />
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default ProductCategory;
