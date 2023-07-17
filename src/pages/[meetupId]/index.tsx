import React from "react";
import MeetupDetail from "@/components/meetups/MeetupDetail/MeetupDetail";
import { Meetup } from "@/components/meetups/model";
import { MongoClient, ObjectId } from "mongodb";
import { mongoDb } from "../../../envConstants";

interface Props {
  meetup: Meetup;
}

const MeetupDetails = (props: Props): React.ReactElement => {
  const {
    meetup: { title, address, image, description },
  } = props;

  return (
    <MeetupDetail
      title={title}
      address={address}
      description={description}
      image={image}
    />
  );
};

// you would fetch these from a database. Hardcoded for example purposes
export const getStaticPaths = async () => {
  const client = await MongoClient.connect(mongoDb);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();

  await client.close();

  return {
    // fallback of false means paths has to be complete. If true, it will try to generate the page on the fly, else it will return a 404
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context: any) => {
  // fetch data from an API
  const { meetupId } = context.params;

  const client = await MongoClient.connect(mongoDb);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  console.log(
    `>>> debugLogging: file: index.tsx - line: 61: selectedMeetup`,
    selectedMeetup
  );

  await client.close();

  return {
    props: {
      meetup: {
        id: selectedMeetup?._id.toString(),
        title: selectedMeetup?.title,
        address: selectedMeetup?.address,
        image: selectedMeetup?.image,
        description: selectedMeetup?.description,
      },
    },
  };
};

export default MeetupDetails;
