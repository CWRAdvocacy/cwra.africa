/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import Header from '../components/header';
import Footer from '../components/Footer';

export default function BaseLayout({ children, props }) {
  return (
    <div {...props}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
