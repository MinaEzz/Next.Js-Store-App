import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import IBreadCrumpsProps from "./BreadCrumps.types";

const PAGES = [
  { label: "home", href: "/" },
  { label: "products", href: "/products" },
];

export default function BreadCrumps({ name }: IBreadCrumpsProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {PAGES.map((page, index) => {
          return (
            <>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={page.href} className="text-lg capitalize">
                  {page.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          );
        })}
        <BreadcrumbItem>
          <BreadcrumbPage className="text-lg capitalize">{name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
