import { generateId } from '@woap/utils/services/generateId';

import { Tag } from '.';

export const createTag = (name: string) => Tag.create({ name, id: generateId() });
