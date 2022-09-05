import { Word } from "../types/index";

async function req(group: string): Promise<Word[]> {
  const res: Response = await fetch(
    `https://react-learnwords-184.herokuapp.com/words?group=${group}`
  );
  const result: Promise<Word[]> = res.json();
  return result;
}

async function wordsForGame(group: number, page: number): Promise<Word[]> {
  const res: Response = await fetch(
    `https://react-learnwords-184.herokuapp.com/words?group=${group}&page=${page}`
  );
  const result: Promise<Word[]> = res.json();
  return result;
}

function getFile(name: string) {
  return `https://react-learnwords-184.herokuapp.com/${name}`;
}

export { req, wordsForGame, getFile };
