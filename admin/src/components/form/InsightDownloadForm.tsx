import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { TInsightDownload } from "@/types/api";
import InputLabel from "../shared/InputLabel";

type InsightDownloadProps = {
  isOpen: boolean;
  onClose: () => void;
  insightDownload?: TInsightDownload | null;
};
export default function InsightDownloadForm({
  isOpen,
  onClose,
  insightDownload,
}: InsightDownloadProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Insight downloads</DialogTitle>
          <DialogDescription>
            Make changes to your Insight downloads form. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <InputLabel
            label="Date Time"
            value={
              insightDownload?.createdAt
                ? new Date(insightDownload?.createdAt).toLocaleString()
                : "-"
            }
            readOnly
          />

          <InputLabel
            label="Insight title"
            value={insightDownload?.insight?.title}
            readOnly
          />

          <InputLabel
            label="First name"
            value={insightDownload?.firstName}
            readOnly
          />

          <InputLabel
            label="Last name"
            value={insightDownload?.lastName}
            readOnly
          />

          <InputLabel label="Email" value={insightDownload?.email} readOnly />

          <InputLabel label="Phone" value={insightDownload?.phone} readOnly />
        </div>
      </DialogContent>
    </Dialog>
  );
}
