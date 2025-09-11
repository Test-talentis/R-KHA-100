import { List } from '@components/ui';
import { TCategory } from '@types'
import { Link } from 'react-router-dom';



function CategorieLink({id, title, prefix}: TCategory) {
    return (
        <Link key={id} to={`categories/products/${prefix}`}>
          <List title={`${title}'s collection`} />
        </Link>
      );
}

export default CategorieLink