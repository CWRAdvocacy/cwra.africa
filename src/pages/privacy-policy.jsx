import { Typography } from '@mui/material';
import Link from '../components/Link';
import Layout from '../layouts/page';

export default function PrivacyPolicyPage() {
  return (
    <Layout title="Privacy Policy">
      <Typography variant="subtitle1" paragraph>
        The Center for Women&apos;s Rights Advocacy is a not-for-profit organization.
        It is incorporated in Kenya as a Non-Governmental Organization, with
        registration number OP.218/051/18-261/11206. VAT Registration
        P051928629X. Registered office address: Nairobi, Kenya.
      </Typography>
      <Typography variant="body1" paragraph>
        This policy describes our approach to your personal data. Contact
        details can be found on the
        {' '}
        <Link href="/contact-us">contact page</Link>
        . This privacy policy will be reviewed, and may be revised, from time to
        time. You may wish to revisit it regularly.
      </Typography>

      {/* Cookies */}
      <Typography variant="h5" paragraph>
        Cookies
      </Typography>
      <Typography variant="body1" paragraph>
        Cookies are small text files that are placed on your machine to help the
        site provide a better user experience. In general, cookies are used to
        retain user preferences, store information for things like shopping
        carts, and provide anonymised tracking data to third party applications
        like Google Analytics which we use to gather statistical data to help us
        report on growth of our organization&apos;s followers to our funders.
      </Typography>
      <Typography variant="body1" paragraph>
        We use two different types of cookies of our site:
      </Typography>
      <Typography variant="h6" paragraph>
        Cookies which contain no personal identification - mandatory
      </Typography>
      <Typography variant="body1" paragraph>
        Some cookies are needed to allow our websites to function correctly,
        improve performance and provide security to our sites. Without the
        installation of these cookies, our sites may either not run at all, or
        give very poor performance. Therefore these cookies are installed
        automatically on your computer.
        {' '}
        <b>
          We cannot turn these cookies off, as they provide basic site
          functionality and security. To do so will prevent access to our
          service.
        </b>
        {' '}
        We use:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            <b>__cfuid</b>
            {' '}
            - From
            {' '}
            <Link
              href="https://www.cloudflare.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Cloudflare
            </Link>
          </Typography>
          <Typography variant="body1">
            Cloudflare speeds up and protects millions of websites, APIs, SaaS
            services, and other properties connected to the Internet. The
            Cloudflare __cfduid cookie is used for two purposes
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                To speed up page load times
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                To apply security settings on a per-client basis. It does not
                correspond to any user ID in your web application, and does not
                store any personally identifiable information.
              </Typography>
            </li>
          </ul>
        </li>
      </ul>
      <Typography variant="h6" paragraph>
        Cookies which may contain personal identification - we ask you to either
        accept or decline
      </Typography>
      <Typography variant="body1" paragraph>
        Other cookies may contain trace bits of personal information, such as
        your preferred language, to give you a better user experience, or record
        the number of site visits, the navigation paths, and number of visitors
        to each page. We use Google Analytics for this purpose. They help us to
        understand your interests, and provide us with statistical data which we
        can use in our funder reports. If you log into any of our sites, either
        with a private login, or by using a Social Media login, then cookies
        will be installed.
      </Typography>
      <Typography variant="body1" paragraph>
        <b>
          We have installed the GDPR compliant solutions provided by Google
          Analytics
        </b>
        , so that you data is anonymised, and we can no longer identify the
        geolocation of your IP number.
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            <b>_collect</b>
          </Typography>
          <Typography variant="body1">
            Google Analytic&apos;s _collect cookie is used to send data to Google
            Analytics about the visitor&apos;s device and behaviour. It tracks the
            visitor across devices and marketing channels, though we do not use
            the marketing, nor have any advertising on our sites. This cookie
            helps us understand who has visited our sites and which pages they
            have visited. This information is used to enhance our websites as
            well as report in aggregated form to our funders.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <b>_ga</b>
          </Typography>
          <Typography variant="body1">
            Google Analytic&apos;s _ga cookie identifies unique users, unique
            sessions, and can throttle the request rate if needed. In order for
            Google Analytics to determine that two distinct hits belong to the
            same user, a unique identifier, associated with that particular
            user, must be sent with each hit. This information is then harvested
            by Google Analytics to provide us with statistical data of site
            usage.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <b>_gat</b>
          </Typography>
          <Typography variant="body1">
            Google Analytic&apos;s _gat cookie does not store any user information,
            it is just used to limit the number of requests made to
            doubleclick.net.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <b>_gid</b>
          </Typography>
          <Typography variant="body1">
            Google Analytic&apos;s _gid cookie is used to count and track pageviews
            anonymously.
          </Typography>
        </li>
      </ul>
      <Typography variant="body1" paragraph>
        We ask, on your first visit following our implementation of the new GDPR
        regulations, that you either consent to having cookies that may contain
        personally identifying information installed, or else decline the
        installation of these cookies. Of course, in order for us to know either
        way what your preferences are, we need to set a cookie! This is a
        conundrum - but we believe it is the only way to comply with the new
        GDPR regulations. This cookie is only stored on your computer. We do not
        keep any record of your decision. If you delete the cookie data, or if
        you arrive at our site from another computer or browser, you will be
        asked again to accept or decline our cookies.
      </Typography>
      <Typography variant="h6" paragraph>
        If you do not make a choice
      </Typography>
      <Typography variant="body1" paragraph>
        If you choose to neither Accept or Decline cookies when our cookie
        banner displays, and continue to browse the site, our default behaviour
        will be to install cookies, as we have given you an opportunity to act
        before cookies are set on a first visit to a site. This is considered by
        us to be “Soft Opt-in” consent.
      </Typography>
      <Typography variant="h6" paragraph>
        How to manually change your cookie preferences
      </Typography>
      <Typography variant="body1" paragraph>
        If you wish to change your cookie preferences after the initial GDPR
        consent request has been completed, you will need to do this manually in
        your browser settings by either enabling or disabling the cookies. We
        suggest consulting the Help section of your browser or taking a look at
        the
        {' '}
        <Link
          href="https://www.aboutcookies.org/how-to-control-cookies/"
          target="_blank"
          rel="noreferrer noopener"
        >
          About Cookies website
        </Link>
        {' '}
        which offers guidance for all modern browsers.
      </Typography>

      {/* Supporter Information */}
      <Typography variant="h5" paragraph>
        Supporter Information
      </Typography>
      <Typography variant="body1" paragraph>
        If you have joined our network, we will use the information you have
        given us to try to connect you with the right parts of our network.
      </Typography>
      <Typography variant="body1" paragraph>
        If you have signed up as a community member, thank you for doing so, we
        appreciate your support. As a community member you will be able to be
        more involved in our activities. We will use information you supply us
        to help you to be more involved. We may use your contact details to get
        in touch as part of that involvement.
      </Typography>

      {/* Donations */}
      <Typography variant="h5" paragraph>
        Donations
      </Typography>
      <Typography variant="body1" paragraph>
        If you make donations to our organisation via PayPal, please be aware
        that PayPal passes your name and email address to us. We need this
        information for our Finance system and in case we need to respond to a
        query. We may also write to you to thank you for your donation. We will
        not use it for anything else.
      </Typography>

      {/* Public Data and Publishing */}
      <Typography variant="h5" paragraph>
        Public Data and Publishing
      </Typography>
      <Typography variant="body1" paragraph>
        If you are uploading datasets for one of our surveys or to one of our
        database services, we request that you check the data and ensure full
        anonymisation, so that we remain GDPR compliant. We do not wish to
        restrict a user&apos;s ability to provide datasets for public use, so please
        upload data responsibly. If in any doubt, please contact us via the
        <Link href="/contact-us">contact page</Link>
        .
      </Typography>

      {/* Author Identification */}
      <Typography variant="h5" paragraph>
        Author Identification
      </Typography>
      <Typography variant="body1" paragraph>
        When posting a comment on one of our blogs, a name and email address may
        be required. You do not have to select your real name or use your
        regular email address. Your email address will not be published. If you
        decide to comment, link, or pingback to a post, you must keep this in
        mind. If you are concerned, you may wish to get a free email account or
        attempt to use a remail service.
      </Typography>
      <Typography variant="body1" paragraph>
        Page edits, comments, trackbacks, and pingbacks and other activity on
        our websites may be identified by your IP address, though we have now
        implemented Google Analytics GDPR solutions, which strips out the last
        two numbers from the IP address in order to become anonymous.
      </Typography>
      <Typography variant="body1" paragraph>
        If you are concerned about attempts to match your IP address to your
        identity, you may wish to use an anonymous browsing service or attempt
        some means to obfuscate your real IP address. If so, you might like to
        try Tor, an anonymous browsing service. Please see Tor for more details:
        <Link
          href="https://www.torproject.org"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://www.torproject.org
        </Link>
        .
      </Typography>

      {/* Email */}
      <Typography variant="h5" paragraph>
        Email
      </Typography>
      <Typography variant="body1" paragraph>
        If you have given us your email address through general correspondence,
        or have signed up to receive our newsletter, you agree to allow us to
        send email to that address in order to deliver our services to you. In
        practice this will usually involve emails about project updates or
        important changes to services to which you subscribe.
      </Typography>
      <Typography variant="body1" paragraph>
        In addition to necessary emails, we will also occasionally use the email
        to contact you for our own purposes. For example we might want to tell
        you about new services we are offering or we might be seeking volunteers
        for one of our many activities. We will only do so sparingly. We
        understand how annoying it can be to receive large quantities of
        unsolicited mail. We will do our best to ensure that anything we do send
        to you will be relevant and unobtrusive.
      </Typography>

      {/* Server Logging & Google Analytics */}
      <Typography variant="h5" paragraph>
        Server Logging & Google Analytics
      </Typography>
      <Typography variant="body1" paragraph>
        Any time you visit a page on the internet, you send quite a bit of
        information to the server. The web servers that host this site maintain
        access logs with the information that you send. This information is used
        to provide site statistics and to get an idea of popular pages and what
        sites link here. We do not intend to use these logs to identify
        legitimate users. The data logged may be used by us to solve technical
        problems with the site and, in cases of abuse of this site, to
        investigate the abuse. We use Google Analytics to gather data from
        cookies to analyse our website traffic in order to provide better
        services and to set benchmarks for how we are doing in meeting CWRA&apos;s
        goals. We have now implemented Google Analytics’ GDPR recommendations in
        order to ensure that we meet GDPR compliance. The main change is that we
        can no longer see the full IP number of a visitor, and so we cannot tell
        which country the visitor is likely to come from.
      </Typography>

      {/* Data Release Policy */}
      <Typography variant="h5" paragraph>
        Data Release Policy
      </Typography>
      <Typography variant="body1" paragraph>
        Our policy is only to release the data we collect in the following
        circumstances:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            As required by law, such as in response to a valid request from law
            enforcement.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            To designated third parties to resolve or investigate abuse
            complaints.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            When the information is related to spiders or bots, usually when
            investigating technical issues.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            For abusive users, we may release information to assist in
            attempting to block the abusive user or to complain to that user’s
            Internet Service Provider.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            If necessary to defend legal claims against us by third parties.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            When we deem it necessary to protect the property or rights of the
            user community, or this website.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            When you have given consent for data to be used, such as completing
            a survey. As an organisation that promotes the use of freely
            accessible data, we cannot be held responsible for the usage of any
            data supplied.
          </Typography>
        </li>
      </ul>

      {/* No Selling of Information */}
      <Typography variant="h5" paragraph>
        No Selling of Information
      </Typography>
      <Typography variant="body1" paragraph>
        We will not sell information collected via this site, such as your email
        address, to third parties.
      </Typography>

      {/* Information Security */}
      <Typography variant="h5" paragraph>
        Information Security
      </Typography>
      <Typography variant="body1" paragraph>
        We aim to make our sites secure, and that any data you do provide, such
        as login information, is kept securely. Unfortunately we cannot
        guarantee this, though will notify you (if we have the information to do
        so) should there be any breach of security, as per GDPR guidelines.
      </Typography>

      {/* Data Subject Request */}
      <Typography variant="h5" paragraph>
        Data Subject Request
      </Typography>
      <Typography variant="body1" paragraph>
        You have the right to request information from us about data we may hold
        on you. There rights are enshrined in the GDPR regulation. In order for
        us to ensure we are providing this information to the correct
        individual, we will need to verify that we are releasing this
        information to the correct natural person, and not someone trying to
        steal your identity. Therefore we ask that you help us to resolve your
        identity as quickly as possible. Failure to provide sufficient
        verification details (i.e. you might need to tell us your IP number in
        order for us to find a match and confirm your identity) may delay our
        ability to provide this information within the 30 days required of the
        GDPR Regulation. If you would like to submit a Data Subject request
        please email hello [at] cwra.africa
      </Typography>

      {/* Right To Be Forgotten */}
      <Typography variant="h5" paragraph>
        Right To Be Forgotten
      </Typography>
      <Typography variant="body1" paragraph>
        Also enshrined in GDPR law is your right to be forgotten. There is
        another conundrum here, as we need to keep a record of anyone who has
        asked to be forgotten, so that we can provide proof to the ICO that we
        are compliant. This is the hardest part of GDPR, as it’s almost
        impossible to remove one person’s details from a backup we may have of
        data, for instance. However, we will be keeping ourselves up-to-date
        with industry fixes and changes, and will do our very best to ensure you
        can be forgotten. Of course, your right to be forgotten will need to
        reviewed against the organisations need to keep information on you to
        satisfy other regulatory bodies.
      </Typography>
      <Typography variant="body1" paragraph>
        If you wish to act on this section of the law, please send an email to
        hello [at] cwra.africa with the Subject matter “GDPR - Right to be
        forgotten”.
      </Typography>

      <Typography variant="body1" paragraph>
        .
      </Typography>
      <Typography variant="body1" paragraph>
        <i>Last Updated: January 2021</i>
      </Typography>
    </Layout>
  );
}
