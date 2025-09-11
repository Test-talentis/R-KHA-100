import GridList from "@components/Common/GridList/GridList";
import { Category } from "@components/Ecomme";
import { Loading } from "@components/Feedback";
import useCategories from "@hooks/useCategories";

import { BackgroundImage } from "@components/ui";
function CategoriesPage() {
  const { category, status, error } = useCategories();
  return (
    <>
      <BackgroundImage title="categories"/>
      <Loading status={status} error={error} type="category">
        <GridList
          data={category}
          renderData={(dataItem) => <Category {...dataItem} />}
          emptyMessage=""
        />
      </Loading>
    </>
  );
}

export default CategoriesPage;
