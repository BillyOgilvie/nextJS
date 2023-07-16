import classes from './Card.module.css';
import React from "react";

interface Props {
    children: React.ReactNode
}

const Card = (props: Props) => {
  const {children} = props;
  return <div className={classes.card}>{children}</div>;
}

export default Card;
