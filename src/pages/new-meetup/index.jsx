import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useNewMeetup } from "./useNewMeetup";

const NewMeetupPage = () => {
  const { addMeetupHandler } = useNewMeetup();

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
