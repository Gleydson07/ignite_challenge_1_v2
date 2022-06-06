import React from 'react';
import styles from './styles.module.scss'

import rocketImage from '../../assets/rocket.svg'

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <img src={rocketImage} alt="foguete azul" />
    </header>
  );
}

export default Header;