import { ENDPOINTS } from '@/code/api/endpoints.js';

export default function useDocuments() {
  const fetchDocuments = async () => {
    return new Promise((resolve) => {
      window.setTimeout(async () => {
        const res = await fetch(ENDPOINTS.DOCUMENTS);

        resolve(res.json());
      }, 500);
    });
  };

  return { fetchDocuments };
}
