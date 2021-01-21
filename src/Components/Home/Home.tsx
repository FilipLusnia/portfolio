import React, { Suspense } from 'react';

import Hero from './Hero';
import Footer from '../Footer/Footer';
const About = React.lazy(() => import('./About'));
const Showcase = React.lazy(() => import('./Showcase'));

function Home() {
  return (
    <>  
      <Hero/>
      <Suspense fallback={<p>Ładowanie...</p>}>
        <About/>
      </Suspense>
      <Suspense fallback={<p>Ładowanie...</p>}>
        <Showcase/>
      </Suspense>
      <Footer/>
    </>
  );
}

export default Home;
