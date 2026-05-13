import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type ServicesProps = {
  control: any;
  name?: string;
  label?: string;
  defaultValue?: string;
};

export default function Services({
  control,
  name = "category",
  label = "Category",
  defaultValue,
}: ServicesProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select
              // RHF wiring
              onValueChange={field.onChange}
              defaultValue={field.value || defaultValue}
            >
              <SelectTrigger className="w-full border">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Brand Management">
                  Brand Management
                </SelectItem>
                <SelectItem value="Website Design">Website Design</SelectItem>
                <SelectItem value="Website Development">
                  Website Development
                </SelectItem>
                <SelectItem value="SEO">SEO</SelectItem>
                <SelectItem value="Social Media">Social Media</SelectItem>
                <SelectItem value="Branding Strategy">
                  Branding Strategy
                </SelectItem>
                <SelectItem value="Ecommerce Website Production">
                  Ecommerce Website Production
                </SelectItem>
                <SelectItem value="Infrastructure">Infrastructure</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
