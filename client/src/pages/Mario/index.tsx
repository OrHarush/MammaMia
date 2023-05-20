import { useEffect } from 'react';
import PageLayout from '../../Layout/PageLayout';

const Mario = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'src/pages/mario/game.js';
    script.async = true;
    script.type = 'module';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <PageLayout>
      <canvas />
    </PageLayout>
  );
};

export default Mario;
