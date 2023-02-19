export const formatNumber = (digit: number) =>
  digit.toString().padStart(2, '0');

export const getTimerString = (date: Date) => {
  const [hours, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ].map(formatNumber);
  return `${hours}:${minutes}:${seconds}`;
};
