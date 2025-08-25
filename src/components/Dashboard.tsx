import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff, Calendar, TrendingUp, TrendingDown, Wallet, PiggyBank, MoreHorizontal } from 'lucide-react';

const Dashboard = () => {
  const [valuesHidden, setValuesHidden] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Este mês');
  
  // Dados simulados baseados no HTML original
  const summaryData = {
    saldo: 562000,
    entradas: 78000,
    saidas: 43000,
    investimentos: 56000,
  };

  const transactions = [
    { id: 1, atividade: 'Reserva de Hotel', data: '2024-04-17', valor: 25500, tipo: 'entrada' },
    { id: 2, atividade: 'Passagem Aérea', data: '2024-04-15', valor: 32750, tipo: 'saida' },
    { id: 3, atividade: 'Supermercado', data: '2024-04-14', valor: 450, tipo: 'saida' },
    { id: 4, atividade: 'Salário', data: '2024-04-10', valor: 5200, tipo: 'entrada' },
  ];

  const goals = [
    { nome: 'Entrada da Casa', atual: 7250, meta: 20000, icon: '🏠', cor: 'green-primary' }
  ];

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const getSaudacao = () => {
    const hour = new Date().getHours();
    if (hour < 6) return 'Boa madrugada';
    if (hour < 12) return 'Bom dia';
    if (hour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  const periods = ['Este mês', 'Último mês', 'Este ano', 'Últimos 12 meses'];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Cabeçalho */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-primary">
            {getSaudacao()}, Bruno e Laura!
          </h1>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          {periods.map((period) => (
            <Button
              key={period}
              variant={selectedPeriod === period ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPeriod(period)}
              className={selectedPeriod === period ? 'bg-primary text-primary-foreground' : ''}
            >
              {period}
            </Button>
          ))}
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Selecionar período
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setValuesHidden(!valuesHidden)}
            title={valuesHidden ? 'Mostrar valores' : 'Ocultar valores'}
          >
            {valuesHidden ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6 shadow-card hover:shadow-hover transition-all duration-300">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-light/20 rounded-xl flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-green-primary" />
                </div>
              </div>
              <div className={`text-2xl font-bold text-green-primary ${valuesHidden ? 'blur-sm' : ''}`}>
                {formatCurrency(summaryData.saldo)}
              </div>
              <div className="text-sm text-muted-foreground mt-1">Saldo Total</div>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-card hover:shadow-hover transition-all duration-300">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
              </div>
              <div className={`text-2xl font-bold text-success ${valuesHidden ? 'blur-sm' : ''}`}>
                {formatCurrency(summaryData.entradas)}
              </div>
              <div className="text-sm text-muted-foreground mt-1">Entradas</div>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-card hover:shadow-hover transition-all duration-300">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-destructive" />
                </div>
              </div>
              <div className={`text-2xl font-bold text-destructive ${valuesHidden ? 'blur-sm' : ''}`}>
                {formatCurrency(summaryData.saidas)}
              </div>
              <div className="text-sm text-muted-foreground mt-1">Saídas</div>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-card hover:shadow-hover transition-all duration-300">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <PiggyBank className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
              <div className={`text-2xl font-bold text-accent-foreground ${valuesHidden ? 'blur-sm' : ''}`}>
                {formatCurrency(summaryData.investimentos)}
              </div>
              <div className="text-sm text-muted-foreground mt-1">Investimentos</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transações Recentes */}
        <Card className="lg:col-span-2 shadow-card">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Transações Recentes</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Atividade</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Data</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Valor</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-border/50">
                      <td className="py-4 px-2 font-medium">{transaction.atividade}</td>
                      <td className="py-4 px-2 text-muted-foreground">{formatDate(transaction.data)}</td>
                      <td className={`py-4 px-2 font-semibold ${valuesHidden ? 'blur-sm' : ''}`}>
                        {formatCurrency(transaction.valor)}
                      </td>
                      <td className="py-4 px-2">
                        <Badge 
                          variant={transaction.tipo === 'entrada' ? 'default' : 'destructive'}
                          className={transaction.tipo === 'entrada' ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}
                        >
                          {transaction.tipo === 'entrada' ? 'Entrada' : 'Saída'}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>

        {/* Estatísticas */}
        <Card className="shadow-card">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Estatísticas</h2>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="text-center">
                <div className={`text-2xl font-bold text-primary ${valuesHidden ? 'blur-sm' : ''}`}>
                  R$ 3.500
                </div>
                <div className="text-sm text-muted-foreground">Despesas Totais</div>
              </div>
              
              <div className="space-y-3">
                {[
                  { label: 'Moradia', percent: 60, amount: 2100, color: 'bg-primary' },
                  { label: 'Investimentos', percent: 15, amount: 525, color: 'bg-success' },
                  { label: 'Educação', percent: 12, amount: 420, color: 'bg-accent' },
                  { label: 'Alimentação', percent: 8, amount: 280, color: 'bg-secondary' },
                  { label: 'Entretenimento', percent: 5, amount: 175, color: 'bg-muted' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span>{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {item.percent}%
                      </Badge>
                      <span className={`font-semibold ${valuesHidden ? 'blur-sm' : ''}`}>
                        {formatCurrency(item.amount)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Segunda linha - Metas e Fluxo de Caixa */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Metas */}
        <Card className="shadow-card">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-6">Metas</h2>
            
            <div className="space-y-4">
              {goals.map((goal, index) => {
                const percentage = (goal.atual / goal.meta) * 100;
                return (
                  <div key={index} className="bg-muted/30 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-green-light/20 rounded-lg flex items-center justify-center text-lg">
                        {goal.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{goal.nome}</div>
                        <div className="text-sm text-muted-foreground">
                          <span className={valuesHidden ? 'blur-sm' : ''}>{formatCurrency(goal.atual)}</span> • 
                          <span className="font-semibold"> {percentage.toFixed(1)}%</span> 
                          <span> (Meta {valuesHidden ? 'oculta' : formatCurrency(goal.meta)})</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-green-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Fluxo de Caixa */}
        <Card className="shadow-card">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold">Fluxo de Caixa</h2>
                <div className="text-sm text-muted-foreground">
                  Saldo total <span className={`font-semibold ${valuesHidden ? 'blur-sm' : ''}`}>
                    {formatCurrency(summaryData.saldo)}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Este mês</Button>
                <Button variant="default" size="sm">Este ano</Button>
              </div>
            </div>
            
            <div className="flex items-center gap-6 mb-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span>Receita</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>Despesa</span>
              </div>
            </div>
            
            <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
              <div className="text-muted-foreground text-sm">Gráfico de Fluxo de Caixa</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;