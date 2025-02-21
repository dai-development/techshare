export type Article = {
  id: string;
  title: string | null;
  content: string | null;
  icon: string | null;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};
