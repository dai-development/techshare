"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import { Edit, PlayIcon, Smile } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import EmojiPicker from "emoji-picker-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Form, FormField } from "@/components/ui/form";

import { useUpdateArticle } from "@/features/articles/api/use-update-article";
import { Article } from "@/features/articles/types";
import { updateArticleSchema } from "@/features/articles/schemas";
import { usePublishArticle } from "@/features/articles/api/use-publish-article";
import { useUnpublishArticle } from "@/features/articles/api/use-unpublish-article";
import { useDeleteArticleModal } from "../hooks/use-delete-article-modal";

interface EditArticleFormProps {
  article: Article;
}

export const EditArticleForm = ({ article }: EditArticleFormProps) => {
  const router = useRouter();
  const [isPreview, setIsPreview] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { mutate: updateArticle, isPending: isUpdatingArticle } =
    useUpdateArticle();
  const { mutate: publishArticle, isPending: isPublishingArticle } =
    usePublishArticle();
  const { mutate: unpublishArticle, isPending: isUnpublishingArticle } =
    useUnpublishArticle();
  const { open: openDeleteArticleModal } = useDeleteArticleModal();

  const form = useForm<z.infer<typeof updateArticleSchema>>({
    resolver: zodResolver(updateArticleSchema),
    defaultValues: {
      title: article.title ?? "",
      content: article.content ?? "",
      icon: article.icon ?? "",
    },
  });

  const onSubmit = (values: z.infer<typeof updateArticleSchema>) => {
    updateArticle(
      { json: values, param: { article_id: article.id } },
      {
        onSuccess: () => {},
      }
    );
  };

  const onEmojiClick = (emojiData: any) => {
    form.setValue("icon", emojiData.emoji);
    setShowEmojiPicker(false);
  };

  const handlePublishArticle = () => {
    publishArticle({ param: { article_id: article.id } });
  };

  const handleUnpublishArticle = () => {
    unpublishArticle({ param: { article_id: article.id } });
  };

  return (
    <>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex items-center gap-2">
              <FormField
                control={form.control}
                name="icon"
                render={({ field }) => (
                  <div className="relative">
                    <Button
                      variant="outline"
                      size="icon"
                      type="button"
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    >
                      {field.value ? (
                        <span className="text-xl">{field.value}</span>
                      ) : (
                        <Smile className="h-4 w-4" />
                      )}
                    </Button>
                    {showEmojiPicker && (
                      <div className="absolute z-50 top-full left-0 mt-2">
                        <EmojiPicker onEmojiClick={onEmojiClick} />
                      </div>
                    )}
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <Input
                    placeholder="Title"
                    className="border-none shadow-none md:text-2xl font-semibold"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="flex-1 gap-12 flex">
              {isPreview ? (
                <div className="border rounded-md p-8 pb-40 min-h-[500px] overflow-auto prose prose-sm md:prose-base lg:prose-lg dark:prose-invert w-full max-w-none prose-pre:bg-dark-800 prose-pre:border prose-pre:border-border">
                  <ReactMarkdown>{form.getValues("content")}</ReactMarkdown>
                </div>
              ) : (
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <Textarea
                      placeholder="Write in markdown..."
                      className="min-h-[500px] overflow-auto p-8 pb-40"
                      {...field}
                    />
                  )}
                />
              )}
              <div className="flex flex-col gap-2 w-[200px]">
                {!article.publishedAt ? (
                  <p className="text-sm text-muted-foreground bg-yellow-200 rounded-md p-2 mb-2">
                    この記事は非公開です
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground bg-green-200 rounded-md p-2 mb-2">
                    この記事は公開済です
                  </p>
                )}
                <div className="flex gap-2 mb-2">
                  <Button
                    variant={isPreview ? "outline" : "default"}
                    onClick={() => setIsPreview(false)}
                    className="rounded-full"
                    size="icon"
                    type="button"
                  >
                    <Edit className="rounded-full" />
                  </Button>
                  <Button
                    variant={isPreview ? "default" : "outline"}
                    onClick={() => setIsPreview(true)}
                    className="rounded-full"
                    size="icon"
                    type="button"
                  >
                    <PlayIcon className="rounded-full" />
                  </Button>
                </div>
                <Button type="submit">Save</Button>
                <Separator className="my-2" />
                <div className="space-y-4">
                  {!article.publishedAt ? (
                    <Button
                      type="button"
                      className="w-full"
                      onClick={handlePublishArticle}
                      disabled={isPublishingArticle}
                    >
                      Publish
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      className="w-full"
                      onClick={handleUnpublishArticle}
                      disabled={isUnpublishingArticle}
                    >
                      Unpublish
                    </Button>
                  )}
                  <Button
                    variant="destructive"
                    type="button"
                    className="w-full"
                    onClick={openDeleteArticleModal}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};
