import React from 'react';
import Button from './Button';

interface Props {
  onClick: () => void;
  buttonText: string;
  text: string;
}

const ActionButton = ({ onClick, buttonText, text }: Props) => {
  return (
    <div className="actionButton">
      <div>{text}</div>
      <Button onClick={onClick} text={buttonText} />
    </div>
  );
};

export default ActionButton;
