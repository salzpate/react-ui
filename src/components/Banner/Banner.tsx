import React, { JSX, PropsWithChildren } from 'react';
import cn from 'classnames';

export enum BannerTypes {
  error = 'error',
  info = 'info',
  success = 'success',
  warning = 'warning',
}

export type BannerProps = {
  type: BannerTypes;
};

function ErrorIcon(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function InformationIcon(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6 text-blue-700" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function SuccessIcon(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function WarningIcon(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function Banner(props: PropsWithChildren<BannerProps>): JSX.Element {
  const { type, children } = props;

  return (
    <div
      className={cn('border px-4 py-3 rounded text-base', {
        'bg-teal-100 border-teal-500 text-teal-700': type === BannerTypes.success,
        'bg-red-200 border-red-400 text-red-700': type === BannerTypes.error,
        'bg-blue-100 border-blue-500 text-blue-700': type === BannerTypes.info,
        'bg-orange-100 border-orange-500 text-orange-700': type === BannerTypes.warning,
      })}
      role="alert"
    >
      <div className="flex items-center justify-between flex-wrap">
        <div className="w-0 flex-1 flex items-center">
          <span className="flex p-2">
            {type === BannerTypes.error && <ErrorIcon />}
            {type === BannerTypes.info && <InformationIcon />}
            {type === BannerTypes.success && <SuccessIcon />}
            {type === BannerTypes.warning && <WarningIcon />}
          </span>
          <p className="ml-3">{children}</p>
        </div>
      </div>
    </div>
  );
}
export default Banner;
