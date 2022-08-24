// import { aboutButton } from "./aboutContainer";
// import { audioButton } from "./audioContainer";
import { baseContainer } from "./baseContainer";
import { bookContainer } from "./bookContainer";
// import { elementaryButton } from "./elementaryContainer";
// import { moreButton } from "./moreContainer";
// import { savannahButton } from "./savannahContainer";
// import { sprintButton } from "./sprintContainer";
// import { startButton } from "./startContainer";
// import { statisticsButton } from "./statisticsContainer";
// import { videoButton } from "./videoContainer";
// import { writingButton } from "./writingContainer";

export async function start() {
  await baseContainer();
  await bookContainer();
  // await statisticsButton();
  // await savannahButton();
  // await sprintButton();
  // await audioButton();
  // await writingButton();
  // await moreButton();
  // await startButton();
  // await videoButton();
  // await aboutButton();
  // await elementaryButton();
}
