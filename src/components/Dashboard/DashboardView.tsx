import React from 'react';
import { 
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import { StatsCard } from './StatsCard';
import { ProjectsChart } from './ProjectsChart';
import { RecentActivities } from './RecentActivities';
import { dashboardStats, projects } from '../../data/mockData';
import { formatCurrency, formatNumber } from '../../utils/formatters';

export function DashboardView() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <div className="xl:col-span-2">
          <StatsCard
            title="Projets Actifs"
            value={dashboardStats.activeProjects}
            change="+12% ce mois"
            changeType="increase"
            icon={<ClipboardDocumentListIcon className="w-6 h-6" />}
            color="blue"
          />
        </div>
        
        <div className="xl:col-span-2">
          <StatsCard
            title="Budget Total"
            value={formatCurrency(dashboardStats.totalBudget)}
            change="+8% ce mois"
            changeType="increase"
            icon={<CurrencyDollarIcon className="w-6 h-6" />}
            color="green"
          />
        </div>
        
        <div className="xl:col-span-2">
          <StatsCard
            title="Revenus Mensuels"
            value={formatCurrency(dashboardStats.monthlyRevenue)}
            change="+15% vs mois dernier"
            changeType="increase"
            icon={<ArrowTrendingUpIcon className="w-6 h-6" />}
            color="orange"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Score Sécurité"
          value={`${dashboardStats.safetyScore}%`}
          change="Excellent"
          changeType="increase"
          icon={<ShieldCheckIcon className="w-6 h-6" />}
          color="green"
        />
        
        <StatsCard
          title="Artisans Actifs"
          value={formatNumber(dashboardStats.artisansCount)}
          change="+23 ce mois"
          changeType="increase"
          icon={<UserGroupIcon className="w-6 h-6" />}
          color="purple"
        />
        
        <StatsCard
          title="Projets Terminés"
          value={projects.filter(p => p.status === 'completed').length}
          change="100% réussite"
          changeType="increase"
          icon={<ChartBarIcon className="w-6 h-6" />}
          color="blue"
        />
        
        <StatsCard
          title="Total Projets"
          value={dashboardStats.totalProjects}
          change="Portfolio croissant"
          changeType="increase"
          icon={<ClipboardDocumentListIcon className="w-6 h-6" />}
          color="orange"
        />
      </div>

      {/* Charts and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProjectsChart />
        </div>
        <div>
          <RecentActivities />
        </div>
      </div>
    </div>
  );
}