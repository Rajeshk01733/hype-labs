import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { TBrochureDownload } from "@/types/api";
import InputLabel from "../shared/InputLabel";

type BrochureDownloadProps = {
  isOpen: boolean;
  onClose: () => void;
  brochureDownload?: TBrochureDownload | null;
};
export default function BrochureDownloadForm({
  isOpen,
  onClose,
  brochureDownload,
}: BrochureDownloadProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Brochure downloads</DialogTitle>
          <DialogDescription>
            Make changes to your Brochure downloads form. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <InputLabel
            label="Date Time"
            value={
              brochureDownload?.createdAt
                ? new Date(brochureDownload?.createdAt).toLocaleString()
                : "-"
            }
            readOnly
          />

          <InputLabel
            label="First name"
            value={brochureDownload?.firstName}
            readOnly
          />

          <InputLabel
            label="Last name"
            value={brochureDownload?.lastName}
            readOnly
          />

          <InputLabel label="Email" value={brochureDownload?.email} readOnly />

          <InputLabel label="Phone" value={brochureDownload?.phone} readOnly />
        </div>
      </DialogContent>
    </Dialog>
  );
}
