import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getItems } from '../../async-mocks';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems(categoryId).then((data) => {
      setItems(data);
    });
  }, [categoryId]);

  return (
    <div>
      <h2>Items {categoryId ? `in ${categoryId}` : ''}</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;