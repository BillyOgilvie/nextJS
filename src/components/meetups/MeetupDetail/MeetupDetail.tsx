import React from "react";
import classes from "./MeetupDetail.module.css";

interface Props {
  image: string;
  title: string;
  address: string;
  description: string;
}

const MeetupDetail = (props: Props): React.ReactElement => {
  const { image, title, address, description } = props;

  return (
    <div className={classes.detailsContainer}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <address>{address}</address>
    </div>
  );
};

export default MeetupDetail;
