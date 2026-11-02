import EditStudioModal from "@/components/Studios/EditStudioModal";


export default async function EditStudioPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log("Studio ID from URL:", id);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studio/${id}`);

  if (!res.ok) {
    return <p className="py-20 text-center">Studio not found.</p>;
  }

  const studio = await res.json();

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      
      <EditStudioModal studio={studio} />
    </div>
  );
}