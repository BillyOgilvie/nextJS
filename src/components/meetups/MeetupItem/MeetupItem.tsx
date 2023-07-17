import Card from "../../ui/Card";
import classes from "./MeetupItem.module.css";
import { Meetup } from "@/components/meetups/model";
import { useMeetupItem } from "@/components/meetups/MeetupItem/useMeetupItem";

function MeetupItem(props: Omit<Meetup, "description">) {
  const { id, image, title, address } = props;

  const { showDetailsClickHandler } = useMeetupItem();

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={() => showDetailsClickHandler(id)}>
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
