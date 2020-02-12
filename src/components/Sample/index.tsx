import React from "react";

interface Props {
  message: string;
}

const Sample = ({ message }: Props) => <div>{message}</div>;
export default Sample;
