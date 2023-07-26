import { ProductProps } from "../typeProps";

export const handleLimitedShowProduct = (
  datas: ProductProps[],
  count: number
) => {
  const max = datas?.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return datas.slice(start, start + count);
};
