import React from 'react'
import ExerciseVideo from '../ExerciseVideo/ExerciseVideo'

import Detail from '../Details/Detail'
import SimilarExercises from '../SimilarExercises/SimilarExercises'
import Equipment from '../Equipment/Equipment'
import Footer from '../Footer/Footer'

const ExerciesSingle = () => {
  return(
    <div className='exercies-single'>
    <Detail/>
    <ExerciseVideo/>
    <SimilarExercises/>
    <Equipment/>
    <Footer/>
    
    </div>
  )
 
}

export default ExerciesSingle