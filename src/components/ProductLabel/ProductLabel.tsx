import './ProductLabel.scss';
import React from 'react';

interface ProductLabelProps {
  labelText?: string;
}

export const ProductLabel = (props: ProductLabelProps) => {
  return props.labelText ? <div className="product-label">{props.labelText}</div> : <></>;
  /*
  if (props.labelText != null) {
    return <div className="product-label">{props.labelText}</div>;
  } else return <></>;
  */
};
