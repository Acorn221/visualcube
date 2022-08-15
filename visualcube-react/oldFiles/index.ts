import { Options } from './helpers/config';
import { parseEverything } from './helpers/parse_input';
import { generateImage } from './helpers/svg-parser';

export const visualcube = (options: Options): Promise<Buffer> => {
  return generateImage(parseEverything(options));
};
