import { Grid } from '@material-ui/core'
import React from 'react'
import CardModule from '../../components/CardModule'
import Layout from '../../components/Layout'
import { useStyles } from './styles'
import imgCutVideo from '../../images/imgCutVideo.png'
import imgShowCutedVideo from '../../images/imgShowCutedVideo.png'
import { useLocation } from "wouter";

interface IHomeProps {
  path?: string
}

const Home: React.FC<IHomeProps> = () => {
  const classes = useStyles()
  const [location, setLocation] = useLocation()

  const handleClickGoToCutVideo = () => {
    setLocation("/new") 
  }

  const handleClickGoToShowCutedVideo = () => {
    setLocation("/list") 
  }

  return (
    <Layout title="HT-Challenge - Home">
      <Grid md={10} className={classes.gridHome}>
        <CardModule
          title="Cortar parte de vídeo"
          imgSrc={imgCutVideo}
          onClick={handleClickGoToCutVideo}
        />
        <CardModule
          title="Visualizar parte de vídeo"
          imgSrc={imgShowCutedVideo}
          onClick={handleClickGoToShowCutedVideo}
        />
      </Grid>
    </Layout>
  )
}

export default Home
