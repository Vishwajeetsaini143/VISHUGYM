import React from 'react'
import ExerciseVideo from '../ExerciseVideo/ExerciseVideo'

import Detail from '../Details/Detail'
import SimilarExercises from '../SimilarExercises/SimilarExercises'
import Equipment from '../Equipment/Equipment'

const ExerciesSingle = () => {
  return(
    <div className='exercies-single' style={{background:"#fff"}}>
    <Detail/>
    <ExerciseVideo/>
    <SimilarExercises/>
    <Equipment/>
    </div>
  )
 
}

export default ExerciesSingle