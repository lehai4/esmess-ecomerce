import { useParams } from "react-router-dom";
import { Helmet, Navigate, ProductView } from "..";
import { useEffect, useState } from "react";
import { imageProps, optionSelected } from "../../typeProps";
import { useAppSelector } from "../../hooks/hooks";

const ProductHandle = ({ ...rest }) => {
  const { getProductBySlug } = rest;
  const { slug } = useParams();
  const products = useAppSelector((state) => state.products.product);
  const product = getProductBySlug(products, slug);
  const option: optionSelected[] = [
    {
      value: "XL",
      label: "XL",
    },
    {
      value: "L",
      label: "L",
    },
    {
      value: "M",
      label: "M",
    },
    {
      value: "S",
      label: "S",
    },
    {
      value: "SX",
      label: "SX",
    },
  ];
  const [active, setActive] = useState(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [selected, setSelected] = useState<any>();
  const [color, setColor] = useState<imageProps>({ ...product.imageUrl[0] });

  const handleChangeSelected = (e: any) => {
    setSelected(e);
  };
  const handleClick = () => {
    if (selected && color) {
      alert("Da add");
    } else {
      alert("Chua add");
    }
  };
  const handleQuantity = (type: string) => {
    if (type === "plus") {
      setQuantity((prev) => prev + 1);
    }
    if (type === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleChangeColor = (e: any, i: number) => {
    setColor(e);
    setActive(i);
  };
  useEffect(() => {
    setColor({ ...product.imageUrl[0] });
  }, [product]);
  return (
    <Helmet title={`${product?.name}`}>
      <div style={{ backgroundColor: "#fff" }}>
        <div style={{ backgroundColor: "#f7f8f9" }}>
          <div className="elementor-container">
            <Navigate {...product} />
          </div>
        </div>
        <div className="elementor-container">
          <ProductView
            color={color}
            active={active}
            option={option}
            product={product}
            quantity={quantity}
            selected={selected}
            handleClick={handleClick}
            handleQuantity={handleQuantity}
            handleChangeColor={handleChangeColor}
            handleChangeSelected={handleChangeSelected}
          />
        </div>
      </div>
    </Helmet>
  );
};

export default ProductHandle;
