import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../async-mocks'; 

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(id).then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div>
      {item ? (
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;