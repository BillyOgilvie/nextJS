import MeetupItem, {Meetup} from './MeetupItem';
import classes from './MeetupList.module.css';
import React from "react";

type Props = {
  meetups: Meetup[]
}

const MeetupList = (props: Props): React.ReactElement => {
  const { meetups } = props;
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
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
}

export default MeetupList;
