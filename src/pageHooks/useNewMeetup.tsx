import { useRouter } from "next/router";

interface UseNewMeetup {
  addMeetupHandler: (meetupData: any) => void;
}

export const useNewMeetup = (): UseNewMeetup => {
  const router = useRouter();

  const addMeetupHandler = async (meetupData: any) => {
    console.log(
      `>>> debugLogging: file: useNewMeetup.tsx - line: 7: meetupData: `,
      meetupData
    );

    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();
    console.log(
      `>>> debugLogging: file: useNewMeetup.tsx - line: 17: data: `,
      data
    );

    await router.replace("/");
  };

  return {
    addMeetupHandler,
  };
};
