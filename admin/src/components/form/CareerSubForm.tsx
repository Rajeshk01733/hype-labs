import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { TCareersSubmission } from "@/types/api";
import InputLabel from "../shared/InputLabel";
import { Button } from "../ui/button";

type CareersSubmissionProps = {
  isOpen: boolean;
  onClose: () => void;
  careerSubForm?: TCareersSubmission | null;
};

export default function CareersSubmissionForm({
  isOpen,
  onClose,
  careerSubForm,
}: CareersSubmissionProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Careers Submission</DialogTitle>
          <DialogDescription>Review the candidate details.</DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          {/* Personal Info */}
          <div className="grid gap-4 sm:grid-cols-2">
            <InputLabel
              label="Date Time"
              value={
                careerSubForm?.createdAt
                  ? new Date(careerSubForm?.createdAt).toLocaleString()
                  : "-"
              }
              readOnly
            />
            <InputLabel
              label="First Name"
              value={careerSubForm?.firstName}
              readOnly
            />
            <InputLabel
              label="Last Name"
              value={careerSubForm?.lastName}
              readOnly
            />
            <InputLabel label="Email" value={careerSubForm?.email} readOnly />
            <InputLabel label="Phone" value={careerSubForm?.phone} readOnly />
            <InputLabel
              label="Preferred Location"
              value={careerSubForm?.preferedLocation}
              readOnly
            />
            <InputLabel
              label="Relocate"
              value={careerSubForm?.reAllocate ? "Yes" : "No"}
              readOnly
            />
          </div>

          {/* Address */}
          <div className="grid gap-4 sm:grid-cols-2">
            <InputLabel
              label="Address Line 1"
              value={careerSubForm?.addressLine1}
              readOnly
            />
            <InputLabel
              label="Address Line 2"
              value={careerSubForm?.addressLine2}
              readOnly
            />
            <InputLabel label="City" value={careerSubForm?.city} readOnly />
            <InputLabel label="State" value={careerSubForm?.state} readOnly />
            <InputLabel
              label="Country"
              value={careerSubForm?.country}
              readOnly
            />
            <InputLabel
              label="Postal Code"
              value={careerSubForm?.postalCode}
              readOnly
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold">Documents</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`${import.meta.env.VITE_API_BASE_URL}/${
                  careerSubForm?.resume
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit"
              >
                <Button variant="outline">📄 View Resume</Button>
              </a>

              <a
                href={`${import.meta.env.VITE_API_BASE_URL}/${
                  careerSubForm?.coverLetter
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit"
              >
                <Button variant="outline">📄 View Cover letter</Button>
              </a>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg font-semibold">Experience</h3>
            {careerSubForm?.experience?.map((exp, i) => (
              <div
                key={i}
                className="mb-3 grid space-y-2 gap-x-5 rounded border p-3 sm:grid-cols-2"
              >
                <InputLabel
                  label="Company Name"
                  value={exp.companyName}
                  readOnly
                />
                <InputLabel label="Job Title" value={exp.jobTitle} readOnly />
                <InputLabel
                  label="Current Employer"
                  value={exp.currentEmployer ? "Yes" : "No"}
                  readOnly
                />
                <InputLabel
                  label="Start Date"
                  value={new Date(exp.startDate).toLocaleDateString()}
                  readOnly
                />
                {exp.endDate && (
                  <InputLabel
                    label="End Date"
                    value={new Date(exp.endDate).toLocaleDateString()}
                    readOnly
                  />
                )}
                <InputLabel label="Country" value={exp.country} readOnly />
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold">Education</h3>
            {careerSubForm?.education?.map((edu, i) => (
              <div
                key={i}
                className="mb-3 grid space-y-2 gap-x-5 rounded border p-3 sm:grid-cols-2"
              >
                <InputLabel
                  label="School Name"
                  value={edu.schoolName}
                  readOnly
                />
                <InputLabel label="Degree" value={edu.degree} readOnly />
                <InputLabel label="Major" value={edu.major} readOnly />
                <InputLabel
                  label="Start Date"
                  value={new Date(edu.startDate).toLocaleDateString()}
                  readOnly
                />
                <InputLabel
                  label="End Date"
                  value={new Date(edu.endDate).toLocaleDateString()}
                  readOnly
                />
                <InputLabel label="Country" value={edu.country} readOnly />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
