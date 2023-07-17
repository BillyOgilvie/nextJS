import NewMeetupForm from "../../components/meetups/NewMeetupForm/NewMeetupForm";
import { useNewMeetup } from "../../pageHooks/useNewMeetup";
import Head from "next/head";

const NewMeetupPage = () => {
  const { addMeetupHandler } = useNewMeetup();

  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta
          name={"description"}
          content={
            "Add your own meetups and create amazing networking opportunities."
          }
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
