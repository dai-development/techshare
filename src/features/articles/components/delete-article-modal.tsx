"use client";

import { Modal } from "@/components/modal";

import { useDeleteArticleModal } from "../hooks/use-delete-article-modal";
import { DeleteArticleCard } from "./delete-article-card";

export const DeleteArticleModal = () => {
  const { isOpen, setIsOpen } = useDeleteArticleModal();

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen} size="sm">
      <DeleteArticleCard />
    </Modal>
  );
};
