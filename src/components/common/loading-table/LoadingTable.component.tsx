import { Skeleton } from "@/components/ui/skeleton";
import ILoadingTableProps from "./LoadingTable.types";

export default function LoadingTable({ rows = 5 }: ILoadingTableProps) {
  const tableRows = Array.from({ length: rows }, (_, index) => {
    return (
      <div key={index} className="mb-4">
        <Skeleton className="w-full h-8 rounded" />
      </div>
    );
  });

  return <>{tableRows}</>;
}
