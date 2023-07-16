interface UseNewMeetup {
  addMeetupHandler: (meetupData: any) => void;
}

export const useNewMeetup = (): UseNewMeetup => {
  const addMeetupHandler = (meetupData: any) => {
    console.log(meetupData);
  };

  return {
    addMeetupHandler,
  };
};
