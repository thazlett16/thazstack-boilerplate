import type { CardContentProps } from './components/card-content';
import type { CardDescriptionProps } from './components/card-description';
import type { CardFooterProps } from './components/card-footer';
import type { CardHeaderProps } from './components/card-header';
import type { CardRootProps } from './components/card-root';
import type { CardTitleProps } from './components/card-title';

import { CardContent } from './components/card-content';
import { CardDescription } from './components/card-description';
import { CardFooter } from './components/card-footer';
import { CardHeader } from './components/card-header';
import { CardRoot } from './components/card-root';
import { CardTitle } from './components/card-title';

export const Card = Object.assign(CardRoot, {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});

// DO I want to expose in this way? Probably not but we shall see
// export { CardRoot, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
export type { CardRootProps, CardHeaderProps, CardTitleProps, CardDescriptionProps, CardContentProps, CardFooterProps };

export type { CardVariants } from './variants';
export { cardVariants } from './variants';
