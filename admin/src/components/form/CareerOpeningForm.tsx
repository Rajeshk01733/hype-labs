import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TCareersOpening } from "@/types/api";
import { useEffect } from "react";
import {
  usePostCareersOpening,
  useUpdateCareersOpening,
} from "@/hooks/useCareersOpening";
import { Checkbox } from "../ui/checkbox";
import TextEditor from "../shared/TextEditor";
import { TagInput } from "../ui/TagInput";
import PublishStatusSelect from "../shared/PublishStatusSelect";
import SaveCancel from "../shared/SaveCancel";
import Services from "../shared/Services";

type CareersOpeningFormProps = {
  isOpen: boolean;
  onClose: () => void;
  careersOpening?: TCareersOpening | null;
};

const hasMeaningfulText = (value: string) =>
  value.replace(/<[^>]*>/g, "").trim().length > 0;

const formSchema = z.object({
  jobId: z.string().min(1, "JobId is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  location: z.string().min(1, "Location is required"),
  department: z.string().min(1, "Department is required"),
  jobType: z
    .enum(["FullTime", "Contract", "Internship"])
    .refine((val) => !!val, {
      message: "Please select a valid job type.",
    }),
  salary: z.string(),
  jobDescription: z
    .string()
    .refine(hasMeaningfulText, { message: "Job description is required" }),
  coreMandate: z.string(),
  keyResponsibilities: z.string().refine(hasMeaningfulText, {
    message: "Key responsibilities is required",
  }),
  qualification: z.string(),
  technicalSkills: z.array(z.string()),
  softSkills: z.array(z.string()),
  whatWeOffer: z.string().min(1, "what we offer is required"),
  whyJoin: z.string().min(1, "Why join is required"),
  compensationPackage: z.string(),
  note: z.string(),
  aboutLr: z.string().min(1, "about lrc is required"),
  requiredFields: z.object({
    documents: z.boolean(),
    personalInfo: z.boolean(),
    workExperience: z.boolean(),
    education: z.boolean(),
    reAllocate: z.boolean(),
  }),
  closed: z.boolean(),
  publish: z.boolean(),
});

type CareersOpeningFormValues = z.infer<typeof formSchema>;

export default function CareersOpeningForm({
  isOpen,
  onClose,
  careersOpening,
}: CareersOpeningFormProps) {
  const form = useForm<CareersOpeningFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobId: "",
      title: "",
      description: "",
      location: "",
      department: "",
      jobType: "FullTime",
      salary: "",
      jobDescription: "",
      coreMandate: "",
      keyResponsibilities: "",
      technicalSkills: [],
      softSkills: [],
      qualification: "",
      whatWeOffer: "",
      whyJoin: "",
      compensationPackage: "",
      note: "",
      aboutLr: "",
      requiredFields: {
        documents: true,
        personalInfo: true,
        workExperience: false,
        education: false,
        reAllocate: false,
      },
      closed: false,
      publish: false,
    },
  });

  const { mutate: post } = usePostCareersOpening();
  const { mutate: update } = useUpdateCareersOpening();

  useEffect(() => {
    if (careersOpening) {
      form.reset({
        ...careersOpening,
        technicalSkills: careersOpening.technicalSkills || [],
        softSkills: careersOpening.softSkills || [],
      });
    } else {
      form.reset({
        jobId: "",
        title: "",
        description: "",
        location: "",
        department: "",
        jobType: "FullTime",
        salary: "",
        jobDescription: "",
        coreMandate: "",
        keyResponsibilities: "",
        technicalSkills: [],
        softSkills: [],
        qualification: "",
        whatWeOffer: "",
        whyJoin: "",
        compensationPackage: "",
        note: "",
        aboutLr: "",
        requiredFields: {
          documents: true,
          personalInfo: true,
          workExperience: false,
          education: false,
          reAllocate: false,
        },
        closed: false,
        publish: false,
      });
    }
  }, [careersOpening, form]);

  const onSubmit = (values: CareersOpeningFormValues) => {
    const formData = {
      ...values,

      technicalSkills: values.technicalSkills.filter((s) => s.length > 0),
      softSkills: values.softSkills.filter((s) => s.length > 0),
    };

    if (careersOpening && careersOpening._id) {
      update(
        { id: careersOpening._id, formData: formData },
        {
          onSuccess: () => {
            onClose();
          },
        },
      );
    } else {
      post(formData, {
        onSuccess: () => {
          onClose();
        },
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Careers Opening</DialogTitle>
          <DialogDescription>
            Make changes to your careers opening. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="jobId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job ID</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., JR1001" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Software Engineer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="A brief overview of the role..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., New York, NY" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Services
              name="department"
              label="Department"
              control={form.control}
            />

            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full border">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="FullTime">Full-Time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Salary</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., $80,000 - $100,000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Provide a detailed job description..."
                      className="resize-none"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Controller
              control={form.control}
              name="coreMandate"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Core Mandate</FormLabel>
                  <FormControl>
                    <TextEditor value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            <Controller
              control={form.control}
              name="keyResponsibilities"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Key Responsibilities</FormLabel>
                  <FormControl>
                    <TextEditor value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="technicalSkills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technical Skills</FormLabel>
                  <FormControl>
                    <TagInput
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Type a skill and press enter"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="softSkills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Soft Skills</FormLabel>
                  <FormControl>
                    <TagInput
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Type a skill and press enter"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Controller
              control={form.control}
              name="qualification"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Qualification</FormLabel>
                  <FormControl>
                    <TextEditor value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            <Controller
              control={form.control}
              name="whatWeOffer"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>What We Offer</FormLabel>
                  <FormControl>
                    <TextEditor value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            <Controller
              control={form.control}
              name="whyJoin"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Why join</FormLabel>
                  <FormControl>
                    <TextEditor value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="aboutLr"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About LR</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Provide information about the company (LR)..."
                      className="resize-none"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Controller
              control={form.control}
              name="compensationPackage"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Compensation Package</FormLabel>
                  <FormControl>
                    <TextEditor value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            <Controller
              control={form.control}
              name="note"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Note</FormLabel>
                  <FormControl>
                    <TextEditor value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            <div className="space-y-3 pt-4">
              <h3 className="text-lg font-medium">
                Required Application Fields
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Documents Checkbox */}
                <FormField
                  control={form.control}
                  name="requiredFields.documents"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Documents</FormLabel>
                        <FormDescription>
                          Require applicants to upload documents.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Personal Info Checkbox */}
                <FormField
                  control={form.control}
                  name="requiredFields.personalInfo"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Personal Information</FormLabel>
                        <FormDescription>
                          Require personal details from applicants.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Work Experience Checkbox */}
                <FormField
                  control={form.control}
                  name="requiredFields.workExperience"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Work Experience</FormLabel>
                        <FormDescription>
                          Require work experience details.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Education Checkbox */}
                <FormField
                  control={form.control}
                  name="requiredFields.education"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Education</FormLabel>
                        <FormDescription>
                          Require educational qualifications.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Re-allocate Checkbox */}
                <FormField
                  control={form.control}
                  name="requiredFields.reAllocate"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Relocation</FormLabel>
                        <FormDescription>
                          Ask about relocation willingness.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name={"closed"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(value === "true")}
                    value={field.value?.toString()}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full border">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="false">Open</SelectItem>
                      <SelectItem value="true">Close</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <PublishStatusSelect control={form.control} name="publish" />

            <SaveCancel />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
