import {Routes, Route } from 'react-router-dom'
import { Form } from '../Components/Form/Form'
import { useState } from 'react'

const AppRoutes = () => {

   const [id, setId] = useState(null)
   console.log(id)

  return (
    <>
        <Routes>
            <Route path='register' element={<Form setId={setId}/>} />
        </Routes>
    </>
  )
}

export default AppRoutes