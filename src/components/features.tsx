import { Container } from "@/components/container";

const features = [
  {
    title: "簡単な記事作成",
    description:
      "Markdownで直感的に記事を作成できます。コードブロックのシンタックスハイライトにも対応。",
    icon: "📝",
  },
  {
    title: "タグ管理",
    description:
      "記事にタグを付けて整理。関連する技術記事を簡単に見つけることができます。",
    icon: "🏷️",
  },
  {
    title: "コミュニティ",
    description:
      "記事へのコメントやいいねを通じて、エンジニア同士でコミュニケーションが取れます。",
    icon: "💬",
  },
];

export const Features = () => {
  return (
    <div className="py-32 bg-neutral-50" id="features">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-neutral-900">主な機能</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white overflow-hidden shadow rounded-lg grid-cols-1 p-6"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-neutral-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
