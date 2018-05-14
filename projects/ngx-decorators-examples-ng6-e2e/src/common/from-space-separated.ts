export function fromSpaceSeparated(words: string): ReadonlyArray<string> {
  return words
    .split(' ')
    .map(word => word.trim())
    .filter(word => word !== '');
}
