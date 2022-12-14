import ProductCard from "../product-card/product-card.component";
import { CategoryPreviewContainer, Preview, Title } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title to={title} className="title">
        <h2>{title.toUpperCase()}</h2>
      </Title>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
