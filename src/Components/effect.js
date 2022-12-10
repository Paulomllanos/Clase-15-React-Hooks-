import { useEffect } from "react";


const Effect = () => {

 function mensaje1(){
    console.log('1) Mensaje desde dentro del componente')
 } 

 mensaje1()


 useEffect(() => {
    console.log('2) Mensaje desde useEffect')
 })


  return (
    <div>
        {console.log('3) Mensaje despues del renderizado del componente')}
    </div>
  )
}

export default Effect;