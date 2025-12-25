import SkeletonCard from "./skeleton-card/SkeletonCard.component";

export default function LoadingGrid() {
  return (
    <div className="pt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 3 }).map((_, index) => {
        return <SkeletonCard key={index} />;
      })}
    </div>
  );
}
