import Hero from '../components/partials/hero';
import Navbar from '../components/partials/navbar';
import Category from '../components/partials/category';
import Recommended from '../components/partials/recommended';
import Footer from '../components/partials/footer';

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Recommended />
      <Footer />
    </div>
  );
}
