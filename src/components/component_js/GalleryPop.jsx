import React from 'react';

export const GalleryPop = () => {

  const images = [
    { name: "Imagen 1",
      url: "src/img/Bajo Peso.png" },
    { name: "Imagen 2",
      url: "src/img/Bajo Peso.png" },
    { name: "Imagen 3",
      url: "src/img/Bajo Peso.png" },
    { name: "Imagen 4",
    url: "src/img/Bajo Peso.png" },
    { name: "Imagen 5",
    url: "src/img/Bajo Peso.png" },
    { name: "Imagen 6",
    url: "src/img/Bajo Peso.png" },

  ];

  return (
    <div>
      <h2 className='main-title'>Galería de Imágenes</h2>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-card">
            <img src={image.url} alt={image.name} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



