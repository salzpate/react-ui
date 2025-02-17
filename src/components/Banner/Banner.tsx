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
      className={cn('border px-4 py-3 rounded-sm text-base', {
        'bg-teal-100 border-teal-500 text-teal-700': type === 'success',
        'bg-red-200 border-red-400 text-red-700': type === 'error',
        'bg-blue-100 border-blue-500 text-blue-700': type === 'info',
        'bg-orange-100 border-orange-500 text-orange-700': type === 'warning',
      })}
      role="alert"
    >
      <div className="flex items-center justify-between flex-wrap">
        <div className="w-0 flex-1 flex items-center">
          <span className="flex p-2">
            {type === 'error' && <CircleX className="text-red-700 w-4 h-4" />}
            {type === 'info' && <Info className="text-blue-700 w-4 h-4" />}
            {type === 'success' && <CircleCheck className="text-teal-700 w-4 h-4" />}
            {type === 'warning' && <TriangleAlert className="text-orange-700 w-4 h-4" />}
          </span>
          <p className="ml-3">{children}</p>
        </div>
      </div>
    </div>
  );
}
export default Banner;
export { type BannerTypes };
