import { MeetupItem } from "../";
import classes from "./MeetupList.module.css";
import React from "react";
import { Meetup } from "@/components/meetups/model";

type Props = {
  meetups: Meetup[];
};

const MeetupList = (props: Props): React.ReactElement => {
  const { meetups } = props;
  return (
    <ul className={classes.list}>
      {meetups.map((meetup: Omit<Meetup, "description">) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
