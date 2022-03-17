import { useEffect, useState } from 'react';

import { Container } from './styles';

export const Banner = () => {
  const [currBanner, setCurrBanner] = useState(0);

  const banners = ['/src/assets/images/banner-1.png', '/src/assets/images/banner-2.png'];

  let changeBannerTimeout: number;

  useEffect(() => {
    // Changes banner's background every 10 seconds

    const TEN_SECONDS = 10000; // 10 seconds in miliseconds

    changeBannerTimeout = setTimeout(() => {
      currBanner ? setCurrBanner(0) : setCurrBanner(1);
    }, TEN_SECONDS);
  }, [currBanner]);

  return (
    <Container style={{ backgroundImage: `url(${banners[currBanner]})` }}>
      <div className="button-wrapper">
        <button
          type="button"
          className={currBanner === 0 ? 'selected' : ''}
          onClick={() => {
            clearTimeout(changeBannerTimeout);
            setCurrBanner(0);
          }}
        />
      </div>

      <div className="button-wrapper">
        <button
          type="button"
          className={currBanner === 1 ? 'selected' : ''}
          onClick={() => {
            clearTimeout(changeBannerTimeout);
            setCurrBanner(1);
          }}
        />
      </div>
    </Container>
  );
};
