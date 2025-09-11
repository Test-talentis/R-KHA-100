
import { TCategory } from "@types";
import { Heading } from "@components/ui";
import styles from "./styles.module.css";
import CategorieLink from "./CategorieLink";
import Castumlink from "@components/Common/Castumlink/Castumlink";
type TCategorieList = {
  categories: TCategory[];
};

const { category_content } = styles;

function CategorieList({ categories }: TCategorieList) {
  return (
    <div>
      <Heading title="Categories" level={5} />
      <ul className={category_content}>
        <Castumlink
          data={categories}
          renderData={(item) => <CategorieLink key={item.id} {...item} />}
        />
      </ul>
    </div>
  );
}

export default CategorieList;
