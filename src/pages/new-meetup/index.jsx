import NewMeetupForm from "../../components/meetups/NewMeetupForm/NewMeetupForm";
import { useNewMeetup } from "../../pageHooks/useNewMeetup";

const NewMeetupPage = () => {
  const { addMeetupHandler } = useNewMeetup();

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
