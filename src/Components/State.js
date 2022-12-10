import { useState } from "react"

const State = () => {

    const [open, setOpen] = useState(false)

    const handlerButton = (e) => {
        e.preventDefault()
        if(open === false){
            setOpen(true)
      
        } else {
            setOpen(false)
        }
        
    }

  return (
    <div>
        
        <h1>La puerta esta: {open ? 'abierta' : 'cerrada'}</h1>
        <button onClick={handlerButton}> {!open ? 'abrir' : 'cerrar'}</button>
    </div>
  )
}

export default State