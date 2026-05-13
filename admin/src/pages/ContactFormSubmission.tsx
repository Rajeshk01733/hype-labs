import { useState, useMemo, useCallback } from "react";
import PageHeading from "@/layout/PageHeading";
import { useDeleteContact, useContacts } from "@/hooks/useContact";
import DeleteDialog from "@/components/shared/DeleteDialog";
import { TContact } from "@/types/api";
import { DataTable } from "@/components/shared/DataTable";
import { Checkbox } from "@/components/ui/checkbox";

import Toolbar from "@/components/shared/Toolbar";
import { ColumnDef } from "@tanstack/react-table";
import TableLoading from "@/components/shared/TableLoading";
import Pagination from "@/components/shared/Pagination";
import { useNavigate, useSearchParams } from "react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const sanitizePhoneForWhatsApp = (phone?: string | number): string => {
  if (!phone) return "";

  return String(phone).replace(/\D/g, "");
};

export default function ContactFormSubmission() {
  const navigate = useNavigate();
  const [q] = useSearchParams();

  const page = Number(q.get("page")) || 1;
  const limit = Number(q.get("limit")) || 10;

  const { data, isLoading } = useContacts(page, limit);
  const { mutate: handleDeleteMutation } = useDeleteContact();

  const [selectedRows, setSelectedRows] = useState<TContact[]>([]);
  const [modalOpen, setModalOpen] = useState<"none" | "delete">("none");

  const handleDelete = () => {
    selectedRows.forEach((row) => {
      handleDeleteMutation(row._id ?? "");
    });

    setSelectedRows([]);
    setModalOpen("none");
  };

  const pagination = data?.pagination;

  const handleSelectionChange = useCallback((rows: TContact[]) => {
    setSelectedRows(rows);
  }, []);

  const columns = useMemo<ColumnDef<TContact>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
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
        header: "Phone No",
      },

      {
        accessorKey: "businessName",
        header: "Business No",
      },

      {
        accessorKey: "businessSize",
        header: "Company Size",
      },

      {
        accessorKey: "services",
        header: "Services Name",

        cell: ({ row }) => {
          const services = row.original.services || [];

          return (
            <span className="text-xs">
              {services.length > 0 ? services.slice(0, 2).join(", ") : "-"}

              {services.length > 2 && ` +${services.length - 2}`}
            </span>
          );
        },
      },

      {
        accessorKey: "budget",
        header: "Budget",
      },

      // {
      //   accessorKey: "sourcePage",
      //   header: "Source Page",
      // },

      {
        accessorKey: "message",
        header: "Message",

        cell: ({ row }) => {
          const message = row.original.message || "-";

          return <span className="max-w-xs truncate text-xs">{message}</span>;
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

      {
        id: "whatsapp",
        header: "WhatsApp",

        cell: ({ row }) => {
          const phone = row.original.phone;

          const sanitized = sanitizePhoneForWhatsApp(phone);

          if (!sanitized) {
            return (
              <span className="text-muted-foreground text-xs">No Number</span>
            );
          }

          const whatsappUrl = `https://wa.me/${sanitized}`;

          return (
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                variant="outline"
                className="gap-2"
                title="Open WhatsApp chat"
              >
                <MessageCircle className="h-4 w-4" />
                Chat
              </Button>
            </a>
          );
        },
      },
    ],
    [],
  );

  return (
    <>
      <PageHeading
        title="Contact Forms"
        description="Manage all contact form submissions"
      />

      {isLoading ? (
        <TableLoading />
      ) : (
        <DataTable
          columns={columns}
          data={data?.data ?? []}
          onSelectionChange={handleSelectionChange}
        />
      )}

      <Pagination
        currentPage={page}
        totalPages={pagination?.totalPages}
        onPageChange={(p) => navigate(`?page=${p}&limit=${limit}`)}
        onSelectChange={(l) => navigate(`?page=1&limit=${l}`)}
      />

      <DeleteDialog
        isOpen={modalOpen === "delete"}
        onClose={() => setModalOpen("none")}
        onConfirm={handleDelete}
      />

      {selectedRows.length > 0 && (
        <Toolbar
          number={selectedRows.length}
          label="contact submission"
          onClose={() => setSelectedRows([])}
          onDelete={() => setModalOpen("delete")}
        />
      )}
    </>
  );
}
