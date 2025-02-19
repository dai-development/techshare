import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="mt-24 mb-16 flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
