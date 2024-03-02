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
    <div className="fixed z-10 right-0 left-0 bottom-0 m-4">
      <div
        className={cn('border px-4 py-3 rounded transform scale-75 text-xl', {
          'bg-teal-100 border-teal-500 text-teal-700': type === SnackBarTypes.success,
          'bg-red-200 border-red-400 text-red-700': type === SnackBarTypes.error,
          'bg-blue-100 border-blue-500 text-blue-700': type === SnackBarTypes.info,
          'bg-orange-100 border-orange-500 text-orange-700': type === SnackBarTypes.warning,
          'bg-secondary border-secondary text-gray-200 uppercase text-center opacity-80': type === SnackBarTypes.loading,
        })}
        role="alert"
      >
        <div>{text}</div>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <button onClick={closeSnackbar}>
            <svg
              className={cn('fill-current h-6 w-6', {
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
