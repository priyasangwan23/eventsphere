/**
 * Calculate the time remaining until a given date
 * @param {Date|string} targetDate 
 * @returns {object} { days, hours, minutes, seconds, isExpired }
 */
export const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  } else {
    timeLeft = { isExpired: true };
  }

  return timeLeft;
};

/**
 * Get color scheme based on days remaining
 * @param {number} days 
 * @returns {string} Tailwind color classes
 */
export const getUrgencyColor = (days) => {
  if (days < 1) return 'text-red-500 bg-red-500/10 border-red-500/20';
  if (days < 3) return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
  return 'text-green-500 bg-green-500/10 border-green-500/20';
};
