import { useRouter } from "next/router";

export interface UseMeetupItem {
  showDetailsClickHandler: (id: string) => void;
}

export const useMeetupItem = (): UseMeetupItem => {
  const router = useRouter();

  const showDetailsClickHandler = (id: string) => {
    router.push(`/${id}`);
  };

  return {
    showDetailsClickHandler,
  };
};
