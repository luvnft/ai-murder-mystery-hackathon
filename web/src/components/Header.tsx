import React from 'react';
import { Group, Image, Text, Anchor } from '@mantine/core';
import logo from '../assets/logo.png';
import synthlabsLogo from '../assets/synthlabs.png';
import medarcLogo from '../assets/medarc.png';
import styles from './Header.module.css';  // Import the CSS module

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles['logo-container']}>
        <img src={logo} width="90px" className={styles.logo} />
        <div>
          <Text size="lg">AI MM</Text>
          <Text size="12px">
            Murder Mystery Live A-Team Events 🔜|{' '}
            <a href="https://discord.gg/tRntFezudF">MM Discord</a>
          </Text>
        </div>
      </div>
      <div className={styles.logos}>
        <Anchor href="https://www.synthlabs.ai/" target="_blank">
          <Image src={synthlabsLogo} alt="SynthLabs Logo" width={40} height={40} />
        </Anchor>
        <Anchor href="https://medarc.ai/" target="_blank">
          <Image src={medarcLogo} alt="MedArc Logo" width={40} height={40} />
        </Anchor>
      </div>
    </div>
  );
}