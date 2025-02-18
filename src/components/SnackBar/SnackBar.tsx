import { JSX } from 'react';
import cn from 'classnames';

export enum SnackBarTypes {
  error = 'error',
  info = 'info',
  success = 'success',
  warning = 'warning',
  loading = 'loading',
}

export type SnackBarProps = {
  text: string;
  type: SnackBarTypes;
  closeSnackbar: () => void;
};

function SnackBar(props: Readonly<SnackBarProps>): JSX.Element {
  const { text, type, closeSnackbar } = props;

  return (
    <div className="fixed right-0 bottom-0 left-0 z-10 m-4">
      <div
        className={cn('scale-75 transform rounded border px-4 py-3 text-xl', {
          'border-teal-500 bg-teal-100 text-teal-700': type === SnackBarTypes.success,
          'border-red-400 bg-red-200 text-red-700': type === SnackBarTypes.error,
          'border-blue-500 bg-blue-100 text-blue-700': type === SnackBarTypes.info,
          'border-orange-500 bg-orange-100 text-orange-700': type === SnackBarTypes.warning,
          'border-secondary bg-secondary text-center text-gray-200 uppercase opacity-80': type === SnackBarTypes.loading,
        })}
        role="alert"
      >
        <div>{text}</div>
        <span className="absolute top-0 right-0 bottom-0 px-4 py-3">
          <button onClick={closeSnackbar}>
            <svg
              className={cn('h-6 w-6 fill-current', {
                'text-teal-700': type === SnackBarTypes.success,
                'text-red-700': type === SnackBarTypes.error,
                'text-blue-700': type === SnackBarTypes.info,
                'text-orange-700': type === SnackBarTypes.warning,
                'text-gray-200': type === SnackBarTypes.loading,
              })}
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
}

export default SnackBar;
