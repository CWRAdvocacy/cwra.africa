import { Typography } from '@material-ui/core';
import Link from '../components/Link';
import PageLayout from '../layouts/page';

export default function ContactUsPage() {
  return (
    <PageLayout title="Contact Us">
      <Typography variant="subtitle1" paragraph>
        If you want to discuss a project, find out more about CWRA, or work with
        us;
      </Typography>
      <ContactList />
    </PageLayout>
  );
}

function ContactList() {
  const list = [
    {
      label: 'E-mail',
      item: 'hello@cwra.africa',
      protocol: 'mailto:'
    }
  ];
  return (
    <ul>
      {list.map((element, i) => {
        return (
          <li key={i}>
            <Typography variant="body1">
              {element.label}:
              <Link
                href={element.protocol + element.item}
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                {element.item}
              </Link>
            </Typography>
          </li>
        );
      })}
    </ul>
  );
}
