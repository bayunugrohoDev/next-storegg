import ReactGA from 'react-ga4';

import Ilustrations from './Ilustrations';

const ID = 'G-0BFQ33RMSY';

ReactGA.initialize(ID);

// ReactGA.event({
//   category: "your category",
//   action: "your action",
//   label: "your label", // optional
//   value: 99, // optional, must be a number
//   nonInteraction: true, // optional, true/false
//   transport: "xhr", // optional, beacon/xhr/image
// });

export default function MainBanner() {
  const trackDownloadClick = (label: string) => {
    // Track the download link click using Google Analytics
    ReactGA.event({
      category: 'Downloads',
      action: 'Click',
      label,
    });
  };
  return (
    <section className="header pt-lg-60 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row gap-lg-0 gap-5">
          <div className="col-lg-6 col-12 my-auto">
            <p className="text-support text-lg color-palette-2">Halo gamers,</p>
            <h1 className="header-title color-palette-1 fw-bold">
              Topup & Get
              {' '}
              <span className="d-sm-inline d-none">a</span>
              <span className="d-sm-none d-inline">a</span>
              <span className="underline-blue"> New</span>
              {' '}
              <br className="d-sm-block d-none" />
              {' '}
              <span className="underline-blue">Experience</span>
              {' '}
              in Gaming
            </h1>
            <p className="mt-30 mb-40 text-lg color-palette-1">
              Kami menyediakan jutaan cara untuk membantu
              <br className="d-md-block d-none" />
              {' '}
              players menjadi pemenang
              sejati
            </p>
            <div className="d-flex flex-lg-row flex-column gap-4">
              <a
                className="btn btn-get text-lg text-white rounded-pill"
                href="#feature"
                role="button"
              >
                Get Started
              </a>
              <a
                className="btn-learn text-lg color-palette-1 my-auto text-center"
                href="/"
                role="button"
                onClick={() => trackDownloadClick('AppleAppStore')}
              >
                Learn More
              </a>
            </div>
          </div>
          <Ilustrations />
        </div>
      </div>
    </section>
  );
}
