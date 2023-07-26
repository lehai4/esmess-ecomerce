import { itemSec2, itemSec5 } from "../Mock";
import {
  Section,
  Slider,
  Title,
  Reference,
  Grid,
  ProductSelling,
  Parallax,
  PageOuter,
  Wrapper,
  Collection,
  Helmet,
  Sswiper,
  Fashion,
  TypeOf,
  LoveShopping,
  Donors,
} from "../components";
import { ProductProps } from "../typeProps";

type HomeProps = {
  data: ProductProps[];
};
const Home = ({ data }: HomeProps) => {
  return (
    <Helmet title="Trang chủ">
      <PageOuter>
        <Wrapper title="main">
          <Section title="section1">
            <Slider />
          </Section>
          <Section title="section2">
            <Title {...itemSec2} />
          </Section>
          <Section title="section3">
            <Reference>
              <Grid col={3} mdCol={2} smCol={1} gap={0}>
                {data.map((item) => {
                  return <ProductSelling key={item._id} data={item} />;
                })}
              </Grid>
            </Reference>
          </Section>
          <Section title="section4">
            <Parallax />
          </Section>
          <Section title="section5">
            <Title {...itemSec5} />
          </Section>
          <Section title="section6">
            <Collection />
          </Section>
          <Section title="section7">
            <Sswiper />
          </Section>
          <Section title="section8">
            <Fashion />
          </Section>
          <Section title="section9">
            <TypeOf />
          </Section>
          <Section title="section11">
            <LoveShopping />
          </Section>
          <Section title="section12">
            <Donors />
          </Section>
        </Wrapper>
      </PageOuter>
    </Helmet>
  );
};

export default Home;
