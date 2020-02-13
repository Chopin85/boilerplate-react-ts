import React from 'react';
import Button from './Button';

interface Props {
  onClick: () => void;
}

const CloseButton = ({ onClick }: Props) => {
  return <Button onClick={onClick} text="Close" />;
};

export default CloseButton;
