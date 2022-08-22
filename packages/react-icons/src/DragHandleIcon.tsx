import * as React from 'react';

function SvgDragHandleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6c0-.552.398-1 .889-1H19.11c.491 0 .889.448.889 1s-.398 1-.889 1H4.89C4.398 7 4 6.552 4 6zm0 6c0-.552.398-1 .889-1H19.11c.491 0 .889.448.889 1s-.398 1-.889 1H4.89C4.398 13 4 12.552 4 12zm.889 5C4.398 17 4 17.448 4 18s.398 1 .889 1H19.11c.491 0 .889-.448.889-1s-.398-1-.889-1H4.89z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDragHandleIcon;