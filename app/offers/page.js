import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("../../lib/caro"), { ssr: false });
import React from "react";

const page = () => {
  return (
    <div>
      <NoSSR />
    </div>
  );
};

export default page;
