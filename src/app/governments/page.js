"use client";
import React from "react";
import Companies from "@/components/home/Companies";

function Page(props) {
  return (
    <div className="w-full float-left">
      <Companies type='governments' />
    </div>
  );
}

export default Page;
