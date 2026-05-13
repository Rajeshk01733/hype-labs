import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { TContactForm } from "@/types/api";
import InputLabel from "../shared/InputLabel";
import TextareaLabel from "../shared/TextAreaLabel";

type ContactFormProps = {
  isOpen: boolean;
  onClose: () => void;
  contactForm?: TContactForm | null;
};
export default function ContactForm({
  isOpen,
  onClose,
  contactForm,
}: ContactFormProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Contact form</DialogTitle>
          <DialogDescription>
            Make changes to your enquire form. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <InputLabel
            label="Date Time"
            value={
              contactForm?.createdAt
                ? new Date(contactForm?.createdAt).toLocaleString()
                : "-"
            }
            readOnly
          />

          <InputLabel
            label="First name"
            value={contactForm?.firstName}
            readOnly
          />

          <InputLabel
            label="Last name"
            value={contactForm?.lastName}
            readOnly
          />

          <InputLabel label="Work email" value={contactForm?.email} readOnly />

          <InputLabel label="Phone" value={contactForm?.phone} readOnly />

          <InputLabel
            label="Company name"
            value={contactForm?.companyName}
            readOnly
          />

          <InputLabel
            label="Website Address"
            value={contactForm?.websiteAddress}
            readOnly
          />

          <TextareaLabel
            label="Services"
            value={contactForm?.services?.toString()}
            readOnly
          />

          <TextareaLabel
            label="Message"
            value={contactForm?.message}
            readOnly
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
