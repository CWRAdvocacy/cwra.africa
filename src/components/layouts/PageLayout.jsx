import Header from '../Header';
import Footer from '../Footer';

const PageLayout = ({ children, props }) => (
  <div {...props}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default PageLayout;
