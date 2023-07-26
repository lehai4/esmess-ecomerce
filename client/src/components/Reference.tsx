import { Wrapper } from ".";
type ReferenceProps = {
  children: React.ReactNode;
};

const Reference = ({ children }: ReferenceProps) => {
  return (
    <div className="elementor-container">
      <Wrapper title="Refer">
        <div className="elementor-widget-container">
          <ul className="product-list">{children}</ul>
        </div>
      </Wrapper>
    </div>
  );
};

export default Reference;
