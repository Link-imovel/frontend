import React from 'react';

const useMobile = () => {
  const [userAgent, setUserAgent] = React.useState('');

  React.useEffect(() => {
    setUserAgent(
      typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigator.userAgent]);

  const getMobileDetect = (userAgent: string) => {
    const isAndroid = (): boolean => Boolean(userAgent.match(/Android/i));
    const isIos = (): boolean => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
    const isOpera = (): boolean => Boolean(userAgent.match(/Opera Mini/i));
    const isWindows = (): boolean => Boolean(userAgent.match(/IEMobile/i));
    const isSSR = (): boolean => Boolean(userAgent.match(/SSR/i));
    const isMobile = (): boolean =>
      Boolean(isAndroid() || isIos() || isOpera() || isWindows());
    const isDesktop = (): boolean => Boolean(!isMobile() && !isSSR());

    return {
      isMobile,
      isDesktop,
      isAndroid,
      isIos,
      isSSR,
    };
  };

  return getMobileDetect(userAgent);
};

export { useMobile };
