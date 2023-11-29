import { DirectoryContainer } from "../directory/directory.styles.jsx";
import { BackgroudImage, DirectoryItemBody } from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => (
  <DirectoryContainer>
    <BackgroudImage
      style={{
        backgroundImage: `url(${category.imageUrl})`,
      }}
    />
    <DirectoryItemBody>
      <h2>{category.title}</h2>
      <p>Shop Now</p>
    </DirectoryItemBody>
  </DirectoryContainer>
);

export default DirectoryItem;
