import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { Container } from "@/components/container";

const HomePage = async () => {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-8">Articles</h1>
    </Container>
  );
};

export default HomePage;
