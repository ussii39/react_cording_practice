import { db } from "../config/firebase";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  QuerySnapshot,
  DocumentData,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";

const englishWordsCollection = collection(db, "englishWords");

interface EnglishWord {
  id: number;
  word: string;
  is_correct: number;
  part_of_speech: string;
  meaning_jp: string;
}

export const getEnglishWords = async (): Promise<
  QuerySnapshot<DocumentData>
> => {
  return await getDocs(englishWordsCollection);
};

export const getEnglishWordByPage = async (
  page: number
): Promise<EnglishWord[]> => {
  const pageSize = 4;
  const offset = (page - 1) * pageSize;
  let q = query(englishWordsCollection, orderBy("word"));

  if (page > 1) {
    const lastWordSnapshot = await getDocs(query(q, limit(offset)));
    const lastWord = lastWordSnapshot.docs[lastWordSnapshot.docs.length - 1];
    q = query(q, startAfter(lastWord), limit(pageSize));
  } else {
    q = query(q, limit(pageSize));
  }

  const querySnapshot = await getDocs(q);
  const words: EnglishWord[] = [];
  querySnapshot.forEach((doc) => {
    words.push(doc.data() as EnglishWord);
  });

  // シャッフルロジックを追加
  const shuffledWords = shuffleArray(words);

  return shuffledWords;
};

// シャッフル関数
function shuffleArray(array: EnglishWord[]): EnglishWord[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
export const getEnglishWordById = async (
  id: string
): Promise<DocumentData | undefined> => {
  const englishWordDoc = await getDoc(doc(db, "englishWords", id));
  if (englishWordDoc.exists()) {
    return englishWordDoc.data();
  } else {
    return undefined;
  }
};

export const createEnglishWord = async (
  data: DocumentData
): Promise<DocumentData> => {
  const newEnglishWordRef = await addDoc(englishWordsCollection, data);
  return (await getDoc(newEnglishWordRef)).data() as DocumentData;
};

export const updateEnglishWord = async (
  id: string,
  data: DocumentData
): Promise<void> => {
  const englishWordRef = doc(db, "englishWords", id);
  await updateDoc(englishWordRef, data);
};

export const deleteEnglishWord = async (id: string): Promise<void> => {
  const englishWordRef = doc(db, "englishWords", id);
  await deleteDoc(englishWordRef);
};
