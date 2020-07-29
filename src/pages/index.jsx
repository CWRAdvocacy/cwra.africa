import PageLayout from '../components/layouts/PageLayout';
import { Hero } from '../components/Hero';
import ExecutiveTeam from '../components/Team/Executive';
import BoardTeam from '../components/Team/Board';

const Index = () => (
  <PageLayout>
    <Hero />
    <ExecutiveTeam />
    <BoardTeam />
  </PageLayout>
);

export default Index;
