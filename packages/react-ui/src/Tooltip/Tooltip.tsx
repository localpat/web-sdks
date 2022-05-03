import * as BaseTooltip from '@radix-ui/react-tooltip';
import React, { PropsWithChildren } from 'react';
import { styled } from '../Theme';
import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from '../utils';

const TooltipBox = styled(BaseTooltip.Content, {
  borderRadius: '$0',
  padding: '$3 $4',
  fontSize: '$xs',
  color: '$white',
  backgroundColor: '$grayDefault',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade() },
      '&[data-side="right"]': { animationName: slideLeftAndFade() },
      '&[data-side="bottom"]': { animationName: slideUpAndFade() },
      '&[data-side="left"]': { animationName: slideRightAndFade() },
    },
  },
});

// TODO: refactor this to adjust more props and composing
// TODO: also handle <kbd></kbd> inputs
export const Tooltip: React.FC<PropsWithChildren<{ title: string }>> = ({ children, title }) => (
  <BaseTooltip.Root delayDuration={200}>
    <BaseTooltip.Trigger asChild>{children}</BaseTooltip.Trigger>
    <TooltipBox sideOffset={10} side="top">
      {title}
    </TooltipBox>
  </BaseTooltip.Root>
);
