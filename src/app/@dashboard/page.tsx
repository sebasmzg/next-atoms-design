"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DefaultHomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/vacancies");
  }, [router]);

  return null;
}