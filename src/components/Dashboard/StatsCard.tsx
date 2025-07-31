import React from 'react';
import { clsx } from 'clsx';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'increase' | 'decrease' | 'neutral';
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'orange' | 'purple';
}

export function StatsCard({ title, value, change, changeType, icon, color }: StatsCardProps) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600',
  };

  const changeColorClasses = {
    increase: 'text-green-600',
    decrease: 'text-red-600',
    neutral: 'text-gray-600',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={clsx(
              'text-sm font-medium mt-2',
              changeType && changeColorClasses[changeType]
            )}>
              {change}
            </p>
          )}
        </div>
        <div className={clsx(
          'w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center',
          colorClasses[color]
        )}>
          <div className="text-white">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}