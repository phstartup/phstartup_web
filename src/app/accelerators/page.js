"use client";
import React, { useEffect, useState } from "react";
import Companies from "@/components/home/Companies";
function Page(props) {
  return (
    <div className="w-full float-left">
      <Companies type='accelerator'/>
    </div>
  );
}

export default Page;
