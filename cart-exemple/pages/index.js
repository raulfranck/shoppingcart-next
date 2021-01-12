import Head from 'next/head';
import styles from '../styles/Home.module.css';

import ButtonAppBar from '../components/menu/index'


export default function Home() {
  return (
    <div>
      <ButtonAppBar />

      <div className={styles.container}>
        
      </div>
    </div>
  )
}