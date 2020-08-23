import React from 'react';

import withAuth from '../../src/utils/withAuth';

const dashboard = () => {
  return <h1>Dash</h1>;
};

export default withAuth(dashboard);
