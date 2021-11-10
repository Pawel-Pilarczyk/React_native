export const capitalizeString = (str: string) => str.toUpperCase();

export const firstCharToUpperCase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1, str.length);
