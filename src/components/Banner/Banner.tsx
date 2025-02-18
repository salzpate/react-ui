import { JSX, PropsWithChildren } from 'react';

import cn from 'classnames';
import { CircleCheck, CircleX, Info, TriangleAlert } from 'lucide-react';

type BannerTypes = 'error' | 'info' | 'success' | 'warning';
interface BannerProps {
  type: BannerTypes;
}

function Banner(props: Readonly<PropsWithChildren<BannerProps>>): JSX.Element {
  const { type, children } = props;

  return (
    <div
      className={cn('rounded-sm border px-4 py-3 text-base', {
        'border-teal-500 bg-teal-100 text-teal-700': type === 'success',
        'border-red-400 bg-red-200 text-red-700': type === 'error',
        'border-blue-500 bg-blue-100 text-blue-700': type === 'info',
        'border-orange-500 bg-orange-100 text-orange-700': type === 'warning',
      })}
      role="alert"
    >
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex w-0 flex-1 items-center">
          <span className="flex p-2">
            {type === 'error' && <CircleX className="h-4 w-4 text-red-700" />}
            {type === 'info' && <Info className="h-4 w-4 text-blue-700" />}
            {type === 'success' && <CircleCheck className="h-4 w-4 text-teal-700" />}
            {type === 'warning' && <TriangleAlert className="h-4 w-4 text-orange-700" />}
          </span>
          <p className="ml-3">{children}</p>
        </div>
      </div>
    </div>
  );
}
export default Banner;
export { type BannerTypes };
