import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  NotFound,
  ProductCategory,
  ProductHandle,
  ShopRightSidebar,
} from "../components";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Blog, Home, Page, Shop } from "../page";
import { getAllProduct } from "../redux/apiRequest";
import { ProductProps } from "../typeProps";
import { getCategoryBySlug, getProductBySlug } from "../utils/getDataBySlug";
import { handleLimitedShowProduct } from "../utils/handleLimitedShowProduct";

const Router = () => {
  const dispatcher = useAppDispatch();
  const product = useAppSelector((state) => state.products.product);
  const [datas, setDatas] = useState<ProductProps[]>(product);

  useEffect(() => {
    setDatas(product);
  }, [product]);
  useEffect(() => {
    return () => {
      getAllProduct(dispatcher);
    };
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={<Home data={handleLimitedShowProduct(datas, 3)} />}
      />
      <Route path="/page" element={<Page />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route
        path="/product/:slug"
        element={<ProductHandle getProductBySlug={getProductBySlug} />}
      />
      <Route path="/shop-right-sidebar" element={<ShopRightSidebar />} />
      <Route
        path="product-category/:slug"
        element={<ProductCategory getCategoryBySlug={getCategoryBySlug} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
