import * as React from 'react';

function SvgZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.326 3.068a.818.818 0 01.486.852l-.703 5.625h6.436a.818.818 0 01.629 1.342l-8.182 9.819a.818.818 0 01-1.44-.626l.703-5.625H4.818a.818.818 0 01-.628-1.342l8.181-9.819a.818.818 0 01.955-.226zm-6.761 9.75h5.617a.818.818 0 01.812.92l-.472 3.776 5.277-6.332h-5.617a.818.818 0 01-.812-.92l.472-3.776-5.277 6.332z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgZapIcon;
