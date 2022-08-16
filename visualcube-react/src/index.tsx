import React, { HTMLAttributes, useState, useEffect } from 'react';

import { Options } from './helpers/config';
import { parseEverything } from './helpers/parse_input';
import { generateImage } from './helpers/svg-parser';

export interface VisualCubeProps extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  options: Options;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
// : FC<VisualCubeProps> 
export const VisualCube =  ({options}: VisualCubeProps) => {
  const [buffer, setBuffer] = useState<Buffer>();
  
  useEffect(() => {
    generateImage(parseEverything(options)).then((b) => {
      setBuffer(b);
    })
  }, [options]);

  return (
    <div>
      <h1>hi</h1>
      <img src={`data:image/svg+xml;base64,${buffer && buffer.toString('base64')}`} />
    </div>
  )
};