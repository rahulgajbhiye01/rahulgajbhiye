"use client";

import React from "react";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbBar = () => {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const result = [];

  for (let i = 0; i < parts.length; i++) {
    let path = "";
    for (let j = 0; j <= i; j++) {
      path += "/" + parts[j];
    }
    result.push({ name: parts[i], path: path });
  }

  return (
    <div className="my-8 flex items-center">
      <Breadcrumb>
        <BreadcrumbList>
          {result.map((item) => {
            return (
              <React.Fragment key={item.path}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={`${item.path}`}>
                    {item.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbBar;
