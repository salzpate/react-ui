import { JSX, PropsWithChildren, ReactNode } from 'react';

interface DataListProps {
  headline: ReactNode;
}

function DataList(props: Readonly<PropsWithChildren<DataListProps>>): JSX.Element {
  const { headline, children } = props;

  return (
    <div className="flex w-full flex-col gap-2 pb-4 md:inline-flex md:flex-row md:gap-0">
      <h2 className="font-bold md:w-1/4">{headline}</h2>
      <div className="md:w-3/4">{children}</div>
    </div>
  );
}
export default DataList;
