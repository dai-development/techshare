"use client";

import { FaGoogle } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { login } from "@/features/auth/actions";

export const LoginForm = () => {
  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Tech<span className="text-blue-600">Share</span>
        </CardTitle>
        <CardDescription>
          TechShareはエンジニアのための技術記事共有プラットフォームです。
        </CardDescription>
      </CardHeader>
      <div className="px-4">
        <Separator className="mb-4" />
      </div>
      <CardContent>
        <Button variant="outline" className="w-full" onClick={() => login()}>
          <FaGoogle className="mr-2" />
          Googleアカウントでログイン
        </Button>
      </CardContent>
    </Card>
  );
};
