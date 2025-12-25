import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <Card className="p-0">
      <CardContent className="p-4">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-4 w-3/4 mt-4 mx-auto" />
        <Skeleton className="h-4 w-1/2 mt-4 mx-auto" />
      </CardContent>
    </Card>
  );
}
