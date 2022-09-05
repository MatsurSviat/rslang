import { baseContainerRender } from "./buttonsNav/baseContainer";
import { bookContainerRender } from "./buttonsNav/bookButton";
import { authorizationContainerRender } from "./buttonsNav/authorizationButton";
import { audioCallContainer } from "./buttonsNav/audioCallButton";
import { sprintContainer } from "./buttonsNav/sprintBottn";
import { statisticContainer } from "./buttonsNav/statisticsButton";

export async function start() {
  await baseContainerRender();
  await bookContainerRender();
  await statisticContainer();
  await authorizationContainerRender();
  await sprintContainer();
  await audioCallContainer();
}
