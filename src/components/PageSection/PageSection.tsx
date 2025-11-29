import { JSX, PropsWithChildren, ReactNode } from 'react';

interface PageSectionProps {
  id: string;
  headline: ReactNode;
  className?: string;
  subSection?: boolean;
}

function PageSection(props: PropsWithChildren<PageSectionProps>): JSX.Element {
  const { id, headline, className, subSection = false, children } = props;

  return (
    <section id={id} className={className}>
      <div className="text-paragraph dark:text-paragraph-dark mx-auto max-w-7xl px-4 pt-4 text-base tracking-wide sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
        {subSection && <h2 className="text-heading dark:text-heading-dark text-xl font-medium tracking-tight uppercase sm:text-2xl lg:text-3xl">{headline}</h2>}
        {!subSection && <h1 className="text-heading dark:text-heading-dark text-2xl font-bold tracking-tight uppercase sm:text-3xl lg:text-4xl">{headline}</h1>}
        <div className="pt-4 text-sm font-light sm:pt-6 lg:pt-8 lg:text-base lg:font-normal">{children}</div>
      </div>
    </section>
  );
}

export default PageSection;
export type { PageSectionProps };
