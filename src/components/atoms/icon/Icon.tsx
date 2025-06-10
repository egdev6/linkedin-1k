import { cn } from '@helpers/utils';
import { DynamicIcon } from 'lucide-react/dynamic';
import type { FC } from 'react';
import type { IconProps } from './types';

const Icon: FC<IconProps> = ({ name, color = 'text-accent', colorDark = 'text-accent', size = 24, className }) => {
  return <DynamicIcon name={name} className={cn(color, colorDark, className)} size={size} />;
};

export default Icon;
