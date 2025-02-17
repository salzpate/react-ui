import { JSX, PropsWithChildren, useState } from 'react';

interface DisplayMoreProps {
  className?: string;
  id?: string;
  label?: string;
};

function DisplayMore(props: Readonly<PropsWithChildren<DisplayMoreProps>>): JSX.Element {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const { className, id, children, label = 'Mehr' } = props;
  return (
    <div id={id} className={className}>
      {isDisplayed && <div className="text-sm lg:text-base font-light lg:font-normal">{children}</div>}
      {!isDisplayed && (
        <div className="mt-2 text-right">
          <button
            className="bg-transparent text-secondary dark:text-secondary-dark text-sm uppercase tracking-wider py-2 px-4 border border-secondary rounded transition ease-in-out duration-150 hover:bg-secondary hover:bg-opacity-15 dark:border-secondary-dark dark:hover:bg-secondary-dark"
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

