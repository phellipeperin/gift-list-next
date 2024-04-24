import { DocumentData } from 'firebase/firestore';

export interface FirebaseDocumentEntry {
  id: string;
  data: DocumentData | undefined;
}
