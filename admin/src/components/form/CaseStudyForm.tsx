import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TCaseStudy } from "@/types/api";
import { useEffect } from "react";
import { usePostCaseStudy, useUpdateCaseStudy } from "@/hooks/useCaseStudy";
import TextEditor from "../shared/TextEditor";
import { postUpload } from "@/api/upload";
import PublishStatusSelect from "../shared/PublishStatusSelect";
import SaveCancel from "../shared/SaveCancel";
import Services from "../shared/Services";
import { toast } from "sonner";
import { postUploadFtp } from "@/api/uploadftp";

type CaseStudyFormProps = {
  isOpen: boolean;
  onClose: () => void;
  caseStudy?: TCaseStudy | null;
  length: number;
};

const hasMeaningfulText = (value: string) =>
  value.replace(/<[^>]*>/g, "").trim().length > 0;

const formSchema = z.object({
  image: z.string().min(1, "Image is required"),
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  cardDescription: z.string().min(1, "Card description is required"),
  heroDescription: z.string().min(1, "Hero description is required"),
  description: z
    .string()
    .refine(hasMeaningfulText, { message: "Description is required" }),
  objectives: z.array(
    z.object({
      description: z.string().min(1, "Objective description required"),
    }),
  ),
  statusDescription: z.string(),
  status: z.array(
    z.object({
      data: z.string().min(1, "Date is required"),
      title: z.string().min(1, "Title is required"),
    }),
  ),
  ctaQuestion: z.string().min(1, "Cta question is required"),
  pdf: z.string().optional(),
  order: z.number(),
  publish: z.boolean(),
});

type CaseStudyFormValues = z.infer<typeof formSchema>;

export default function CaseStudyForm({
  isOpen,
  onClose,
  caseStudy,
  length,
}: CaseStudyFormProps) {
  const form = useForm<CaseStudyFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
      title: "",
      category: "",
      cardDescription: "",
      heroDescription: "",
      description: "",
      objectives: [{ description: "" }],
      statusDescription: "",
      status: [{ data: "", title: "" }],
      ctaQuestion: "",
      order: length,
      publish: true,
    },
  });

  const { mutate: post } = usePostCaseStudy();
  const { mutate: update } = useUpdateCaseStudy();

  const objectivesFieldArray = useFieldArray({
    control: form.control,
    name: "objectives",
  });
  const statusFieldArray = useFieldArray({
    control: form.control,
    name: "status",
  });

  useEffect(() => {
    if (isOpen) {
      if (caseStudy) {
        form.reset(caseStudy);
      } else {
        form.reset({
          image: "",
          title: "",
          category: "",
          cardDescription: "",
          heroDescription: "",
          description: "",
          objectives: [{ description: "" }],
          statusDescription: "",
          status: [{ data: "", title: "" }],
          ctaQuestion: "",
          order: length || 1,
          publish: true,
        });
      }
    }
  }, [isOpen, caseStudy, length, form]);

  const onSubmit = (values: CaseStudyFormValues) => {
    if (caseStudy && caseStudy._id) {
      update(
        { id: caseStudy._id, formData: values },
        {
          onSuccess: () => onClose(),
        },
      );
    } else {
      post(values, {
        onSuccess: () => onClose(),
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Case Study</DialogTitle>
          <DialogDescription>Fill the form and save changes</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <div>
                      {field.value && (
                        <img
                          src={`${import.meta.env.VITE_API_BASE_URL}/${
                            field.value
                          }`}
                          className="mb-2 h-32 w-32 object-cover"
                        />
                      )}
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;
                          const res = await postUpload({
                            file,
                            folder: "uploads/caseStudy",
                          });
                          if (res?.filePath) field.onChange(res.filePath);
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"title"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Services control={form.control} />

            <FormField
              control={form.control}
              name={"cardDescription"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"heroDescription"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hero description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Controller
              control={form.control}
              name="description"
              render={({ field }) => (
                <TextEditor
                  label="Page Description"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />

            <div>
              <FormLabel>Objectives</FormLabel>
              {objectivesFieldArray.fields.map((item, index) => (
                <div key={item.id} className="mt-3 flex items-center gap-4">
                  <Input
                    placeholder="Description"
                    {...form.register(`objectives.${index}.description`)}
                  />
                  <Button
                    type="button"
                    onClick={() => objectivesFieldArray.remove(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                onClick={() => objectivesFieldArray.append({ description: "" })}
                className="mt-3"
              >
                Add Objective
              </Button>
            </div>

            <div>
              <FormLabel>Status</FormLabel>
              {statusFieldArray.fields.map((item, index) => (
                <div key={item.id} className="mt-3 flex items-center gap-4">
                  <Input
                    placeholder="Date"
                    {...form.register(`status.${index}.data`)}
                  />
                  <Input
                    placeholder="Title"
                    {...form.register(`status.${index}.title`)}
                  />
                  <Button
                    type="button"
                    onClick={() => statusFieldArray.remove(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                onClick={() => statusFieldArray.append({ data: "", title: "" })}
                className="mt-3"
              >
                Add Status
              </Button>
            </div>

            <FormField
              control={form.control}
              name="statusDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project status descripiton</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ctaQuestion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CTA question</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Eg:Need support navigating ESG frameworks?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pdf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pdf</FormLabel>
                  <FormControl>
                    <div>
                      {field.value && (
                        <div className="mb-2 flex items-center gap-3">
                          <a
                            href={`${import.meta.env.VITE_API_BASE_URL}${field.value}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit"
                          >
                            <Button variant="outline" type="button">
                              📄 View Pdf
                            </Button>
                          </a>
                          <Button
                            type="button"
                            variant="destructive"
                            onClick={() => field.onChange("")}
                          >
                            Remove
                          </Button>
                        </div>
                      )}

                      <Input
                        type="file"
                        accept="application/pdf"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;

                          try {
                            const res = await postUploadFtp(file);

                            if (res?.remotePath) {
                              field.onChange("/uploads" + res?.remotePath);
                            }
                          } catch (error) {
                            toast.error("Pdf upload failed");
                          }
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="order"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Order</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
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
