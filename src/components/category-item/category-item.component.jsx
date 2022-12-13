import { Link } from "react-router-dom";
import {BackgroundImage, Body, HomeCategoryContainer} from "./category-item.styles";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <HomeCategoryContainer>
      <BackgroundImage imageUrl={imageUrl} />

      <Body>
        <Link to={`/shop/${title}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </Body>
    </HomeCategoryContainer>
  );
};

export default CategoryItem;
