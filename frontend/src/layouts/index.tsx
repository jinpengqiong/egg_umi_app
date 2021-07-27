import React from 'react';
import styles from './index.less';

const BasicLayout: React.FC = props => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default BasicLayout;
