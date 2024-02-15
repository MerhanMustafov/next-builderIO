"use server";

import { getNavDataGQL, getDataBuilderFetch } from "./api";
import NavClient from "./NavClient";

export default async function NavServer() {
  const [nlt, nl1, nl2] = await getDataBuilderFetch();

  // const { navLevelTop: nlt, navLevel1: nl1 } = data;

  // return <></>;
  return <NavClient nlt={nlt} nl1={nl1} nl2={nl2} />;
}
