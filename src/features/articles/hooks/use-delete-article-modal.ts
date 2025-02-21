import { create } from "zustand";

type DeleteArticleModalStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  setIsOpen: (open: boolean) => void;
};

export const useDeleteArticleModal = create<DeleteArticleModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setIsOpen: (open) => set({ isOpen: open }),
}));
