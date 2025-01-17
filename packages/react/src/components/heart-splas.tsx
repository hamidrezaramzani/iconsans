import { SVGProps, Ref, forwardRef } from "react";
const SvgHeartSplas = (
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
      <path d="M19.05 5a4.21 4.21 0 0 0-2.31-.84A4.51 4.51 0 0 0 12 8.68a4.51 4.51 0 0 0-4.74-4.5A4.71 4.71 0 0 0 3 9a10.93 10.93 0 0 0 3.59 8.4M10 19.61c.463.212.937.399 1.42.56.401.14.839.14 1.24 0C14.65 19.5 21 16.78 21 9a4.804 4.804 0 0 0-.07-.85M20.5 3.73 4 20.23" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgHeartSplas);
export default ForwardRef;
