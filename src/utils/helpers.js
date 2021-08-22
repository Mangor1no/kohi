export const chunk = (array, chunkSize = 1) => {
  return Array(Math.ceil(array.length / chunkSize))
    .fill()
    .map((_, index) => index * chunkSize)
    .map((begin) => array.slice(begin, begin + chunkSize));
};

export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
