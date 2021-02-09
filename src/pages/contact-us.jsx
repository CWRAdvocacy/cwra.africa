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
      url: 'mailto:hello@cwra.africa'
    },
    {
      label: 'Facebook',
      item: 'https://facebook.com/CWRAdvocacy',
      url: 'https://facebook.com/CWRAdvocacy'
    },
    {
      label: 'Twitter',
      item: 'https://twitter.com/CWRAdvocacy',
      url: 'https://twitter.com/CWRAdvocacy'
    },
    {
      label: 'Instagram',
      item: 'https://instagram.com/CWRAdvocacy',
      url: 'https://instagram.com/CWRAdvocacy'
    },
    {
      label: 'LinkedIn',
      item: 'https://www.linkedin.com/company/cwradvocacy',
      url: 'https://www.linkedin.com/company/cwradvocacy'
    },
    {
      label: 'GitHub',
      item: 'https://github.com/CWRAdvocacy',
      url: 'https://github.com/CWRAdvocacy'
    },
    {
      label: 'Newsletter',
      item: 'http://eepurl.com/hmk565',
      url: 'http://eepurl.com/hmk565'
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
                href={element.url}
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
