import { Sheet, Typography } from '@mui/joy';

interface ComponentProps {
  title?: string;
  message?: string;
}

function PageTitle({ title, message }: ComponentProps) {
  const defaultTitle = 'No results';
  const defaultMessage = "It seems we couldn't find anything";

  return (
    <Sheet
      color="neutral"
      variant="soft"
      sx={{
        padding: 4,
        textAlign: 'center',
        borderRadius: 8,
      }}
    >
      <Typography level="title-lg">{title || defaultTitle}</Typography>
      <Typography level="body-md">{message || defaultMessage}</Typography>
    </Sheet>
  );
}

export default PageTitle;
