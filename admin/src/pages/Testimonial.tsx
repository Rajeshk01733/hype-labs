import { useState } from "react";
import PageHeading from "@/layout/PageHeading";
import { useDeleteTestimonial, useTestimonials } from "@/hooks/useTestimonial";
import DeleteDialog from "@/components/shared/DeleteDialog";
import { TTestimonial } from "@/types/api";
import { DataTable } from "@/components/shared/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import Toolbar from "@/components/shared/Toolbar";
import { ColumnDef } from "@tanstack/react-table";
import TableLoading from "@/components/shared/TableLoading";
import Pagination from "@/components/shared/Pagination";
import { useNavigate, useSearchParams } from "react-router";
import TestimonialForm from "@/components/form/TestimonialForm";

export default function Testimonials() {
  const navigate = useNavigate();
  const [q] = useSearchParams();
  const page = Number(q.get("page")) || 1;
  const limit = Number(q.get("limit")) || 10;
  const { data, isLoading } = useTestimonials(page, limit);
  const { mutate: handleDeleteMutation } = useDeleteTestimonial();
  const [selectedRows, setSelectedRows] = useState<TTestimonial[]>([]);
  const [modalOpen, setModalOpen] = useState<
    "none" | "new" | "view" | "delete"
  >("none");

  const handleDelete = () => {
    selectedRows.forEach((row) => handleDeleteMutation(row._id ?? ""));
    setSelectedRows([]);
    setModalOpen("none");
  };

  const pagination = data?.pagination;

  return (
    <>
      <PageHeading
        title="Testimonials"
        description="Manage testimonial"
        onClick={() => setModalOpen("new")}
      />

      {isLoading ? (
        <TableLoading />
      ) : (
        <DataTable
          columns={columns}
          data={data?.data ?? []}
          onSelectionChange={setSelectedRows}
        />
      )}

      <Pagination
        currentPage={page}
        totalPages={pagination?.totalPages}
        onPageChange={(p) => navigate(`?page=${p}&limit=${limit}`)}
        onSelectChange={(l) => navigate(`?page=1&limit=${l}`)}
      />

      <TestimonialForm
        isOpen={modalOpen === "view" || modalOpen === "new"}
        onClose={() => setModalOpen("none")}
        testimonial={selectedRows[0]}
      />

      <DeleteDialog
        isOpen={modalOpen === "delete"}
        onClose={() => setModalOpen("none")}
        onConfirm={handleDelete}
      />

      {selectedRows.length > 0 && (
        <Toolbar
          number={selectedRows.length}
          label="testimonial"
          onClose={() => setSelectedRows([])}
          onView={() => setModalOpen("view")}
          onDelete={() => setModalOpen("delete")}
        />
      )}
    </>
  );
}

export const columns: ColumnDef<TTestimonial>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="cursor-pointer"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="cursor-pointer"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  { accessorKey: "star", header: "Star" },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const d = row.original;
      return (
        <span className="block max-w-xs truncate font-medium">
          {d.description}
        </span>
      );
    },
  },
  {
    accessorKey: "publish",
    header: "Publish",
    cell: ({ row }) => {
      const d = row.original;
      return (
        <span className="font-medium">
          {d.publish ? "Publish" : "UnPublished"}
        </span>
      );
    },
  },
];
