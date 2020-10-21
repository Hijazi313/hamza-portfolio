import React from 'react'
import Particles from "react-particles-js"
import {makeStyles} from "@material-ui/core/styles"
import Header from './Header'

const useStyles = makeStyles({
    particlesCanva:{
      position:"absolute",
      opacity:"0.3"
    }
  })

export default ()=> {
  const classes = useStyles()

    return (
        <>
            <Header/>
            <Particles canvasClassName={classes.particlesCanva} params={
      {particles:{
        number:{
          value:45,
           density:{enable:false, value_area:900}
           },
           shape:{
            type:"circle",
            stroke:{
             width:1,
             color:"tomato"
           }
          },
          size:{
            value:8,
            random: true,
            anim:{
              enable:true,
              speed:10,
              size_min:0.1,
              sync: true
            }
          },
          opacity:{
            value:1,
            random:true,
            anim:{
              enable:false,
              speed:1,
              opacity_min:0.1,
              sync:false
            }
          }
           }
           }} />
        </>
    )
}
