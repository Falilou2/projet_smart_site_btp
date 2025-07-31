export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('fr-SN', {
    style: 'currency',
    currency: 'XOF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('fr-SN').format(num);
};

export const formatDate = (dateString: string): string => {
  return new Intl.DateTimeFormat('fr-SN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString));
};

export const getStatusColor = (status: string): string => {
  const colors = {
    'planning': 'bg-blue-100 text-blue-800',
    'in-progress': 'bg-orange-100 text-orange-800',
    'completed': 'bg-green-100 text-green-800',
    'on-hold': 'bg-red-100 text-red-800',
  };
  return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

export const getStatusText = (status: string): string => {
  const texts = {
    'planning': 'Planification',
    'in-progress': 'En cours',
    'completed': 'Terminé',
    'on-hold': 'En attente',
  };
  return texts[status as keyof typeof texts] || status;
};