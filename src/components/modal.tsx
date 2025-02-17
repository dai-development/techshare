import { Dialog, DialogContent } from "@/components/ui/dialog";

import { cn } from "@/lib/utils";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  size?: "sm" | "md";
}

export const Modal = ({
  children,
  open,
  onOpenChange,
  size = "md",
}: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "w-11/12 p-0 border-none overflow-y-auto hide-scrollbar max-h-[85vh] rounded-lg",
          size === "sm" ? "sm:max-w-sm" : "sm:max-w-lg"
        )}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};
