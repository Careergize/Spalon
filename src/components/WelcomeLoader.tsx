import { useEffect, useState, type ReactNode } from 'react';

export const WelcomeLoader = ({ children }: { children: ReactNode }) => {
  const [phase, setPhase] = useState<'loading' | 'leaving' | 'done'>('loading');

  useEffect(() => {
    let minimumElapsed = false;
    let pageLoaded = document.readyState === 'complete';
    let exiting = false;
    let fadeTimer: number | undefined;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const finish = () => {
      if (exiting) return;
      exiting = true;
      setPhase('leaving');
      fadeTimer = window.setTimeout(() => {
        document.body.style.overflow = originalOverflow;
        setPhase('done');
      }, 400);
    };
    const onLoad = () => {
      pageLoaded = true;
      if (minimumElapsed) finish();
    };
    window.addEventListener('load', onLoad);
    const minimumTimer = window.setTimeout(() => {
      minimumElapsed = true;
      if (pageLoaded) finish();
    }, 1600);
    const maximumTimer = window.setTimeout(finish, 3500);
    return () => {
      window.removeEventListener('load', onLoad);
      window.clearTimeout(minimumTimer);
      window.clearTimeout(maximumTimer);
      window.clearTimeout(fadeTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return <>
    <div inert={phase !== 'done'} aria-hidden={phase !== 'done' ? true : undefined}>{children}</div>
    {phase !== 'done' && <div className={`welcome-loader ${phase === 'leaving' ? 'welcome-loader-leaving' : ''}`} role="status" aria-live="polite" aria-label="Welcome to Spalon. Loading website.">
      <div className="welcome-loader-content">
        <img className="welcome-loader-logo" src="/images/spalon-loader-logo.jpg" alt="Spalon Hair Beauty — Ladies & Kids" width="430" height="430" fetchPriority="high" />
        <p className="welcome-loader-caption">A moment of care. A beautiful beginning.</p>
        <div className="welcome-loader-track" aria-hidden="true"><span /></div>
        <span className="welcome-loader-label">Welcome to Spalon</span>
      </div>
    </div>}
  </>;
};
