import { SVGProps, Ref, forwardRef } from "react";
const SvgImage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z" />
      <path d="m3 17 3.59-3.59a2 2 0 0 1 2.82 0l2.18 2.18a2 2 0 0 0 2.82 0L21 9" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgImage);
export default ForwardRef;
