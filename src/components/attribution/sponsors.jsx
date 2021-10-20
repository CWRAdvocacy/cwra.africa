import { Grid, Typography } from "@material-ui/core"

export const AttributionSponsors = () => {
  const sponsors = [
    {
      src: '/images/sponsors/google.png',
      alt: 'Google for Non-profits',
      href: 'https://google.com/nonprofits'
    },
    {
      src: '/images/sponsors/github.png',
      alt: 'GitHub Social Impact',
      href: 'https://socialimpact.github.com/'
    },
    {
      src: '/images/sponsors/microsoft.png',
      alt: 'Microsoft for NonProfits',
      href: 'https://nonprofit.microsoft.com/'
    },
    {
      src: '/images/sponsors/sentry.png',
      alt: 'Sentry for Good',
      href: 'https://sentry.io/for/good/'
    }
  ]
  return (
    <>
      <Typography variant="h5" gutterBottom paragraph>Sponsors</Typography>
      <Grid container spacing={3} alignContent="center">
        {sponsors.map((s)=> (
          <Grid 
            item xs={6} sm={4} md={3} lg={3} key={s.src}
            style={{ display: 'flex', alignItems: 'center'}}>
            <a href={s.href} target="_blank" rel="noopener noreferrer">
              <img src={s.src} alt={s.alt} style={{ maxWidth: '100%'}}/>
            </a>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
