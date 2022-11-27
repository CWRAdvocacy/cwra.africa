import Layout from '../layouts/base';
import Hero from '../components/Hero';
import ExecutiveTeam from '../components/Team/Executive';
import BoardTeam from '../components/Team/Board';

function Index() {
  return (
    <Layout>
      <Hero />
      <ExecutiveTeam />
      <BoardTeam />
    </Layout>
  );
}

export default Index;
