import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TokenStore {
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;

  refreshToken: string | null;
  setRefreshToken: (refreshToken: string) => void;

  clearTokens: () => void;
}

export const useTokenStore = create(
  persist<TokenStore>(
    (set) => ({
      accessToken: null,
      setAccessToken: (accessToken) => set({ accessToken }),

      refreshToken: null,
      setRefreshToken: (refreshToken) => set({ refreshToken }),

      clearTokens: () => set({ accessToken: null, refreshToken: null }),
    }),
    {
      name: "token-storage",
    }
  )
);
