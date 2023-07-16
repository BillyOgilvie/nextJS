import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Sturminster Newton",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Sturminster_Newton_Mill_-_geograph.org.uk_-_1297822.jpg",
    address: "Sturminster Newton, Dorset, England",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "Hull",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Hull_City_Hall_Apr23.jpg/1280px-Hull_City_Hall_Apr23.jpg",
    address: "Hull, East Yorkshire, England",
    description: "This is a second meetup!",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
