import { SVGProps, Ref, forwardRef } from "react";
const SvgCategory6 = (
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
      <path d="M10.4 7.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM8.9 13.5h-3A1.5 1.5 0 0 0 4.4 15v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5ZM19.4 16.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM16.5 4.64 13.4 10h6.2l-3.1-5.36Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgCategory6);
export default ForwardRef;
