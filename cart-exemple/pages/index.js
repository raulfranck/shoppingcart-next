import React, {useEffect, useState} from 'react';
import styles from '../styles/Home.module.css';

import ButtonAppBar from '../components/menu/index'
import Card from '../components/card/index'


export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
      fetch('http://localhost:8000/products')
          .then(res => res.json())
          .then(data => setData(data))
  }, [])
  
  return (
    <div>
      <ButtonAppBar />

      <div className={styles.container}>

      {data.map((item) => (
        <Card props={item} key={item.id} />

      ))}

      </div>
    </div>
  )
}