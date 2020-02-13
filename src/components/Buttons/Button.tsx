import React from 'react';

interface Props {
  className?: string;
  style?: Object;
  icon?: string;
  onClick: () => void;
  text: string;
}

const Button = ({ className, style, icon, onClick, text }: Props) => {
  //   if (icon !== '') {
  //     return (
  //       <button
  //         type="button"
  //         className={className}
  //         style={style}
  //         onClick={onClick}
  //       >
  //         <img src={`assets/img/${icon}.svg`} alt="pageIcon" />
  //         {text}
  //       </button>
  //     );
  //   }

  return (
    <button type="button" className={className} style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
