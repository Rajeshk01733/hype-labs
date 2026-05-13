import DeleteDialog from "@/components/shared/DeleteDialog";
import { useState } from "react";
import PageHeading from "@/layout/PageHeading";
import { TCareersOpening } from "@/types/api";
import TableLoading from "@/components/shared/TableLoading";
import Pagination from "@/components/shared/Pagination";
import {
  useDeleteCareersOpening,
  useCareersOpenings,
} from "@/hooks/useCareersOpening";
import CareersOpeningForm from "@/components/form/CareerOpeningForm";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/shared/DataTable";
import { useNavigate, useSearchParams } from "react-router";
import Toolbar from "@/components/shared/Toolbar";

export default function CareersOpening() {
  const navigate = useNavigate();
  const [q] = useSearchParams();
  const page = Number(q.get("page")) || 1;
  const limit = Number(q.get("limit")) || 10;
  const { data, isLoading } = useCareersOpenings(page, limit);
  const { mutate: handleDeleteMutation } = useDeleteCareersOpening();
  const [selectedRows, setSelectedRows] = useState<TCareersOpening[]>([]);
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
        title="Careers opening"
        description="Manage careers opening"
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

      <CareersOpeningForm
        isOpen={modalOpen === "new" || modalOpen === "view"}
        onClose={() => setModalOpen("none")}
        careersOpening={selectedRows[0]}
      />

      <DeleteDialog
        isOpen={modalOpen === "delete"}
        onClose={() => setModalOpen("none")}
        onConfirm={handleDelete}
      />

      {selectedRows.length > 0 && (
        <Toolbar
          number={selectedRows.length}
          label="careers opening"
          onClose={() => setSelectedRows([])}
          onView={() => setModalOpen("view")}
          onDelete={() => setModalOpen("delete")}
        />
      )}
    </>
  );
}

export const columns: ColumnDef<TCareersOpening>[] = [
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
    accessorKey: "jobId",
    header: "Job ID",
  },
  { accessorKey: "title", header: "Title" },
  { accessorKey: "department", header: "Department" },
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
  {
    accessorKey: "closed",
    header: "Status",
    cell: ({ row }) => {
      const d = row.original;
      return (
        <span className="font-medium">{d.closed ? "Closed" : "Open"}</span>
      );
    },
  },
];
