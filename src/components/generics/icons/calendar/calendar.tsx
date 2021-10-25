import React, { SVGProps } from 'react';

import { colors } from '@theme/theme/default';

const Calendar = (props: SVGProps<SVGSVGElement>): React.ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill={colors.blackGrey}
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
    </svg>
  );
};

export { Calendar };