import Hero from './main/partials/hero';
import Navbar from './main/partials/navbar';
import Category from './main/partials/category';
import Recommended from './main/partials/recommended';
import Footer from './main/partials/footer';

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
