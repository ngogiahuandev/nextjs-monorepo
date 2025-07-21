"use client";

import ErrorPage from "@/components/layout/error-page";

export default function Error() {
  return <ErrorPage code={500} message="Something went wrong" />;
}
