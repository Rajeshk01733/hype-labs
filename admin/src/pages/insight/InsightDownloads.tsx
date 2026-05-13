import { useState } from "react";
import PageHeading from "@/layout/PageHeading";
import {
  useDeleteInsightDownload,
  useInsightDownloads,
} from "@/hooks/useInsightDownloads";
import DeleteDialog from "@/components/shared/DeleteDialog";
import { TInsightDownload } from "@/types/api";
import { DataTable } from "@/components/shared/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import Toolbar from "@/components/shared/Toolbar";
import { ColumnDef } from "@tanstack/react-table";
import TableLoading from "@/components/shared/TableLoading";
import Pagination from "@/components/shared/Pagination";
import { useNavigate, useSearchParams } from "react-router";
import InsightDownloadForm from "@/components/form/InsightDownloadForm";

export default function InsightDownloads() {
  const navigate = useNavigate();
  const [q] = useSearchParams();
  const page = Number(q.get("page")) || 1;
  const limit = Number(q.get("limit")) || 10;
  const { data, isLoading } = useInsightDownloads(page, limit);
  const { mutate: handleDeleteMutation } = useDeleteInsightDownload();
  const [selectedRows, setSelectedRows] = useState<TInsightDownload[]>([]);
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
        title="Insight downloads"
        description="Manage insight downloads"
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

      <InsightDownloadForm
        isOpen={modalOpen === "view"}
        onClose={() => setModalOpen("none")}
        insightDownload={selectedRows[0]}
      />

      <DeleteDialog
        isOpen={modalOpen === "delete"}
        onClose={() => setModalOpen("none")}
        onConfirm={handleDelete}
      />

      {selectedRows.length > 0 && (
        <Toolbar
          number={selectedRows.length}
          label="insight download"
          onClose={() => setSelectedRows([])}
          onView={() => setModalOpen("view")}
          onDelete={() => setModalOpen("delete")}
        />
      )}
    </>
  );
}

export const columns: ColumnDef<TInsightDownload>[] = [
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
  { accessorKey: "phone", header: "Phone" },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "insight",
    header: "Insight Title",
    cell: ({ row }) => {
      const d = row.original;
      return <span className="block max-w-xs truncate font-medium">{d?.insight?.title}</span>;
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
