import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const [activeRoute, setActiveRoute] = useState('dashboard');

  const handleNavigate = (route: string) => {
    setActiveRoute(route);
  };

  const renderContent = () => {
    switch (activeRoute) {
      case 'dashboard':
        return <Dashboard />;
      case 'transactions':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-primary mb-4">Transações</h1>
            <p className="text-muted-foreground">Página de transações em desenvolvimento...</p>
          </div>
        );
      case 'analytics':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-primary mb-4">Análises</h1>
            <p className="text-muted-foreground">Página de análises em desenvolvimento...</p>
          </div>
        );
      case 'budget':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-primary mb-4">Orçamento</h1>
            <p className="text-muted-foreground">Página de orçamento em desenvolvimento...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar activeRoute={activeRoute} onNavigate={handleNavigate} />
      <main className="flex-1 overflow-auto">
        <div className="glass-effect min-h-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
