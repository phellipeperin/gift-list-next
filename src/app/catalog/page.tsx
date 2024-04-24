// import { useLoaderData, useNavigate } from 'react-router-dom';
import { Stack, Button } from '@mui/joy';

// import { createCatalog } from '../services/entities/catalogService';
// import { FirebaseDocumentEntry } from '../models/Firebase';

import PageTitle from '@/components/system/PageTitle';
import CatalogList from '@/components/catalog/CatalogList';

function CatalogRoute() {
  // const catalogList = useLoaderData() as Array<FirebaseDocumentEntry>;
  // const navigate = useNavigate();

  const createNewCatalog = async (): Promise<void> => {
    // const catalogId = await createCatalog();
    // navigate(`/catalog/edit/${catalogId}`);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        padding: 4,
      }}
    >
      <PageTitle title="Your Gift Lists" />
      <CatalogList list={[]} />
      <Button
        variant="outlined"
        sx={{
          minHeight: 64,
          width: '100%',
          fontSize: 16,
          textTransform: 'uppercase',
        }}
        onClick={() => createNewCatalog()}
      >
        Create a Gift List
      </Button>
    </Stack>
  );
}

export default CatalogRoute;
