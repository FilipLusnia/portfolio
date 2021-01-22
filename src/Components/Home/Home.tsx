import { lazy, Suspense, memo } from 'react';

import Fallback from '../Fallback';
import Hero from './Hero';
import Footer from '../Footer/Footer';
const About = lazy(() => import('./About'));
const Showcase = lazy(() => import('./Showcase'));

function Home() {
  return (
    <>  
      <Hero/>
      <Suspense fallback={<Fallback/>}>
        <About/>
        <Showcase/>
      </Suspense>
      <Footer/>
    </>
  );
}

export default memo(Home);
