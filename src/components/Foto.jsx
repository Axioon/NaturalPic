import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/ImagesContext';

const Foto = ({ original, alt, photographer, url }) => {
  const [cart, setCart] = useContext(CartContext);
  const [isSelected, setIsSelected] = useState(false);

  console.log(alt)
  console.log(url)

  // Manejar el caso cuando 'original' no está definido
  if (!original) {
    return null;
  }

  const handleToggleSelection = () => {
    setIsSelected((prevSelected) => !prevSelected);
  };

  const addToCart = () => {
    setCart((currItems) => {
      const isPhotoFound = currItems.find((item) => item.id === original.id);

      if (isPhotoFound) {
        return currItems.filter((item) => item.id !== original.id);
      } else {
        return [...currItems, { ...original, selected: isSelected }];
      }
    });
  };

  return (
    <>
      <div>
        <Card style={{ width: '18rem' }}>
          {/* Verificar que 'original.src' esté definido antes de intentar acceder a 'original.src' */}
          {original.src && <Card.Img variant="top" src={original.src} alt={alt} />}
          <Card.Body>
            <Card.Title>{alt}</Card.Title>
            <Card.Text>{photographer}</Card.Text>
            <Card.Text>{url}</Card.Text>
            <Card.Text>Precio: {original.price}</Card.Text>
            <div className="d-flex gap-3">
              <Button variant={isSelected ? 'success' : 'primary'} onClick={handleToggleSelection}>
                {isSelected ? 'Seleccionada' : 'Seleccionar'}
              </Button>
              <Button variant="primary" onClick={addToCart}>
                + Agregar al Carrito
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Foto;