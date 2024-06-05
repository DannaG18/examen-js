import React, { useState } from 'react'

export const CalculoIMC = () => {

    const calculate = () => {

        const [peso, setpeso] = useState("")
        const [altura, setaltura] = useState("")
        const [photo, setphoto] = useState("")
        const [calculo, setcalculo] = useState("")

        const [calculateImc, setcalculateImc] = useState(null)
 
        const imc = peso/altura*altura
 
        switch(calculateImc){
         case 1:
            imc < 18.5
            return "Bajo Peso"
        case 2:
            imc >= 18.5 && imc <=24.9
            return "Normal"
        case 3:
            imc >= 25 && imc <=29.9
            return "Sobre Peso"
        case 4:
            imc > 30
            return "Obesidad"
        }
 
 
     }
     console.log(calculate)

  return (
    <>
    <div className='imc-container'>
    <div className='title-weight' >CDM Exercise</div>
    <p>Ingrese su peso</p>
    <input  onChange={() => calculate()}></input>
    <div></div>
    <p>Ingrese su altura</p>
    <input ></input>
    </div>
    </>
  )
}
