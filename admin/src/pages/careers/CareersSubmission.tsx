import DeleteDialog from "@/components/shared/DeleteDialog";
import { useState } from "react";

import PageHeading from "@/layout/PageHeading";

import TableLoading from "@/components/shared/TableLoading";
import Pagination from "@/components/shared/Pagination";

import {
  useDeleteCareersSubmission,
  useCareersSubmissions,
} from "@/hooks/useCareersSubmission";

import { TCareersSubmission } from "@/types/api";

import { useNavigate, useSearchParams } from "react-router";

import Toolbar from "@/components/shared/Toolbar";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { DataTable } from "@/components/shared/DataTable";

import CareersSubmissionForm from "@/components/form/CareerSubForm";

export default function CareersSubmission() {
  const navigate = useNavigate();

  const [q] = useSearchParams();

  const page = Number(q.get("page")) || 1;

  const limit = Number(q.get("limit")) || 10;

  const { data, isLoading } = useCareersSubmissions(page, limit);

  const { mutate: handleDeleteMutation } = useDeleteCareersSubmission();

  const [selectedRows, setSelectedRows] = useState<TCareersSubmission[]>([]);

  const [modalOpen, setModalOpen] = useState<"none" | "view" | "delete">(
    "none",
  );

  const handleDelete = () => {
    selectedRows.forEach((row) => handleDeleteMutation(row._id ?? ""));

    setSelectedRows([]);

    setModalOpen("none");
  };

  const pagination = data?.pagination;

  return (
    <>
      <PageHeading
        title="Careers submission"
        description="Manage careers submission"
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

      <CareersSubmissionForm
        isOpen={modalOpen === "view"}
        onClose={() => setModalOpen("none")}
        careerSubForm={selectedRows[0]}
      />

      <DeleteDialog
        isOpen={modalOpen === "delete"}
        onClose={() => setModalOpen("none")}
        onConfirm={handleDelete}
      />

      {selectedRows.length > 0 && (
        <Toolbar
          number={selectedRows.length}
          label="careers submission"
          onClose={() => setSelectedRows([])}
          onView={() => setModalOpen("view")}
          onDelete={() => setModalOpen("delete")}
        />
      )}
    </>
  );
}

export const columns: ColumnDef<TCareersSubmission>[] = [
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
    accessorKey: "firstName",

    header: "Name",

    cell: ({ row }) => {
      const d = row.original;

      return (
        <span className="font-medium">
          {d.firstName} {d.lastName}
        </span>
      );
    },
  },

  {
    accessorKey: "email",

    header: "Email",
  },

  {
    accessorKey: "phone",

    header: "Phone",
  },

  {
    accessorKey: "careerId",

    header: "Job Title",

    cell: ({ row }) => {
      const d = row.original;

      return <span className="font-medium">{d?.careerId?.title}</span>;
    },
  },

  {
    accessorKey: "resume",

    header: "Resume",

    cell: ({ row }) => {
      const d = row.original;

      return d.resume ? (
        <a
          href={d.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-500 underline"
        >
          View Resume
        </a>
      ) : (
        "-"
      );
    },
  },

  {
    accessorKey: "createdAt",

    header: "Date Time",

    cell: ({ row }) => {
      const d = row.original;

      return d.createdAt ? new Date(d.createdAt).toLocaleString() : "-";
    },
  },
];
