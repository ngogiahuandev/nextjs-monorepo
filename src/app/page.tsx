"use client";

import { useUsersQuery } from "../graphql/generated/graphql";

export default function Home() {
  const { data } = useUsersQuery();
  console.log(data);
  return <div>Hello world</div>;
}
