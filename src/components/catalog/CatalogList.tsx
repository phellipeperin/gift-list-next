import { FirebaseDocumentEntry } from '../../models/Firebase';
import Catalog from '../../models/Catalog';

import NoResults from '../system/NoResults';
import CatalogListItem from './CatalogListItem';

interface ComponentProps {
  list: Array<FirebaseDocumentEntry>;
}

function CatalogList({ list }: ComponentProps) {
  return (
    <>
      {list.length
        ? list.map((item) => <CatalogListItem item={item.data as Catalog} />)
        : <NoResults />
      }
    </>
  );
}

export default CatalogList;
