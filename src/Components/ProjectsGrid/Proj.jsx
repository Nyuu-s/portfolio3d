import React from 'react'
import { useParams } from 'react-router-dom'
import {Projects} from '../../data/project.js'

function Proj() {
    let { id } = useParams()
  return (
    <>
        {Projects[id]}
    </>
  )
}

export default Proj