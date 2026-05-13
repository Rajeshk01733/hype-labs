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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TInsights } from "@/types/api";
import { useEffect } from "react";
import { usePostInsights, useUpdateInsights } from "@/hooks/useInsights";
import TextEditor from "../shared/TextEditor";
import { postUpload } from "@/api/upload";
import SaveCancel from "../shared/SaveCancel";
import PublishStatusSelect from "../shared/PublishStatusSelect";
import Services from "../shared/Services";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { postUploadFtp } from "@/api/uploadftp";

type InsightsFormProps = {
  isOpen: boolean;
  onClose: () => void;
  insights?: TInsights | null;
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
  ctaQuestion: z.string().min(1, "Cta question is required"),
  pdf: z.string().optional(),
  order: z.number(),
  publish: z.boolean(),
});

type InsightsFormValues = z.infer<typeof formSchema>;

export default function InsightsForm({
  isOpen,
  onClose,
  insights,
  length,
}: InsightsFormProps) {
  const form = useForm<InsightsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
      title: "",
      category: "",
      cardDescription: "",
      heroDescription: "",
      description: "",
      ctaQuestion: "",
      order: length || 1,
      publish: true,
    },
  });
  const { mutate: post } = usePostInsights();
  const { mutate: update } = useUpdateInsights();

  useEffect(() => {
    if (insights) {
      form.reset(insights);
    } else {
      form.reset({
        image: "",
        title: "",
        category: "",
        cardDescription: "",
        heroDescription: "",
        description: "",
        ctaQuestion: "",
        order: length || 1,
        publish: true,
      });
    }
  }, [insights]);

  const onSubmit = (values: InsightsFormValues) => {
    if (insights && insights._id) {
      update(
        { id: insights._id, formData: values },
        {
          onSuccess: () => {
            onClose();
          },
        },
      );
    } else {
      post(values, {
        onSuccess: () => {
          onClose();
        },
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Insights</DialogTitle>
          <DialogDescription>
            Make changes to your insights. Click save when you're done.
          </DialogDescription>
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
                          alt="Uploaded"
                          className="mb-2 h-32 w-32 rounded object-cover"
                        />
                      )}

                      <Input
                        type="file"
                        accept="image/*"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;

                          try {
                            const res = await postUpload({
                              file,
                              folder: "uploads/insights",
                            });

                            if (res?.filePath) {
                              field.onChange(res.filePath); // Save uploaded path to form state
                            }
                          } catch (error) {
                            console.error("Image upload failed", error);
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
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Services control={form.control} />
            <FormField
              control={form.control}
              name="cardDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter the card description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="heroDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hero description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter the hero description"
                      {...field}
                    />
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
                  label="Page description"
                  value={field.value}
                  onChange={field.onChange}
                />
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
