import DeleteDialog from "@/components/shared/DeleteDialog";
import { useCallback, useState } from "react";

import PageHeading from "@/layout/PageHeading";
import { TCaseStudy } from "@/types/api";

import Img from "@/components/shared/Img";
import TableLoading from "@/components/shared/TableLoading";
import Pagination from "@/components/shared/Pagination";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { useNavigate, useSearchParams } from "react-router-dom";

import { DataTable } from "@/components/shared/DataTable";

import Toolbar from "@/components/shared/Toolbar";

import CaseStudyForm from "@/components/form/CaseStudyForm";

import {
  useCaseStudy,
  useDeleteCaseStudy,
  useUpdateCaseStudy,
} from "@/hooks/useCaseStudy";

export default function CaseStudy() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const limit = Number(searchParams.get("limit")) || 10;

  const { data, isLoading, isError } = useCaseStudy(page, limit);

  const { mutate: deleteCaseStudy } = useDeleteCaseStudy();

  const { mutate: updateCaseStudy } = useUpdateCaseStudy();

  const [selectedRows, setSelectedRows] = useState<TCaseStudy[]>([]);

  const [modalOpen, setModalOpen] = useState<
    "none" | "new" | "view" | "delete"
  >("none");

  const handleSelectionChange = useCallback((rows: TCaseStudy[]) => {
    setSelectedRows((prev) => {
      const prevIds = prev.map((r) => r._id).join(",");
      const newIds = rows.map((r) => r._id).join(",");

      if (prevIds === newIds) {
        return prev;
      }

      return rows;
    });
  }, []);

  const handleDelete = () => {
    selectedRows.forEach((row) => {
      if (row?._id) {
        deleteCaseStudy(row._id);
      }
    });

    setSelectedRows([]);

    setModalOpen("none");
  };

  const handleMoveUp = () => {
    if (!selectedRows[0]?._id) return;

    updateCaseStudy({
      id: selectedRows[0]._id,

      formData: {
        ...selectedRows[0],

        order: Math.max(1, (selectedRows[0].order || 1) - 1),
      },
    });
  };

  const handleMoveDown = () => {
    if (!selectedRows[0]?._id) return;

    updateCaseStudy({
      id: selectedRows[0]._id,

      formData: {
        ...selectedRows[0],

        order: (selectedRows[0].order || 1) + 1,
      },
    });
  };

  const pagination = data?.pagination;

  if (isError) {
    return <div className="p-10 text-red-500">Failed to load case studies</div>;
  }

  return (
    <>
      <PageHeading
        title="Case Study"
        description="Manage case study"
        onClick={() => setModalOpen("new")}
      />

      {isLoading ? (
        <TableLoading />
      ) : (
        <DataTable
          columns={columns}
          data={data?.data || []}
          onSelectionChange={handleSelectionChange}
        />
      )}

      <Pagination
        currentPage={page}
        totalPages={pagination?.totalPages || 1}
        onPageChange={(p) => navigate(`?page=${p}&limit=${limit}`)}
        onSelectChange={(l) => navigate(`?page=1&limit=${l}`)}
      />

      <CaseStudyForm
        isOpen={modalOpen === "view" || modalOpen === "new"}
        onClose={() => setModalOpen("none")}
        caseStudy={selectedRows?.[0]}
        length={(data?.data?.length || 0) + 1}
      />

      <DeleteDialog
        isOpen={modalOpen === "delete"}
        onClose={() => setModalOpen("none")}
        onConfirm={handleDelete}
      />

      {selectedRows.length > 0 && (
        <Toolbar
          number={selectedRows.length}
          label="case study"
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

export const columns: ColumnDef<TCaseStudy>[] = [
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

      return <Img dynamic src={d?.image || ""} />;
    },
  },

  {
    accessorKey: "title",

    header: "Title",

    cell: ({ row }) => {
      const d = row.original;

      return (
        <span className="block max-w-xs truncate font-medium">
          {d?.title || "N/A"}
        </span>
      );
    },
  },

  {
    accessorKey: "category",
    header: "Category",
  },

  {
    accessorKey: "order",
    header: "Order",
  },

  {
    accessorKey: "publish",

    header: "Publish",

    cell: ({ row }) => {
      const d = row.original;

      return (
        <span className="font-medium">
          {d?.publish ? "Published" : "Unpublished"}
        </span>
      );
    },
  },
];
