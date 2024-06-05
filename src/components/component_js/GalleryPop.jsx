import { useState } from "react"
export const GalleryPop = ({data}) => {

    const [photosItems, setphotosItems] = useState(null)

    const selectImage = ( ) =>{

        switch(photosItems){
            case 1:
                photo = "img/Ahri.png",
                nombre= 'Ashe',
                apellido= 'League of Legends'
                return
            case 2:
                photo= "img/Ashe.png",
                nombre= 'Ashe',
                apellido= 'League of Legends'
                return
            case 3:
                photo= "img/Ashe.png",
                nombre= 'Ashe',
                apellido= 'League of Legends'
                return
            case 4:
                photo= "img/Ashe.png",
                nombre= 'Ashe',
                apellido= 'League of Legends'
                return
            case 5:
                photo= "img/Ashe.png",
                nombre= 'Ashe',
                apellido= 'League of Legends'
                return
            case 6:
                photo= "img/Ashe.png",
                nombre= 'Ashe',
                apellido= 'League of Legends'
                return
            case 7:
                photo= "img/Ashe.png",
                nombre= 'Ashe',
                apellido= 'League of Legends'
                return
            case 8:
                photo= "img/Ashe.png",
                nombre= 'Ashe',
                apellido= 'League of Legends'
                return
        }
    }
    selectImage(data)

  return (
    <>
        <div className="card-component">
        <div className="image_container"  onClick={() => setphotosItems(1)}>
            HI
        </div>
        </div>
    </>
  )
}
