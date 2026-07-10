import type { Category } from "@/types/Category";

import { Section } from "../../common/Section";
import { Container } from "../../common/Container";
import { CategoryCard } from "./CategoryCard";

import { GroupTitle } from "../groups/GroupTitle";
import { GroupSlider } from "../groups/GroupSlider";

export const CategoriesGroup = ({
  title,
  categories,
}: {
  title: string;
  categories: Category[];
}) => {
  return (
    <Section className="overflow-hidden mb-5">
      <Container className="relative">
        <GroupTitle title={title} linkText="See All" to="/categories" />

        <GroupSlider>
          {/* Render categories here */}
          {categories.map((item) => (
            <CategoryCard key={item.id} category={item} />
          ))}
        </GroupSlider>
      </Container>
    </Section>
  );
};
