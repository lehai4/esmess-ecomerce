import { FunctionComponent } from "react";

function createData(
  name: string,
  weight: number,
  dimensions: string,
  color: string,
  size: string
) {
  return { name, weight, dimensions, color, size };
}

const rows = [
  createData(
    "Weight",
    0.5,
    "40 × 30 × 50",
    "Beige, Brown, Green, Orange",
    "XL, L, M, S, XS"
  ),
];
export interface IProps {}

const Information: FunctionComponent<IProps> = () => {
  return <span>hihi</span>;
};
export default Information;
