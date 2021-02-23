import { lazy, Suspense, memo } from 'react';

import Fallback from '../Fallback';
import Hero from './Hero';
const About = lazy(() => import('./About'));
const MoreAbout = lazy(() => import('./MoreAbout'));

function Home() {
  return (
    <>  
      <Hero/>
      <Suspense fallback={<Fallback/>}>
        <About/>
        <MoreAbout/>
      </Suspense>
    </>
  );
}

export default memo(Home);
