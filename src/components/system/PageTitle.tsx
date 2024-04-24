import { Typography } from '@mui/joy';

interface ComponentProps {
  title: string;
}

function PageTitle({ title }: ComponentProps) {
  return <Typography level="h1">{title}</Typography>;
}

export default PageTitle;
