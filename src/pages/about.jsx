import { Divider, Typography } from '@material-ui/core';
import PageLayout from '../layouts/page';
import { executiveTeam } from '../components/Team/Executive';

import { boardBios } from '../components/Team/Board';

export default function AboutPage() {
  return (
    <PageLayout title="About">
      <Typography variant="body1" paragraph>
        The Center for Women’s Rights and Advocacy (CWRA) is a non-profit
        organisation that seeks to promote gender equality by challenging
        harmful cultural practices and institutional norms at the root of all
        forms of violence against women and girls. We envision a society where
        women and girls live their lives free of violence from public or private
        sources, so as to enjoy equal opportunities in social, economic,
        cultural, civil and political life.
      </Typography>
      <Typography variant="body1" paragraph>
        Registered in Kenya in May 2019, we are a national organisation with a
        regional outlook, because we acknowledge that Africa is positioned in a
        geopolitical context that shapes the lived realities of women and girls
        on the continent. We believe that the axes of race, gender, sex, class
        and (dis) ability converge in various ways to produce intersecting
        inequalities that make it difficult to break oppressive cycles of
        violence for Black African women and girls, especially rural
        women/girls, poor women/girls and women/girls with disabilities.
      </Typography>
      <Typography variant="body1" paragraph>
        Therefore, our work is under-pinned by Pan-African and intersectional
        feminist ideologies that center the different lived realities of women
        and girls in defining all strategies. These ideologies buttress our
        priority to challenge common gender stereotypes by documenting the ways
        in which women and girls, in their diversity, exercise agency, and
        manoeuvre complex socio-economic and cultural realities that they
        operate within, to claim their rights.
      </Typography>

      <Typography variant="h6" paragraph>
        Our main objective:
      </Typography>
      <Typography variant="body1" paragraph>
        To promote human rights and gender equality by challenging harmful
        cultural practices and institutional norms which normalise and propagate
        all forms of violence against women and girls.
      </Typography>

      <Typography variant="h6" paragraph>
        Our specific objectives:
      </Typography>
      <ol>
        <li>
          <Typography variant="body1" paragraph>
            To support Community Based Organizations through technical
            expertise, so as to challenge harmful cultural practices through
            community engagement.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            To provide mentorship platforms for young women and girls in order
            to promote their access to education opportunities and to build a
            network of young women and girls bringing positive change in their
            communities.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            To conduct participatory research with women and girls in
            communities to generate knowledge and disseminate data on what works
            to prevent and effectively respond to women’s rights violations.
          </Typography>
        </li>

        <li>
          <Typography variant="body1" paragraph>
            To conduct strategic/public interest litigation to develop
            jurisprudence on gender equality and women’s rights at the national
            level and African regional level.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            To use advocacy, research, strategic litigation and educative
            strategies to promote gender equality and women’s human rights,
            including the rights of women and girls with disabilities.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            To take such steps by personal or written appeals, private meetings,
            public meetings or representations to Parliament, government
            entities and other bodies as may be deemed expedient to promote any
            of the objects of the Organization.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            To raise, secure and utilise funds for the attainment of any or all
            objects of the Organization, and to do such other things as are
            incidental or conducive to the attainment of these objects.
          </Typography>
        </li>
      </ol>

      <Typography variant="h6" paragraph>
        Our Focus Areas
      </Typography>
      <ol>
        <li>
          <Typography variant="body1" paragraph>
            Ending violence against women and girls in pastoralist communities.
            (Focus on FGM/Child Marriage/Sexual Violence and Domestic Violence,
            including drawing the connections between these forms of GBV).
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            Promoting meaningful participation of women and girls in policy
            reform processes.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            Shifting inequitable gender norms, attitudes and behaviour to
            promote the realisation of women’s rights.
          </Typography>
        </li>
      </ol>

      <Typography variant="h6" paragraph>
        Our Overarching Strategies
      </Typography>
      <ol>
        <li>
          <Typography variant="body1" paragraph>
            <b>Research</b>
          </Typography>
          <Typography variant="body1">
            Using participatory research methodologies to document the violent
            experiences of women and girls and generate empirical data on:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Victimhood and resilience;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Analysis and evaluations of existing interventions for violence
                prevention and response
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Collaborating with other stakeholders and communities to collate
                and disseminate primary/secondary data.
              </Typography>
            </li>
          </ul>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <b>Community Engagement</b>
          </Typography>
          <Typography variant="body1" paragraph>
            <u>Inter-generational dialogues</u>: We use these multi-demographic
            conversations that bring together young and old community members
            across age sets/groups to interrogate questions of culture and
            relevance in a non-antagonistic way.
          </Typography>
          <Typography variant="body1" paragraph>
            <u>Mentorship platforms for girls</u>: We work with girls aged 7-18
            through school and out- of-school programs to equip them with skills
            and capacity to engage in policy reform processes. Making sure their
            voices are included in defining solutions to FGM, teenage pregnancy,
            child marriage and other forms of violence in their context.
            Exposing girls to further education opportunities through
            scholarship applications and linking them to strategic mentors and
            support structures to guide them in decision making processes.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <b>Advocacy</b>
          </Typography>
          <Typography variant="body1" paragraph>
            <u>Public Interest Litigation</u>: Through class action matters or
            strategic litigation - to challenge retrogressive institutional
            norms and contribute to the development of feminist jurisprudence at
            both national and African regional level.
          </Typography>
          <Typography variant="body1" paragraph>
            <u>Media engagement</u>: Through collaborations - to engage a wider
            audience and community of influencers.
          </Typography>
        </li>
      </ol>
      <Divider style={{ margin: '30px 0' }} />
      <OurSecretariatAndBoard />
    </PageLayout>
  );
}

function OurSecretariatAndBoard() {
  return (
    <div>
      <Typography variant="h5" paragraph>
        Who We Are
      </Typography>
      <Typography variant="h6" paragraph>
        Our Secretariat
      </Typography>
      <Typography variant="body1" paragraph>
        Meet members of CWRA's team
      </Typography>
      <ul>
        {executiveTeam.map((member, i) => (
          <li key={i}>
            <Typography variant="body1">
              <b>{member.name}</b> - {member.position}
            </Typography>
            <Typography variant="body2" paragraph>
              {member.brief}
            </Typography>
          </li>
        ))}
      </ul>

      <Typography variant="h6" paragraph>
        Our Board Members
      </Typography>
      <Typography variant="body1" paragraph>
        The Board of Directors provides the formal governance of CWRA as a whole
      </Typography>
      <ol>
        {boardBios.map((member, i) => (
          <li key={i}>
            <Typography variant="body1">
              <b>{member.fullName}</b> - {member.positionLong}
            </Typography>
            <Typography variant="body2" paragraph>
              Current Job: {member.currentJob}
            </Typography>
          </li>
        ))}
      </ol>
    </div>
  );
}
