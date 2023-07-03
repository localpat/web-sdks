import * as React from 'react';
import { SVGProps } from 'react';
const SvgScreenShare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 135 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path d="M.5 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v80H.5V4Z" fill="url(#ScreenShare_svg__a)" />
    <defs>
      <pattern id="ScreenShare_svg__a" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#ScreenShare_svg__b" transform="scale(.00052 .00092)" />
      </pattern>
      <image
        id="ScreenShare_svg__b"
        width={1920}
        height={1092}
      />
    </defs>
  </svg>
);
export default SvgScreenShare;