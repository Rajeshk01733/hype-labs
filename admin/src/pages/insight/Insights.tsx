import DeleteDialog from "@/components/shared/DeleteDialog";
import { useState } from "react";
import PageHeading from "@/layout/PageHeading";
import { TInsights } from "@/types/api";
import Img from "@/components/shared/Img";
import TableLoading from "@/components/shared/TableLoading";
import Pagination from "@/components/shared/Pagination";
import {
  useDeleteInsights,
  useInsights,
  useUpdateInsights,
} from "@/hooks/useInsights";
import InsightsForm from "@/components/form/InsightsForm";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate, useSearchParams } from "react-router";
import { DataTable } from "@/components/shared/DataTable";
import Toolbar from "@/components/shared/Toolbar";

export default function Insights() {
  const navigate = useNavigate();
  const [q] = useSearchParams();
  const page = Number(q.get("page")) || 1;
  const limit = Number(q.get("limit")) || 10;
  const { data, isLoading } = useInsights(page, limit);
  const { mutate: handleDeleteMutation } = useDeleteInsights();
  const { mutate: update } = useUpdateInsights();
  const [selectedRows, setSelectedRows] = useState<TInsights[]>([]);
  const [modalOpen, setModalOpen] = useState<
    "none" | "new" | "view" | "delete"
  >("none");

  const handleDelete = () => {
    selectedRows.forEach((row) => handleDeleteMutation(row._id ?? ""));
    setSelectedRows([]);
    setModalOpen("none");
  };

  const handleMoveUp = () => {
    update({
      id: selectedRows[0]._id!,
      formData: { ...selectedRows[0], order: selectedRows[0].order - 1 },
    });
  };

  const handleMoveDown = () => {
    update({
      id: selectedRows[0]._id!,
      formData: { ...selectedRows[0], order: selectedRows[0].order + 1 },
    });
  };

  const pagination = data?.pagination;
  return (
    <>
      <PageHeading
        title="Insights"
        description="Manage insights"
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

      <InsightsForm
        isOpen={modalOpen === "view" || modalOpen === "new"}
        onClose={() => setModalOpen("none")}
        insights={selectedRows[0]}
        length={data?.data?.length + 1}
      />

      <DeleteDialog
        isOpen={modalOpen === "delete"}
        onClose={() => setModalOpen("none")}
        onConfirm={handleDelete}
      />

      {selectedRows.length > 0 && (
        <Toolbar
          number={selectedRows.length}
          label="insights"
          onClose={() => setSelectedRows([])}
          onView={() => setModalOpen("view")}
          onDelete={() => setModalOpen("delete")}
          onMoveUp={handleMoveUp}
          onMoveDown={handleMoveDown}
        />
      )}
    </>
  );
}

export const columns: ColumnDef<TInsights>[] = [
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
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const d = row.original;
      return <Img dynamic src={d?.image} />;
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const d = row.original;
      return (
        <span className="block max-w-xs truncate font-medium">{d.title}</span>
      );
    },
  },
  { accessorKey: "category", header: "Category" },
  { accessorKey: "order", header: "Order" },
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
