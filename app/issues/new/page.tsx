import delay from "delay";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";
import { Metadata } from "next";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const NewIssuePage = async () => {
  await delay(2000);
  return <IssueForm></IssueForm>;
};

export default NewIssuePage;

export const metadata: Metadata = {
  title: "Issue Tracker - Add New Issue",
  description: "Add a new issue",
};
