import { JSX, PropsWithChildren, useState } from 'react';

interface DisplayMoreProps {
  className?: string;
  id?: string;
  label?: string;
}

function DisplayMore(props: Readonly<PropsWithChildren<DisplayMoreProps>>): JSX.Element {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const { className, id, children, label = 'Mehr' } = props;
  return (
    <div id={id} className={className}>
      {isDisplayed && <div className="text-sm font-light lg:text-base lg:font-normal">{children}</div>}
      {!isDisplayed && (
        <div className="mt-2 text-right">
          <button
            className="border-link text-link hover:bg-link/15 dark:border-link-dark dark:text-link-dark dark:hover:bg-link-dark/15 cursor-pointer rounded border bg-transparent px-4 py-2 text-sm tracking-wider uppercase transition duration-150 ease-in-out"
            onClick={(): void => setIsDisplayed(true)}
          >
            {label}
          </button>
        </div>
      )}
    </div>
  );
}
export default DisplayMore;
