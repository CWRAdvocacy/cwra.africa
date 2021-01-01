import Layout from '../layouts/base';
import Hero from '../components/Hero';
import ExecutiveTeam from '../components/Team/Executive';
import BoardTeam from '../components/Team/Board';

const Index = () => (
  <Layout>
    <Hero />
    <ExecutiveTeam />
    <BoardTeam />
  </Layout>
);

export default Index;
