import { useEffect } from "react"

const Contador = (props) => {
    
    const {count, setCount} = props
    useEffect(() => {
        let intervalo = setInterval(() => {
            setCount(count + 1)
        }, 1000)
        return () => {
            clearInterval(intervalo)
        }
    })
console.log(count)
  return (
    <div>
        <h1> Contandor </h1>
        <h3> Estamos en el numero: {count}</h3>
    </div>
  )
}

export default Contador;