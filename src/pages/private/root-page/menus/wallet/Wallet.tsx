import React, { useState, useEffect } from 'react';
import { DollarSign, Calendar, Users, TrendingUp, Zap, ArrowRight, Gift, ArrowDownToLine, X, CreditCard } from 'lucide-react';
import { useStore } from '../../../../../zustand/userStore';
import { getTempUserData } from '../../RootPage';
import { convertDecimalToNumber } from '../../../../../utils/decimal.utility';
import './Wallet.css';

function Wallet() {
  const { user } = useStore();
  const [tempUser, setTempUser] = React.useState<any>(null);

  // Obtener datos temporales del usuario
  useEffect(() => {
    const tempData = getTempUserData();
    if (tempData) {
      setTempUser(tempData);
    } else if (user) {
      // Si no hay datos temporales pero hay user en el store, usar ese
      setTempUser(user);
    }
  }, [user]); // Actualizar cuando cambie el user del store

  // Usar datos temporales si están disponibles, sino usar el store
  const userData = tempUser || user;
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [withdrawFormData, setWithdrawFormData] = useState({
    clabeType: 'existing', // 'existing' o 'new'
    selectedClabe: '',
    newClabe: '',
    amount: ''
  });
  const [withdrawErrorMessage, setWithdrawErrorMessage] = useState('');
  const [isSubmittingWithdraw, setIsSubmittingWithdraw] = useState(false);

  // Claves interbancarias guardadas (mock data - en producción vendría del backend)
  const savedClabes = [
    { id: '1', clabe: '012345678901234567', bank: 'BBVA', name: 'Cuenta Principal' },
    { id: '2', clabe: '987654321098765432', bank: 'Banorte', name: 'Cuenta Ahorros' }
  ];

  // Convertir valores Decimal a números - usar WalletSaldoMXN del usuario
  // Asegurar que siempre se use WalletSaldoMXN del usuario
  const balance = userData?.WalletSaldoMXN !== undefined && userData?.WalletSaldoMXN !== null
    ? convertDecimalToNumber(userData.WalletSaldoMXN)
    : 0.00;
  const pending = 245.50;
  const nextPayment = "15 Nov";
  const thisMonth = 245.50;
  const invitations = userData?.InvitacionesTotales || 0;
  const activeDays = 18;

  // Calcular puntos totales (WalletPuntos + WalletPuntosI)
  const walletPuntos = userData?.WalletPuntos || 0;
  const walletPuntosI = userData?.WalletPuntosI || 0;
  const totalPuntos = walletPuntos + walletPuntosI;

  const rewardsHistory = [
    {
      id: 1,
      icon: Calendar,
      title: "Meta 20 días cumplida",
      date: "1 Nov",
      amount: 150.00
    },
    {
      id: 2,
      icon: Users,
      title: "Invitación: María González",
      date: "28 Oct",
      amount: 50.00
    },
    {
      id: 3,
      icon: Zap,
      title: "Reto Octubre completado",
      date: "31 Oct",
      amount: 200.00
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Actividad diaria",
      date: "27 Oct",
      amount: 10.00
    }
  ];

  const redemptionOptions = [
    {
      id: 1,
      icon: DollarSign,
      title: "Transferencia Bancaria",
      subtitle: "Mínimo $500 MXN"
    },
    {
      id: 2,
      icon: Zap,
      title: "Renovar Membresía",
      subtitle: "Costo: $200 MXN"
    },
    {
      id: 3,
      icon: Gift,
      title: "Tienda Zona²",
      subtitle: "Productos desde $100"
    }
  ];

  return (
    <div className="wallet-page">
      {/* Header */}
      <div className="wallet-header">
        <h1 className="wallet-title">recompensas</h1>
        <button 
          className="withdraw-button"
          onClick={() => setIsWithdrawModalOpen(true)}
        >
          <ArrowDownToLine className="withdraw-icon" size={18} />
          <span>Retirar</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="wallet-content">
        {/* Balance Card */}
        <div className="balance-card">
          <div className="balance-header">
            <DollarSign className="balance-icon" size={24} />
            <span className="balance-label">Saldo Disponible</span>
          </div>
          <div className="balance-amount">
            ${balance.toFixed(2)} MXN
          </div>
          <div className="balance-footer">
            <div className="balance-info">
              <span className="balance-info-label">Puntos</span>
              <span className="balance-info-value">{totalPuntos.toLocaleString('es-MX')}</span>
            </div>
            <div className="balance-info">
              <span className="balance-info-label">Próximo pago</span>
              <span className="balance-info-value">{nextPayment}</span>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="summary-cards">
          <div className="summary-card">
            <Calendar className="summary-icon" size={24} />
            <div className="summary-amount">${thisMonth.toFixed(2)}</div>
            <div className="summary-label">Este mes</div>
          </div>
          <div className="summary-card">
            <Users className="summary-icon" size={24} />
            <div className="summary-amount">{invitations}</div>
            <div className="summary-label">Invitaciones</div>
          </div>
          <div className="summary-card">
            <TrendingUp className="summary-icon" size={24} />
            <div className="summary-amount">{activeDays}</div>
            <div className="summary-label">Días activos</div>
          </div>
        </div>

        {/* Rewards History */}
        <div className="rewards-history">
          <h2 className="rewards-history-title">Historial de Recompensas</h2>
          <div className="rewards-list">
            {rewardsHistory.map((reward) => {
              const IconComponent = reward.icon;
              return (
                <div key={reward.id} className="reward-item">
                  <div className="reward-icon-wrapper">
                    <IconComponent className="reward-icon" size={20} />
                  </div>
                  <div className="reward-info">
                    <div className="reward-title">{reward.title}</div>
                    <div className="reward-date">{reward.date}</div>
                  </div>
                  <div className="reward-amount">+${reward.amount.toFixed(2)}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Redemption Options */}
        <div className="redemption-options">
          <h2 className="redemption-options-title">Opciones de Canje</h2>
          <div className="redemption-list">
            {redemptionOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <div key={option.id} className="redemption-item">
                  <div className="redemption-icon-wrapper">
                    <IconComponent className="redemption-icon" size={24} />
                  </div>
                  <div className="redemption-info">
                    <div className="redemption-title">{option.title}</div>
                    <div className="redemption-subtitle">{option.subtitle}</div>
                  </div>
                  <ArrowRight className="redemption-arrow" size={20} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Withdraw Modal */}
      {isWithdrawModalOpen && (
        <div className="withdraw-modal-overlay" onClick={() => setIsWithdrawModalOpen(false)}>
          <div className="withdraw-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="withdraw-modal-close"
              onClick={() => setIsWithdrawModalOpen(false)}
            >
              <X size={24} />
            </button>
            
            <div className="withdraw-modal-header">
              <CreditCard className="withdraw-modal-icon" size={32} />
              <h2 className="withdraw-modal-title">Retirar Fondos</h2>
              <p className="withdraw-modal-subtitle">
                Selecciona una cuenta o ingresa una nueva clave interbancaria
              </p>
            </div>

            <form 
              className="withdraw-modal-form"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmittingWithdraw(true);
                setWithdrawErrorMessage('');

                // Validaciones
                const amount = parseFloat(withdrawFormData.amount);
                if (!withdrawFormData.amount || amount <= 0) {
                  setWithdrawErrorMessage('Ingresa un monto válido');
                  setIsSubmittingWithdraw(false);
                  return;
                }

                if (amount < 500) {
                  setWithdrawErrorMessage('El monto mínimo es $500 MXN');
                  setIsSubmittingWithdraw(false);
                  return;
                }

                if (amount > balance) {
                  setWithdrawErrorMessage(`El monto no puede exceder tu saldo disponible de $${balance.toFixed(2)} MXN`);
                  setIsSubmittingWithdraw(false);
                  return;
                }

                if (withdrawFormData.clabeType === 'existing' && !withdrawFormData.selectedClabe) {
                  setWithdrawErrorMessage('Selecciona una cuenta');
                  setIsSubmittingWithdraw(false);
                  return;
                }

                if (withdrawFormData.clabeType === 'new' && !withdrawFormData.newClabe) {
                  setWithdrawErrorMessage('Ingresa una clave interbancaria');
                  setIsSubmittingWithdraw(false);
                  return;
                }

                if (withdrawFormData.clabeType === 'new' && withdrawFormData.newClabe.length !== 18) {
                  setWithdrawErrorMessage('La CLABE debe tener 18 dígitos');
                  setIsSubmittingWithdraw(false);
                  return;
                }

                // Aquí iría la llamada a la API
                try {
                  // await APIs.withdraw({ ... });
                  console.log('Retiro:', withdrawFormData);
                  // Cerrar modal después de éxito
                  setIsWithdrawModalOpen(false);
                  setWithdrawFormData({
                    clabeType: 'existing',
                    selectedClabe: '',
                    newClabe: '',
                    amount: ''
                  });
                } catch (error) {
                  setWithdrawErrorMessage('Error al procesar el retiro');
                } finally {
                  setIsSubmittingWithdraw(false);
                }
              }}
            >
              <div className="withdraw-form-group">
                <label className="withdraw-form-label">Monto a retirar (MXN) *</label>
                <div className="withdraw-amount-input-wrapper">
                  <DollarSign className="withdraw-input-icon" size={20} />
                  <input
                    type="number"
                    className="withdraw-form-input"
                    placeholder="0.00"
                    value={withdrawFormData.amount}
                    onChange={(e) => {
                      const value = e.target.value;
                      const numValue = parseFloat(value);
                      const maxAmount = balance;
                      
                      // Validar que no exceda el saldo disponible
                      if (numValue > maxAmount) {
                        setWithdrawErrorMessage(`El monto no puede exceder tu saldo disponible de $${maxAmount.toFixed(2)} MXN`);
                      } else {
                        setWithdrawErrorMessage('');
                      }
                      
                      setWithdrawFormData(prev => ({ ...prev, amount: value }));
                    }}
                    min="500"
                    max={balance}
                    step="0.01"
                    required
                  />
                </div>
                <p className="withdraw-form-hint">
                  Mínimo $500 MXN • Máximo ${balance.toFixed(2)} MXN
                </p>
              </div>

              <div className="withdraw-form-group">
                <label className="withdraw-form-label">Tipo de cuenta *</label>
                <div className="withdraw-radio-group">
                  <label className="withdraw-radio-label">
                    <input
                      type="radio"
                      name="clabeType"
                      value="existing"
                      checked={withdrawFormData.clabeType === 'existing'}
                      onChange={(e) => {
                        setWithdrawFormData(prev => ({ ...prev, clabeType: e.target.value }));
                        setWithdrawErrorMessage('');
                      }}
                    />
                    <span>Usar cuenta guardada</span>
                  </label>
                  <label className="withdraw-radio-label">
                    <input
                      type="radio"
                      name="clabeType"
                      value="new"
                      checked={withdrawFormData.clabeType === 'new'}
                      onChange={(e) => {
                        setWithdrawFormData(prev => ({ ...prev, clabeType: e.target.value }));
                        setWithdrawErrorMessage('');
                      }}
                    />
                    <span>Nueva clave interbancaria</span>
                  </label>
                </div>
              </div>

              {withdrawFormData.clabeType === 'existing' ? (
                <div className="withdraw-form-group">
                  <label className="withdraw-form-label">Seleccionar cuenta *</label>
                  <select
                    className="withdraw-form-input"
                    value={withdrawFormData.selectedClabe}
                    onChange={(e) => {
                      setWithdrawFormData(prev => ({ ...prev, selectedClabe: e.target.value }));
                      setWithdrawErrorMessage('');
                    }}
                    required
                  >
                    <option value="">Selecciona una cuenta</option>
                    {savedClabes.map((clabe) => (
                      <option key={clabe.id} value={clabe.clabe}>
                        {clabe.name} - {clabe.bank} (****{clabe.clabe.slice(-4)})
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="withdraw-form-group">
                  <label className="withdraw-form-label">Clave Interbancaria (CLABE) *</label>
                  <input
                    type="text"
                    className="withdraw-form-input"
                    placeholder="000000000000000000"
                    value={withdrawFormData.newClabe}
                    onChange={(e) => {
                      // Solo permitir números y máximo 18 dígitos
                      const value = e.target.value.replace(/\D/g, '').slice(0, 18);
                      setWithdrawFormData(prev => ({ ...prev, newClabe: value }));
                      setWithdrawErrorMessage('');
                    }}
                    maxLength={18}
                    required
                  />
                  <p className="withdraw-form-hint">18 dígitos</p>
                </div>
              )}

              {withdrawErrorMessage && (
                <div className="withdraw-error-message">{withdrawErrorMessage}</div>
              )}

              <button
                type="submit"
                className="withdraw-submit-button"
                disabled={isSubmittingWithdraw}
              >
                {isSubmittingWithdraw ? 'Procesando...' : 'Confirmar Retiro'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wallet;
