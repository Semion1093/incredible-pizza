import './MobileArrowBackButton.scss';
import { NavigationLinksBackArrowSvg } from '../../assets/NavigationLinksBackArrowSvg';
import React from 'react';

export interface MobileArrowBackButtonProps {
  show: boolean;
}

export const MobileArrowBackButton = (props: MobileArrowBackButtonProps) => {
  return (
    <>
      {props.show && (
        <button className="back-arrow-mobile mobile-only">
          <NavigationLinksBackArrowSvg />
        </button>
      )}
    </>
  );
};
