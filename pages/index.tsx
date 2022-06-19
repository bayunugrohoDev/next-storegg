/* eslint-disable import/extensions */
import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import Navbar from './components/organisms/Navbar';
import MainBanner from './components/organisms/MainBanner';
import TransactionStep from './components/organisms/TransactionStep';
import FeatureGame from './components/organisms/FeatureGame';
import Reached from './components/organisms/Reached';
import Story from './components/organisms/Story';
import Footer from './components/organisms/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Head>
        <title>
          {' '}
          BayuGaming -
          Topup & Get a New
          Experience in Gaming
        </title>
        <meta
          name="descriptin"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta
          property="og:title"
          content=" BayuGaming -
          Topup & Get a New
          Experience in Gaming"
        />
        <meta property="og:description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        {/* <meta property="og:image" content="" /> */}
        {/* <meta property="og:url" content="" /> */}
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeatureGame />
      <Reached />
      <Story />
      <Footer />
    </div>
  );
}
