'use client'

import React, { ReactNode } from 'react'
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Link from "next/link";



const BreadcrumbsUi = () => {

    return (
        
    <Breadcrumbs>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Manage</BreadcrumbItem>

    </Breadcrumbs>
  );
}

export default BreadcrumbsUi;