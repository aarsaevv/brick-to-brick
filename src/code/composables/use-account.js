import { ENDPOINTS } from '@/code/api/endpoints.js';

export default function useAccount() {
  const fetchAccountData = async () => {
    try {
      const res = await fetch(ENDPOINTS.ACCOUNT);

      return await res.json();
    } catch (e) {
      console.error(e);
    }
  };

  return { fetchAccountData };
}
