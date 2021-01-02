import { Typography } from '@material-ui/core';
import PageLayout from '../layouts/page';
import Link from '../components/Link';

export default function AttributionPage() {
  return (
    <PageLayout title="Attribution">
      <Typography variant="subtitle1" paragraph>
        We use openly licensed software, images and other media to produce this
        site. We are thankful for all creators who have have openly licensed
        their work.
      </Typography>
      <Typography variant="h5" paragraph>
        Icons
      </Typography>
      <Typography variant="body1" paragraph>
        Icons displayed on our pages are licensed from{' '}
        <Link
          href="https://thenounproject.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          The Noun Project
        </Link>{' '}
        under a{' '}
        <Link
          href="https://creativecommons.org/licenses/by/3.0/us/legalcode"
          target="_blank"
          rel="noreferrer noopener"
        >
          Creative Commons Attribution 3.0 license
        </Link>
        .
      </Typography>
      <Typography variant="h5" paragraph>
        Software
      </Typography>
      <Typography variant="body1" paragraph>
        This website was built with love by our partners at{' '}
        <Link
          href="https://lomon.org"
          target="_blank"
          rel="noreferrer noopener"
        >
          Lomon Foundation
        </Link>
        , using{' '}
        <Link
          href="https://nextjs.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Next.js
        </Link>{' '}
        and{' '}
        <Link
          href="https://material-ui.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Material-UI
        </Link>
        .
      </Typography>
    </PageLayout>
  );
}
