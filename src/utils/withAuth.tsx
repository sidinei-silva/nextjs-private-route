import { useRouter } from 'next/router';
import React from 'react';

import { loggedIn } from '../services/auth';

const withAuth = Component => {
  return () => {
    const router = useRouter();

    React.useEffect(() => {
      if (!loggedIn()) {
        router.push('/login');
      }
    });

    return <Component />;
  };
};

export default withAuth;
