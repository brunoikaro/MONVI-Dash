import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  BarChart3, 
  PiggyBank,
  Settings,
  HelpCircle
} from 'lucide-react';

interface SidebarProps {
  activeRoute?: string;
  onNavigate?: (route: string) => void;
}

const Sidebar = ({ activeRoute = 'dashboard', onNavigate }: SidebarProps) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'transactions', label: 'Transações', icon: ArrowLeftRight },
    { id: 'analytics', label: 'Análises', icon: BarChart3 },
    { id: 'budget', label: 'Orçamento', icon: PiggyBank },
  ];

  const handleNavClick = (route: string) => {
    if (onNavigate) {
      onNavigate(route);
    }
  };

  return (
    <aside className="w-64 bg-sidebar-bg border-r border-border p-4 flex flex-col h-screen animate-slide-in">
      {/* Logo */}
      <div className="mb-8 px-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-primary rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-sm"></div>
          </div>
          <span className="text-xl font-bold text-primary">MONVI</span>
        </div>
      </div>

      {/* Navegação Principal */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeRoute === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={`w-full justify-start gap-3 px-3 py-6 h-auto font-medium transition-all duration-200 ${
                isActive 
                  ? 'bg-sidebar-active text-primary font-semibold shadow-active' 
                  : 'text-sidebar-foreground hover:bg-sidebar-active/50 hover:text-primary'
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Button>
          );
        })}
      </nav>

      {/* Seção Inferior */}
      <div className="space-y-2 mt-6 pt-6 border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 px-3 py-3 text-sidebar-foreground hover:bg-sidebar-active/50 hover:text-primary"
        >
          <Settings className="w-5 h-5" />
          <span>Configurações</span>
        </Button>
        
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 px-3 py-3 text-sidebar-foreground hover:bg-sidebar-active/50 hover:text-primary"
        >
          <HelpCircle className="w-5 h-5" />
          <span>Ajuda</span>
        </Button>
      </div>

      {/* CTA Upgrade (Placeholder) */}
      <div className="mt-6 p-4 bg-gradient-green rounded-lg text-white text-center">
        <div className="text-sm font-medium mb-2">Acesso Completo</div>
        <div className="text-xs opacity-90 mb-3">
          Tenha acesso a recursos avançados e análises detalhadas
        </div>
        <Button 
          size="sm" 
          className="w-full bg-white text-primary hover:bg-white/90 font-medium"
        >
          Fazer Upgrade
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;