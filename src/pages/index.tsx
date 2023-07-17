import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList/MeetupList";
import { Meetup } from "@/components/meetups/model";
import { mongoDb } from "../../envConstants";

interface Props {
  meetups: Meetup[];
}

const HomePage = (props: Props) => {
  const { meetups } = props;
  return <MeetupList meetups={meetups} />;
};

// this runs during the build process and returns the props to the component
// this is faster if you page data does not change ALL THE TIME. Props can be stored in a CDN
export async function getStaticProps() {
  const client = await MongoClient.connect(mongoDb);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  await client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      })),
    },
    revalidate: 10,
  };
}

// this does not run during the build process, it runs on the server and returns the props to the component on each request
// export async function getServerSideProps(context: any) {
//   // fetch data from an API
//   const { req, res } = context;
//
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
