import './ProductLabel.scss';
import React from 'react';

interface ProductLabelProps {
  labelText?: string;
}

export const ProductLabel = (props: ProductLabelProps) => {
  if (props.labelText != null) {
    return <div className="product-label">{props.labelText}</div>;
  } else return <></>;
};
