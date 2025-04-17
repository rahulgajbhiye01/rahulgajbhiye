"use client";
import { ColumnDef } from "@tanstack/react-table";

// import { Checkbox } from "@/components/ui/checkbox";

// import { statuses } from "../data/data";
import { BlogMeta } from "../data/schema";
// import { DataTableColumnHeader } from "./data-table-column-header";
// import { DataTableRowActions } from "./data-table-row-actions";

// import OrderDetails from "./order-details";

export const columns: ColumnDef<BlogMeta>[] = [
  // Title
  {
    accessorKey: "title",
    header: ({ column }) => <span>{column.id}</span>,
    cell: ({ row }) => (
      <div className="flex">
        <span>{row.getValue("title")}</span>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // Name
  {
    accessorKey: "createdAt",
    header: ({ column }) => <span>{column.id}</span>,
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] space-x-2">
          <span className="truncate font-medium">{row.getValue("name")}</span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  // Email
  {
    accessorKey: "category",
    header: ({ column }) => <span>{column.id}</span>,
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span>{row.getValue("category")}</span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  // Email
  {
    accessorKey: "keywords",
    header: ({ column }) => <span>{column.id}</span>,
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span>{row.getValue("email")}</span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  // Email
  {
    accessorKey: "imageUrl",
    header: ({ column }) => <span>{column.id}</span>,
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <img src={row.getValue("imageUrl")} />
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  // // Actions
  //   {
  //     id: "actions",
  //     cell: ({ row }) => <DataTableRowActions row={row} />,
  //   },
];
