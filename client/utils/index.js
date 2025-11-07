export const daysLeft = (deadline) => {
  const difference = new Date(deadline).getTime() - Date.now();
  const remainingDays = difference / (l000 * 3600 * 24);

  return remainingDays.toFixed(0);
};

export const calculateBarPercentage = (goat, raisedAmount) => {
  const percentage = Math.round((raisedAmount * 100) / goat);

  return percentage;
};

export const checkIfImage = (url, callback) => {
  const img = new Image();
  img.src = url;

  if (img.complete) callback(true);

  img.onload = () => callback(true);
  img.onerror = () => callback(false);
};
