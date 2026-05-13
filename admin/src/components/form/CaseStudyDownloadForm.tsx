import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { TCaseStudyDownload } from "@/types/api";
import InputLabel from "../shared/InputLabel";

type CaseStudyDownloadProps = {
  isOpen: boolean;
  onClose: () => void;
  caseStudyDownload?: TCaseStudyDownload | null;
};
export default function CaseStudyDownloadForm({
  isOpen,
  onClose,
  caseStudyDownload,
}: CaseStudyDownloadProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>CaseStudy downloads</DialogTitle>
          <DialogDescription>
            Make changes to your CaseStudy downloads form. Click save when
            you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <InputLabel
            label="Date Time"
            value={
              caseStudyDownload?.createdAt
                ? new Date(caseStudyDownload?.createdAt).toLocaleString()
                : "-"
            }
            readOnly
          />

          <InputLabel
            label="Case study title"
            value={caseStudyDownload?.caseStudy?.title}
            readOnly
          />

          <InputLabel
            label="First name"
            value={caseStudyDownload?.firstName}
            readOnly
          />

          <InputLabel
            label="Last name"
            value={caseStudyDownload?.lastName}
            readOnly
          />

          <InputLabel label="Email" value={caseStudyDownload?.email} readOnly />

          <InputLabel label="Phone" value={caseStudyDownload?.phone} readOnly />
        </div>
      </DialogContent>
    </Dialog>
  );
}
