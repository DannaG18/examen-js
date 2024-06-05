import React, { useState } from 'react'
import { CalculoIMC } from './components/component_js/CalculoIMC'
import { GalleryPop } from './components/component_js/GalleryPop'


export const Home = () => {

  const [bannerPrincipal, setbannerPrincipal] = useState(null)

  switch (bannerPrincipal){
    
    case 1:
      return <CalculoIMC/>
    case 2:
      return <GalleryPop/>

  }

  return (
    <>
    <div className='main-title'>Examen JS</div>
    <div className='main-options'>
    <div className="calculo-imc-banner" onClick={() => setbannerPrincipal(1)}>Calculo IMC</div>
    <div className="gallery-banner" onClick={() => setbannerPrincipal(2)}>Galley Pop</div>
    </div>
    </>
  )
}
