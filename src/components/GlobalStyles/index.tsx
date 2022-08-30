import React, { ReactElement } from 'react';

import './GlobalStyles.scss';

interface GlobalStylesProps {
  children: ReactElement<any, any>;
}

const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
  return children;
};

export default GlobalStyles;
