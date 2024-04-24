import Catalog from '../../models/Catalog';

interface ComponentProps {
  item: Catalog;
}

function CatalogListItem({ item }: ComponentProps) {
  return <>{item}</>;
}

export default CatalogListItem;
