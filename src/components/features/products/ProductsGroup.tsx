import type { Product } from "@/types/Product";

import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";

import { GroupTitle } from "../groups/GroupTitle";
import { GroupSlider } from "../groups/GroupSlider";

import { ProductCard } from "./ProductCard";

export const ProductsGroup = ({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) => {
  return (
    <Section>
      <Container>
        <GroupTitle
          title={title}
          linkText="See All"
          to="/products"
        />
        <GroupSlider>
          {products.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </GroupSlider>
      </Container>
    </Section>
  );
};
