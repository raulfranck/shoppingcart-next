import React, {useEffect, useState} from 'react';
import styles from '../styles/Home.module.css';

import ButtonAppBar from '../components/menu/index'
import Card from '../components/card/index'

import { CssBaseline, makeStyles } from '@material-ui/core';
/* const useStyles = makeStyle({
}) */

export default function Home() {
  const [data, setData] = useState([])
  const [badgeCount, setBadgeCount] = useState(0)

  useEffect(() => {
      fetch('http://localhost:8000/products')
          .then(res => res.json())
          .then(data => setData(data))
  }, [])

  function handleBadgeCount() {
    setBadgeCount(badgeCount + 1)
  }


  console.log(badgeCount)
  
  return (
    <div>
      <CssBaseline />
      <ButtonAppBar badgeCount={badgeCount}/>

      <div className={styles.container}>
        {data.map((item) => (
          <Card item={item} badgeCount={badgeCount} setBadgeCount={setBadgeCount} key={item.id}>
            
          </Card>
        ))}
      </div>
    </div>
  )
}

