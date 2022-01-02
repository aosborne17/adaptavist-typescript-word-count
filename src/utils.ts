import { WordObjectType } from './types';

const compareSortFunction = (
  a: WordObjectType,
  b: WordObjectType,
  sortType: string,
  sortDirection: string
) => {
  const isLowToHighSort = sortDirection === 'asc';

  if (sortType === 'alphabetical') {
    const nameA = a.word.toUpperCase(); // ignore upper and lowercase
    const nameB = b.word.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      if (isLowToHighSort) return -1;
      return 1;
    }
    if (nameA > nameB) {
      if (isLowToHighSort) return 1;
      return -1;
    }
    // names must be equal
    return 0;
  }

  const aValue: number = a.value;
  const bValue: number = b.value;

  if (isLowToHighSort) return Number(aValue) - Number(bValue);

  return Number(bValue) - Number(aValue);
};

export default compareSortFunction;
