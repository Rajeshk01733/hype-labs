import PageHeading from "@/layout/PageHeading";
import { useBrochure, useUpdateBrochure } from "@/hooks/useBrochure";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { postUploadFtp } from "@/api/uploadftp";
import { LoaderCircle } from "lucide-react";

export default function Brochure() {
  const { mutate, isPending } = useUpdateBrochure();
  const { data, isLoading } = useBrochure();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const res = await postUploadFtp(file);
    mutate({
      filePath: "/uploads" + res?.remotePath,
      id: data?.data?._id,
    });
  };

  return (
    <>
      <PageHeading title="Brochure" description="Manage careers opening" />

      {isLoading ? (
        <div>Loading...</div>
      ) : data?.data?.filePath ? (
        <div className="flex flex-col gap-4">
          <a
            href={`${import.meta.env.VITE_API_BASE_URL}${data?.data?.filePath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit"
          >
            <Button variant="outline">📄 View Brochure</Button>
          </a>

          <label className="flex items-center gap-2">
            <Input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-fit"
              disabled={isPending}
            />
            {isPending && (
              <div className="animate-spin">
                <LoaderCircle />
              </div>
            )}
          </label>
        </div>
      ) : (
        <div>No brochure found.</div>
      )}
    </>
  );
}
