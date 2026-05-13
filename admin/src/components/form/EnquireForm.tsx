import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { TEnquireForm } from "@/types/api";
import InputLabel from "../shared/InputLabel";

type EnquireFormProps = {
  isOpen: boolean;
  onClose: () => void;
  enquireForm?: TEnquireForm | null;
};
export default function EnquireForm({
  isOpen,
  onClose,
  enquireForm,
}: EnquireFormProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Enquire form</DialogTitle>
          <DialogDescription>
            Make changes to your enquire form. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <InputLabel
            label="Date Time"
            value={
              enquireForm?.createdAt
                ? new Date(enquireForm?.createdAt).toLocaleString()
                : "-"
            }
            readOnly
          />

          <InputLabel
            label="First name"
            value={enquireForm?.firstName}
            readOnly
          />

          <InputLabel
            label="Last name"
            value={enquireForm?.lastName}
            readOnly
          />

          <InputLabel
            label="Work email"
            value={enquireForm?.workEmail}
            readOnly
          />

          <InputLabel
            label="Phone number"
            value={enquireForm?.phoneNumber}
            readOnly
          />

          <InputLabel
            label="Company name"
            value={enquireForm?.companyName}
            readOnly
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
