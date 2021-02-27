import { lazy, Suspense } from 'react';

import Hero from './Hero';
import Fallback from '../Fallback';
const About = lazy(() => import('./About'));
const MoreAbout = lazy(() => import('./MoreAbout'));

function Home() {
  return (
    <>  
      <Hero/>
      <Suspense fallback={<Fallback/>}>
        <About/>
      </Suspense>
      <Suspense fallback={<Fallback/>}>
        <MoreAbout/>
      </Suspense>
    </>
  );
}

export default Home;
