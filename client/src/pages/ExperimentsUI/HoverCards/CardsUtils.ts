export interface CardsCouple {
  smallCardImage: string;
  bigCardImage: string;
}

export const getBigCardHoverTranslate = (index: number) => {
  if (index === 0) {
    return '-70% 4%';
  }
  if (index === 1) {
    return '-25% -4%';
  }
  if (index === 2) {
    return '25% -4%';
  }
  if (index === 3) {
    return '70% 4%';
  }

  return '0';
};

export const getBigCardHoverRotation = (index: number) => {
  if (index === 0) {
    return '-24deg';
  }
  if (index === 1) {
    return '-8deg';
  }
  if (index === 2) {
    return '8deg';
  }
  if (index === 3) {
    return '24deg';
  }

  return '0';
};

export const getSmallCardHoverTranslate = (index: number) => {
  if (index === 0) {
    return '-190% 170%';
  }
  if (index === 1) {
    return '-150% -100%';
  }
  if (index === 2) {
    return '210% 180%';
  }
  if (index === 3) {
    return '250% -50%';
  }

  return '0';
};

export const getSmallCardHoverRotation = (index: number) => {
  if (index === 0) {
    return '-15deg';
  }
  if (index === 1) {
    return '24deg';
  }
  if (index === 2) {
    return '8deg';
  }
  if (index === 3) {
    return '-15deg';
  }

  return '0';
};
