import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-2xl font-bold">
        Tech<span className="text-blue-600">Share</span>
      </h1>
    </Link>
  );
};
