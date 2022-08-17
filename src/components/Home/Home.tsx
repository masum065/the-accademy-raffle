import { PublicLayout } from '../../layout/PublicLayout';
import { Career } from './Career/Career';
import { Hero } from './Hero/Hero';
import { OfferLinks } from './OfferLinks/OfferLinks';

export const Home = () => {
  return (
    <PublicLayout>
      <Hero />
      <OfferLinks />
      <Career />
    </PublicLayout>
  );
};
