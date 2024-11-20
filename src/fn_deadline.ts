/**
 * Calculate the deadline based on the provided time.
 * @param time Time string in the format 'hh:mm:ss'.
 * @returns The deadline timestamp in milliseconds.
 */
export const fn_deadline = (time: string): number => {
  const [ hours, minutes, seconds ] = time.split(':').map(parseFloat);
  const totalMilliseconds = ((hours * 60 + minutes) * 60 + seconds) * 1000;
  return Date.now() + totalMilliseconds;
};
