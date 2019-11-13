import React from "react";
import Collection from "../Collection-item/Collection-item";
import "./collection-preview.scss";
const CollectionPreview = props => {
  const { items, title } = props;
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <Collection key={id} {...otherProps}></Collection>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
