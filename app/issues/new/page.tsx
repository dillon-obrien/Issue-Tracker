import delay from "delay";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const NewIssuePage = async () => {
  await delay(2000);
  return <IssueForm></IssueForm>;
};

export default NewIssuePage;
