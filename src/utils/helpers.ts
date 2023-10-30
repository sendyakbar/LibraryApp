export const formatDate = (date: Date): string => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return `${day} ${months[month]} ${year}`;
};

export const formatTime = (date: Date): string => {
  const d = new Date(date);
  const hours = d.getHours();
  const minutes = d.getMinutes();

  return `${hours}: ${minutes}`;
};
