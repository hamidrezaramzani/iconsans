import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgFolderArrowUp = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M4 16.5v-9a2 2 0 0 1 2-2h4.17a2 2 0 0 1 1.42.59l1.82 1.82a2 2 0 0 0 1.42.59H18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2ZM12 10.76V16" />
      <path d="M10.43 12.33 12 10.76l1.57 1.57" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgFolderArrowUp);
export default ForwardRef;