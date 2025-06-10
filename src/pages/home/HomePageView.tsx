import IconButton from '@/components/atoms/icon-button';
import click from '@assets/animations/click.json';
import partyData from '@assets/animations/party.json';
import animationData from '@assets/animations/thanx.json';
import Header from '@atoms/header';
import Text from '@atoms/text';
import { cn } from '@helpers/utils';
import confetti from 'canvas-confetti';
import Player from 'lottie-react';
import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import type { HomePageViewProps } from './types';

const HomePageView: FC<HomePageViewProps> = () => {
  const lottieRef = useRef<any>(null);
  const partyRef = useRef<any>(null);
  const [startParty, setStartParty] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [switchView, setSwitchView] = useState(false);
  const [screenReaderMessage, setScreenReaderMessage] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const pauseTime = 800;

    if (lottieRef.current) {
      const timeout = setTimeout(() => {
        lottieRef.current.pause();
      }, pauseTime);

      return () => clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    if (startAnimation && lottieRef.current) {
      setTimeout(() => {
        setSwitchView(true);
        lottieRef.current.play();
      }, 400);

      document.addEventListener('click', (event) => {
        confetti({
          particleCount: 100,
          angle: 90,
          spread: 360,
          origin: { x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight }
        });
      });
    }
  }, [startAnimation]);

  useEffect(() => {
    if (startParty && partyRef.current) {
      partyRef.current.play();
    } else {
      partyRef.current?.pause();
    }
  }, [startParty]);

  return (
    <div className={cn('homepage-view', 'max-w-[640px] relative')}>
      <button
        className='sr-only'
        tabIndex={0}
        aria-label={t('homePage.openPresent')}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (!startAnimation) {
              setStartAnimation(true);
              setScreenReaderMessage(`${t('homePage.message')}, ${t('homePage.message2')}`);
            }
          }
        }}
      >
        {t('homePage.openPresent')}
      </button>
      {!switchView ? (
        <div className='relative z-50 px-2 sm:px-20'>
          <div className={startAnimation ? 'animate-exit' : 'animate-enter'}>
            <Header tag='h1' className='w-full text-center text-[100%]'>
              {t('homePage.click')}
            </Header>
          </div>
          <div
            className={cn(
              'relative z-50 flex top-10 justify-center items-center',
              startAnimation ? 'fade-out' : 'fade-in'
            )}
          >
            <Player
              autoplay={true}
              loop={true}
              animationData={click}
              style={{ width: '170px', transform: 'rotate(190deg)' }}
              onClick={() => {
                setStartAnimation(true);
              }}
            />
          </div>
        </div>
      ) : (
        <div className='relative z-50 flex justify-center items-center'>
          <div
            className={cn(
              'flex flex-col gap-4 justify-center items-center px-2 max-w-[360px] opacity-0',
              startAnimation ? 'fade-in' : ''
            )}
          >
            <Header
              tag='h2'
              fontSize='h5'
              className='text-text-light dark:text-text-light w-full text-center text-[100%]'
            >
              {t('homePage.message')}
            </Header>
            <Text tag='p' className='text-text-light dark:text-text-light w-full text-center text-[100%]'>
              {t('homePage.message2')}
            </Text>
            <div className='flex gap-4 justify-center items-center'>
              <IconButton
                icon='linkedin'
                size={20}
                tabIndex={0}
                variant='secondary'
                rounded={true}
                onClick={() => {
                  window.location.href = 'https://www.linkedin.com/in/egdev/';
                }}
                title={t('homePage.linkedin')}
              />
              <IconButton
                icon='github'
                size={20}
                tabIndex={0}
                variant='secondary'
                rounded={true}
                onClick={() => {
                  window.location.href = 'https://www.github.com/egdev6';
                }}
                title={t('homePage.github')}
              />
              <IconButton
                icon='instagram'
                size={20}
                tabIndex={0}
                variant='secondary'
                rounded={true}
                onClick={() => {
                  window.location.href = 'https://www.instagram.com/egdev6/';
                }}
                title={t('homePage.instagram')}
              />
            </div>
            <div className='h-[50px] w-full flex justify-center items-center'>
              <Player
                lottieRef={partyRef}
                autoplay={false}
                loop={true}
                aria-label={t('homePage.letsParty')}
                animationData={partyData}
                tabIndex={0}
                style={{
                  maxWidth: startParty ? '300px' : '50px',
                  position: startParty ? 'absolute' : 'relative',
                  transition: '200ms ease-in-out'
                }}
                onMouseEnter={() => {
                  if (partyRef.current) {
                    setStartParty(true);
                  }
                }}
                onMouseLeave={() => {
                  if (partyRef.current) {
                    setStartParty(false);
                  }
                }}
                onClick={() => {
                  if (partyRef.current) {
                    setStartParty(!startParty);
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    if (partyRef.current) {
                      setStartParty(!startParty);
                    }
                  }
                }}
              />
              <button
                className='sr-only'
                tabIndex={0}
                aria-label={t('homePage.togglePartyAnimation')}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    if (partyRef.current) {
                      setStartParty(!startParty);
                    }
                  }
                }}
              >
                Toggle Party Animation
              </button>
            </div>
          </div>
        </div>
      )}
      <div className='fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center'>
        <Player
          lottieRef={lottieRef}
          autoplay={true}
          loop={false}
          animationData={animationData}
          style={{ minWidth: '640px' }}
          onClick={() => {
            if (!startAnimation) {
              setStartAnimation(true);
              setScreenReaderMessage(`${t('homePage.message')}, ${t('homepage.message2')}`);
            }
          }}
        />
      </div>
      <div aria-live='polite' className='sr-only'>
        {screenReaderMessage}
      </div>
    </div>
  );
};

export { HomePageView };
