import AllStudiosPage from "@/components/AllStudiosPage";

type Props = {
  params: Promise<{ category: string }>;
};

export default async function Page({ params }: Props) {
  const { category } = await params;

  return <AllStudiosPage category={category} />;
}