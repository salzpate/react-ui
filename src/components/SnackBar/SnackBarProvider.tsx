// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { createContext, ReactNode, useContext, useState } from 'react';
import SnackBar, { SnackBarTypes } from './SnackBar';

export const defaultDuration = 500;
export const defaultInterval = 250;

export type SnackBarProviderProps = {
  children: ReactNode;
};

export type SnackBarContextType = {
  openSnackbar: (text: string, type: SnackBarTypes, duration: number) => void;
  closeSnackbar: () => void;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// eslint-disable-next-line @typescript-eslint/ban-types
function createCtx<ContextType extends {} | null>() {
  const ctx = createContext<ContextType | undefined>(undefined);
  function useCtx(): ContextType | undefined {
    const c = useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

export const [useSnackBar, CtxProvider] = createCtx<SnackBarContextType>();

function SnackBarProvider(props: SnackBarProviderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(
    setTimeout(() => {
      return;
    }, 1),
  );
  const [text, setText] = useState('');
  const [type, setType] = useState(SnackBarTypes.info);
  const { children } = props;

  const triggerSnackbar = (snackbarText: string, snackbarType: SnackBarTypes, duration: number): void => {
    setText(snackbarText);
    setType(snackbarType);
    setIsOpen(true);
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setIsOpen(false), duration));
  };

  const openSnackbar = (snackbarText: string, snackbarType: SnackBarTypes, duration: number): void => {
    if (isOpen === true) {
      setIsOpen(false);
      setTimeout(() => {
        triggerSnackbar(snackbarText, snackbarType, duration);
      }, defaultInterval);
    } else {
      triggerSnackbar(snackbarText, snackbarType, duration);
    }
  };

  const closeSnackbar = (): void => {
    setIsOpen(false);
  };

  return (
    <CtxProvider value={{ openSnackbar, closeSnackbar }}>
      {children}

      {isOpen && <SnackBar text={text} type={type} closeSnackbar={closeSnackbar} />}
    </CtxProvider>
  );
}

export default SnackBarProvider;
