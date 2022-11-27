import { Typography } from '@mui/material';
import Link from '../components/Link';
import PageLayout from '../layouts/page';

export default function TermsOfUsePage() {
  return (
    <PageLayout title="Terms Of Use">
      <Typography variant="subtitle1" paragraph>
        These are the general terms and conditions on which we supply all our
        services. If you use our services, you agree to abide by these terms.
      </Typography>

      <Typography variant="body1" paragraph>
        At CWRA we supply a lot of different services. Some of them will have
        specific terms tailored for them. If that is the case, CWRA&apos;s contract
        with you for that service will be on these terms, supplemented by any
        terms specific to the service. In the case of any conflict, service
        specific terms will take precedence.
      </Typography>
      <Typography variant="body1" paragraph>
        We process personal data in accordance with our
        {' '}
        <Link href="/privacy-policy">privacy policy</Link>
        . As part of this
        agreement you consent to our doing so. You should read the policy
        carefully, especially if you have any concerns about your privacy.
      </Typography>
      <Typography variant="body1" paragraph>
        <b>
          Warning: unless we have agreed a particular level of service with you,
          we make absolutely no promises about the quality or existence of any
          of our services . Please read the sections below and our general
          exclusion of liability.
        </b>
      </Typography>

      <Typography variant="body1" paragraph>
        All use of our web services are subject to our terms for web users.
        There are further terms if you have signed up for an account with one of
        our services and, if you have agreed to pay us for a service, please see
        the additional terms for paid-for services. At the end are some general
        terms and definitions.
      </Typography>

      <Typography variant="body1" paragraph>
        If you believe there may be illegal content hosted on our web services
        please let us know at hello [at] cwra.africa
      </Typography>

      {/* Terms For Use Of Our Web Services */}
      <Typography variant="h5" paragraph>
        Terms for use of our web services
      </Typography>
      <Typography variant="body1" paragraph>
        Web services include our APIs as well as any of our websites.
      </Typography>

      {/* Disclaimer */}
      <Typography variant="h5" paragraph>
        Disclaimer
      </Typography>
      <Typography variant="body1" paragraph>
        While we are proud of the services we provide to the world for free and
        try to make them reliable and useful, we make no promises about them.
        All web services are certain to fail some of the time. We adapt and
        change our services from time to time, so you may find that something
        that worked for you may cease to work. We may also stop supplying any
        service, temporarily or permanently or block access to our services to
        anyone for any reason.
      </Typography>
      <Typography variant="body1" paragraph>
        If you need some guarantee of a particular service level, then please do
        not hesitate to contact us to discuss whether we could offer you a
        commercial version of any of our services (assuming one is not already
        available).
      </Typography>
      <Typography variant="body1" paragraph>
        We are not a law firm and nothing we do is intended to be taken as legal
        advice. In particular:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            We encourage the use of
            {' '}
            <Link
              href="https://creativecommons.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              creative commons licences
            </Link>
            {' '}
            but we cannot give any warranty that they will work in the way
            expected or should be used for any specific purpose. If in doubt,
            you should take your own legal advice.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            The API supplied with our Public Domain Works project is not
            guaranteed to provide an answer with 100% certainty. Copyright law
            is complex and there may be obscure cases that are not handled
            correctly. It is intended to be a starting point, not the word of
            God.
          </Typography>
        </li>
      </ul>

      {/* What You Agree */}
      <Typography variant="h5" paragraph>
        What You Agree
      </Typography>
      <Typography variant="body1" paragraph>
        You agree not to use our websites to do any of the following:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Anything which is illegal either where you are in the world, or
            where we are.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Cause nuisance to other users of our services.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Interfere with the normal running of our services.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Try to access our systems in a way other than those advertised by us
            and, in particular, to use a web crawler that does not respect the
            robots exclusion policy.
          </Typography>
        </li>
      </ul>

      {/* Other Websites */}
      <Typography variant="h5" paragraph>
        Other Websites
      </Typography>
      <Typography variant="body1" paragraph>
        Some of our activities are carried out on web platforms provided by
        third parties. For example the source code for AnnotateIt is hosted on
        github. If you make use of any service where that is the case, you are
        responsible for complying with any terms of service of the third party
        platform.
      </Typography>

      {/* Accounts */}
      <Typography variant="h5" paragraph>
        Accounts
      </Typography>
      <Typography variant="body1" paragraph>
        Some of our services require you to create an account in order to make
        certain kinds of, or any, use of the service. All our accounts are
        subject to the following rules.
      </Typography>
      <Typography variant="body1" paragraph>
        You must be at least 13 years old and a human being.
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            If asked for any personal details, you must answer truthfully (see
            our
            {' '}
            <Link href="/privacy-policy">privacy policy</Link>
            {' '}
            for what we
            do with those details). You must supply us with a valid e-mail
            address.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            You are responsible for the security of your accounts and making
            sure that any contact details in the account are kept up to date. If
            we need to contact you but are unable to do so, for example because
            your e-mail address is no longer valid, then any consequences of
            that failure will be your responsibility.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            You must not let anyone else use your account. If pressure is
            applied to you to do so — for example if an employer demands your
            username and password — please inform them that their attempt to
            subvert your agreement with us will mean that they have no
            permission to use any of our services. We may take action, including
            criminal prosecution, if they use our services using an account they
            have obtained in this way.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            You must let us know of any unauthorised use of your account as soon
            as you are able to after becoming aware of it.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Unless an account is associated with a paid-for service, we may
            suspend or terminate it at any time. Equally, you may close your
            account at any time
          </Typography>
        </li>
      </ul>

      {/* Community Members */}
      <Typography variant="h5" paragraph>
        Community Members
      </Typography>
      <Typography variant="body1" paragraph>
        By registering as a community member, you are acknowledging your
        connection to us. You are subject to any rules for community members we
        may publish and we may send you email messages we think appropriate for
        members, for example in order to poll you on some important issue.
      </Typography>
      <Typography variant="body1" paragraph>
        Community membership is not membership in the formal sense of membership
        of a company limited by guarantee.
      </Typography>

      {/* Content and Intellectual Property */}
      <Typography variant="h5" paragraph>
        Content and Intellectual Property
      </Typography>
      {/* What we do with your content */}
      <Typography variant="h6" paragraph>
        What we do with your content
      </Typography>
      <Typography variant="body1" paragraph>
        If you contribute content to any of our services, for example by
        commenting on a blog, or uploading data, then as a general rule you
        agree to licence that content to us under the same licence as prevails
        for that service or website.
      </Typography>
      <Typography variant="body1" paragraph>
        For example: any comment you make on the blog , which is licensed under
        a CC-BY licence, will be licensed to us under the same licence.
      </Typography>
      <Typography variant="body1" paragraph>
        The only exception to this policy is where a service we supply to you
        expressly allows a different licence, for example a private CKAN
        instance would contain your data under whatever licence — including no
        licence — you choose.
      </Typography>

      {/* Our content */}
      <Typography variant="h6" paragraph>
        Our content
      </Typography>
      <Typography variant="body1" paragraph>
        Unless otherwise stated all our services are offered under open content
        or data licences and you should refer to the provisions of the licence
        in question to find out what you are allowed to do. Some of our content
        belongs to third parties. Most third party data is subject to an open
        licence, but we cannot guarantee it. You should refer to the third party
        if you are in doubt.
      </Typography>

      {/* Ownership does not change */}
      <Typography variant="h6" paragraph>
        Ownership does not change
      </Typography>
      <Typography variant="body1" paragraph>
        As a general rule, this agreement will not change the ownership of any
        intellectual property belonging to either party. Where your content is
        used by us or vice versa both you and we would do so under a licence
        (see above).
      </Typography>

      {/* Paid-for services */}
      <Typography variant="h5" paragraph>
        Paid-for Services
      </Typography>
      <Typography variant="body1" paragraph>
        Any payment you have agreed to make to us is subject to any applicable
        taxation or similar financial imposition. You are responsible for paying
        any additional sum imposed in this way. For example, many of our
        services are subject to Value-Added Tax, which you are required to pay
        to us.
      </Typography>
      <Typography variant="body1" paragraph>
        If you have agreed to pay a sum at regular intervals (&quot;payment periods&quot;)
        then:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            We will only terminate the service by giving notice of at least one
            payment period in length;
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            We may increase the price for the service by giving you at least one
            payment period&apos;s notice of the new price.
          </Typography>
        </li>
      </ul>
      <Typography variant="body1" paragraph>
        You may terminate a paid-for service at any time by giving us notice of
        termination. Any payment you have already made to us will not be
        repayable, but we will continue to supply the service — unless you ask
        us otherwise — until the next payment date.
      </Typography>
      <Typography variant="body1" paragraph>
        We may suspend a paid for service if we reasonably believe:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            It is necessary for us to do so in order to prevent any unlawful
            activity;
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            You have breached this agreement in a sufficiently serious way to
            justify suspending the service in order to prevent that breach.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            You have failed to pay us any sum of money you owe.
          </Typography>
        </li>
      </ul>
      <Typography variant="body1" paragraph>
        If we do suspend a service for any of the above reasons we will take all
        reasonable steps to inform you promptly of what we have done and we will
        lift the suspension as soon as we are satisfied that the reason for the
        suspension no longer applies.
      </Typography>

      {/* Liability */}
      <Typography variant="h5" paragraph>
        Liability
      </Typography>
      {/* Indemnities - where you may owe us */}
      <Typography variant="h6" paragraph>
        Indemnities — where you may owe us
      </Typography>
      <Typography variant="body1" paragraph>
        If you breach any of your obligations under this agreement and, as a
        result, cause us to be sued by anyone else, you will have to compensate
        us for any loss we have suffered as a result, which includes any costs,
        such as paying lawyers, or for our own time, we incur defending a claim
        as well as any damages awarded.
      </Typography>
      <Typography variant="body1" paragraph>
        If your breach causes you to be sued by someone else, you will not sue
        us for any loss you suffer as a result.
      </Typography>
      {/* Exclusion - what we do not owe you */}
      <Typography variant="h6" paragraph>
        Exclusion — what we do not owe you
      </Typography>
      <Typography variant="body1" paragraph>
        We limit our liability in several different ways — all of which we
        believe to be fair. In case any one of them is found to be unenforceable
        by a court, each of the following limitations of liability is separate
        and our liability to you is limited by all of them.
      </Typography>
      <Typography variant="body1" paragraph>
        All exclusions of liability are only in so far as we are allowed to do
        so by whatever law applies to the situation. For example, the law of
        England and Wales prevents us from excluding our liability for any
        personal injury or death caused by our negligence. We do not exclude
        such liability.
      </Typography>
      <Typography variant="body1" paragraph>
        We will not be liable for any damage that was not reasonably foreseeable
        at the time we made this agreement.
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Any liability to you is limited by the amount you have paid us for a
            service, where:
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Our liability is zero for a free service.
          </Typography>
        </li>
      </ul>
      <Typography variant="body1" paragraph>
        Where you make periodic payments, our liability is limited to the value
        of the last payment you paid us.
      </Typography>
      <Typography variant="body1" paragraph>
        We are not liable for any loss which is indirect or consequential. That
        includes any loss of business or profit.
      </Typography>
      <Typography variant="body1" paragraph>
        We exclude, in so far as we are allowed, any warranties that would be
        implied by law.
      </Typography>

      {/* General Conditions */}
      <Typography variant="h5" paragraph>
        General Conditions
      </Typography>
      {/* This agreement */}
      <Typography variant="h6" paragraph>
        This Agreement
      </Typography>
      <Typography variant="body1" paragraph>
        We may update these terms and conditions at any time. If we do so, we
        will announce the change on our blog. Any changes will be binding on you
        from the moment we announce them.
      </Typography>
      <Typography variant="body1" paragraph>
        This agreement is made under the laws of Kenya.
      </Typography>

      {/* Boirlerplate */}
      <Typography variant="h6" paragraph>
        Boirlerplate
      </Typography>
      <Typography variant="body1" paragraph>
        These final “boilerplate” terms of should go without saying, but we are
        saying them anyway just to be clear.
      </Typography>
      <Typography variant="body1" paragraph>
        If any part of this agreement is ineffective (for example because it is
        unlawful) then the rest of the agreement should be read without it.
      </Typography>
      <Typography variant="body1" paragraph>
        This agreement is between you and us and is not intended to give anyone
        else any rights.
      </Typography>
      <Typography variant="body1" paragraph>
        We may sometimes fail to enforce our rights under this agreement (for
        example because we decide not to, or we did not realise you were in
        breach of contract). Just because we have not enforced any of our
        rights, does not stop us from doing so in the future.
      </Typography>
      <Typography variant="body1" paragraph>
        Neither party is liable for anything which is beyond their reasonable
        control.
      </Typography>
      <Typography variant="body1" paragraph>
        If for some reason beyond CWRA&apos;s reasonable control, we are unable to or
        it would not be commercially viable for us to, continue to supply any of
        our services, we may cease to supply that service, ending any agreement
        between us for its supply. If we do so, we will return to you a fair
        proportion of any sum you have paid us in advance for the supply of that
        service, taking into account the service we have already supplied to
        you.
      </Typography>

      <Typography variant="body1" paragraph>
        .
      </Typography>
      <Typography variant="body1" paragraph>
        <i>Last Updated: January 2021</i>
      </Typography>
    </PageLayout>
  );
}
