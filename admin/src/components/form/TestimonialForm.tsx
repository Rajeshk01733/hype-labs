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

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TTestimonial } from "@/types/api";
import { useEffect } from "react";
import {
  usePostTestimonial,
  useUpdateTestimonial,
} from "@/hooks/useTestimonial";
import PublishStatusSelect from "../shared/PublishStatusSelect";
import SaveCancel from "../shared/SaveCancel";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type TestimonialFormProps = {
  isOpen: boolean;
  onClose: () => void;
  testimonial?: TTestimonial | null;
};

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  star: z
    .number()
    .min(1, "Must be at least 1 star")
    .max(5, "Cannot exceed 5 stars"),
  publish: z.boolean(),
});

type TestimonialFormValues = z.infer<typeof formSchema>;

const defaultValues = {
  name: "",
  description: "",
  star: 5,
  publish: true,
};

export default function TestimonialForm({
  isOpen,
  onClose,
  testimonial,
}: TestimonialFormProps) {
  const form = useForm<TestimonialFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });
  const { mutate: post } = usePostTestimonial();
  const { mutate: update } = useUpdateTestimonial();

  useEffect(() => {
    if (testimonial) {
      form.reset(testimonial);
    } else {
      form.reset(defaultValues);
    }
  }, [testimonial]);

  const onSubmit = (values: TestimonialFormValues) => {
    if (testimonial && testimonial._id) {
      update(
        { id: testimonial._id, formData: values },
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
          <DialogTitle>Testimonial</DialogTitle>
          <DialogDescription>
            Make changes to your testimonial. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Client name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="star"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Star</FormLabel>
                  <FormControl>
                    <Select
                      value={String(field.value)}
                      onValueChange={(val) => field.onChange(Number(val))}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select star rating" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((s) => (
                          <SelectItem key={s} value={String(s)}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write testimonial here..."
                      className="resize-none"
                      {...field}
                      maxLength={550}
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
