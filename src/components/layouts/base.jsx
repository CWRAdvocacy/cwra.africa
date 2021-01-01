/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import Header from '../Header';
import Footer from '../Footer';

export default function BaseLayout({ children, props }) {
  return (
    <div {...props}>
      <Header />
      {children}
      <Footer />
    </div>

  );
}
