import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArticleDetail } from "@/features/articles/components/article-detail";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const ArticlePage = () => {
  return (
    <Container>
      <Link href="/home">
        <Button variant="outline">
          <ArrowLeftIcon className="w-4 h-4" />
          Back
        </Button>
      </Link>
      <ArticleDetail />
    </Container>
  );
};

export default ArticlePage;
