import { Container } from "@/components/container";
import { UserButton } from "@/features/auth/components/user-button";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white z-10 border-b border-neutral-200 mb-16">
      <Container className="h-16 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Tech<span className="text-blue-600">Share</span>
        </h1>
        <nav className="flex items-center gap-4">
          <UserButton />
        </nav>
      </Container>
    </header>
  );
};
