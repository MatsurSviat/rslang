import { baseContainerRender } from "./buttonsNav/baseContainer";
import { bookContainerRender } from "./buttonsNav/bookButton";
import { authorizationContainerRender } from "./buttonsNav/registerButton";
import { savannahContainer } from "./buttonsNav/savannahButton";
import { sprintContainer } from "./buttonsNav/sprintBottn";
import { statisticContainer } from "./buttonsNav/statisticsButton";

export async function start() {
  await baseContainerRender();
  await bookContainerRender();
  await statisticContainer();
  await savannahContainer();
  await authorizationContainerRender();
  await sprintContainer()
}
