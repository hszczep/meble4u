import { Link } from "react-router";

import bannerImg from "~/assets/shop/baner.svg"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"

export default function PageHeader() {
  return (
    <div
      className="relative flex items-center justify-center h-52 md:h-64 bg-center bg-cover text-center"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl font-bold mb-2">Shop</h1>
        <Breadcrumb>
          <BreadcrumbList className="justify-center">
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link to='/'>Home</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <BreadcrumbPage>home</BreadcrumbPage>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  )
}
