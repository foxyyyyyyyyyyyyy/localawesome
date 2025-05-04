// src/Icon.tsx
import React, { useEffect } from 'react';
import { useFontAwesome } from './FontAwesomeContext';

const typeMap: { [key: string]: string } = {
  solid: 'fas',
  regular: 'far',
  light: 'fal',
  brands: 'fab',
};

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  iconName: string;
  iconType?: 'solid' | 'regular' | 'light' | 'brands';
  size?:
    | 'xs'
    | 'sm'
    | 'lg'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x';
  spin?: boolean;
  pulse?: boolean;
  border?: boolean;
  flip?: 'horizontal' | 'vertical' | 'both';
  rotation?: 90 | 180 | 270;
  pull?: 'left' | 'right';
  inverse?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

function Icon({ iconName, iconType = 'solid', ...props }: IconProps) {
  const { cssUrl } = useFontAwesome();

  useEffect(() => {
    if (cssUrl) {
      // Check if the CSS is already loaded to prevent re-adding it on every render
      if (!document.querySelector(`link[href="${cssUrl}"]`)) {
        const link = document.createElement('link');
        link.href = cssUrl;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
    }
    return () => {
      if (cssUrl) {
        const link = document.querySelector(`link[href="${cssUrl}"]`);
        if (link) {
          link.remove();
        }
      }
    };
  }, [cssUrl]);

  const faType = typeMap[iconType] || 'fas';
  const classNameBase = `${faType} fa-${iconName}`;

  const {
    size,
    spin,
    pulse,
    border,
    flip,
    rotation,
    pull,
    inverse,
    className,
    style,
    ...otherProps
  } = props;

  const faClasses: string[] = [];

  if (size) faClasses.push(`fa-${size}`);
  if (spin) faClasses.push('fa-spin');
  if (pulse) faClasses.push('fa-pulse');
  if (border) faClasses.push('fa-border');

  if (flip) {
    if (flip === 'horizontal') faClasses.push('fa-flip-horizontal');
    else if (flip === 'vertical') faClasses.push('fa-flip-vertical');
    else faClasses.push('fa-flip-both'); // Default to both if flip is not horizontal or vertical
  }

  if (rotation) faClasses.push(`fa-rotate-${rotation}`);
  if (pull) faClasses.push(`fa-pull-${pull}`);
  if (inverse) faClasses.push('fa-inverse');

  const finalClassName = [
    classNameBase,
    ...(className ? [className] : []),
    ...faClasses,
  ].join(' ');

  return (
    <i
      className={finalClassName}
      style={style}
      {...otherProps}
      aria-hidden={true}
    ></i>
  );
}

export default Icon;
