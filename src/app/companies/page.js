"use client";
import React, { useEffect, useState } from "react";
import Companies from "@/components/home/Companies";
import String from "@/utils/String";
import Select from '@/components/form/Select';
function Page(props) {
  const [filter, setFilter] = useState(String.menu[0].value)
  return (
    <div className="w-full float-left">

      <div className="w-full float-left mb-[20px]">
        <div className="w-[20%]">
          <Select
            type="text"
            data={String.menu}
            selected={filter}
            placeholder="Select Type"
            onChange={(value) => {
              setFilter(null)
              setTimeout(() => {
                setFilter(value)
              }, 10)
            }}
          />
        </div>
      </div>

      <div className="w-full float-left">
        {
          filter && (
            <Companies type={filter} />
          )
        }
        
      </div>
    </div>
  );
}

export default Page;
