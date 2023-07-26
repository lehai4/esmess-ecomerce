import { ProductProps } from "../typeProps";
import { convertPath } from "./formatPath";

export const getProductBySlug = (datas: ProductProps[], slug: string) => {
  return datas.find((e) => convertPath(e.name) === slug);
};

export const getCategoryBySlug = (datas: ProductProps[], slug: string) => {
  return datas.filter((e) => e.category === slug);
};
