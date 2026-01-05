export const getIconNameFromPath = (str: string): string => {
  return `${str.slice(str.lastIndexOf('/') + 1, -4)}`;
};
