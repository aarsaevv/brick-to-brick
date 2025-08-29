import { ENDPOINTS } from '@/code/api/endpoints.js';

export default function useProfile() {
  const fetchProfileData = async () => {
    try {
      const res = await fetch(ENDPOINTS.PROFILE);

      return await res.json();
    } catch (e) {
      console.error(e);
    }
  };

  return { fetchProfileData };
}
