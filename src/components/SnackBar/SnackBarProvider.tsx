import React, { ReactNode, useState } from 'react';
import { createCtx } from '../../utils';
import SnackBar, { SnackBarTypes } from './SnackBar';

export const defaultDuration = 500;
export const defaultInterval = 250;

export type SnackbarProviderProps = {
  children: ReactNode;
};

type SnackbarContextType = {
  openSnackbar: (text: string, type: SnackBarTypes, duration: number) => void;
  closeSnackbar: () => void;
};

export const [useSnackBar, CtxProvider] = createCtx<SnackbarContextType>();

function SnackBarProvider(props: SnackbarProviderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(
    setTimeout(() => {
      return;
    }, 1),
  );
  const [text, setText] = useState('');
  const [type, setType] = useState(SnackBarTypes.info);
  const { children } = props;

  const triggerSnackbar = (text: string, type: SnackBarTypes, duration: number): void => {
    setText(text);
    setType(type);
    setIsOpen(true);
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setIsOpen(false), duration));
  };

  const openSnackbar = (text: string, type: SnackBarTypes, duration: number): void => {
    if (isOpen === true) {
      setIsOpen(false);
      setTimeout(() => {
        triggerSnackbar(text, type, duration);
      }, defaultInterval);
    } else {
      triggerSnackbar(text, type, duration);
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
