import { useCallback, useEffect, useState } from "react";
import { Category, Helmet, Navigate, ProductList } from "..";
import {
  ProductProps,
  categorySliceProps,
  optionSelected,
} from "../../typeProps";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCategory } from "../../redux/apiRequest";

const ShopRightSidebar = () => {
  const dispatcher = useAppDispatch();
  const productList = useAppSelector((state) => state.products.product);
  const categoryList = useAppSelector((state) => state.category.category);
  const [selected, setSelected] = useState<any>();
  const [result, setResult] = useState<string>("Showing 1-12 of 71 results");
  const [category, setCategory] = useState<categorySliceProps[]>(categoryList);
  const [products, setProducts] = useState<ProductProps[]>(productList);
  const [productsOriginal, setProductsOriginal] =
    useState<ProductProps[]>(productList);
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

  //
  // useEffect(() => {
  //   const sortby = selected?.target.value;
  // }, [selected]);

  useEffect(() => {
    setCategory(categoryList);
  }, [categoryList]);

  useEffect(() => {
    setProducts(productList);
  }, [productList]);

  useEffect(() => {
    setProductsOriginal(productList);
  }, [productList]);

  useEffect(() => {
    return () => {
      getCategory(dispatcher);
    };
  }, [dispatcher]);
  return (
    <Helmet title="shop-right-sidebar">
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
              category={category}
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

export default ShopRightSidebar;
