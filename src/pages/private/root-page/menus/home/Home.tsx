import React from 'react';
import { useStore } from '../../../../../zustand/userStore';
import { 
  TrendingUp, 
  MapPin, 
  Zap
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import '../../RootPage.css';

function Home() {
  const { user } = useStore();
  
  // Obtener el nombre del usuario (usar name o AliasRunner)
  const userName = user?.name?.split(' ')[0] + ' ' + (user?.name?.split(' ')[1]?.[0] || '') || 'Usuario';
  
  // Obtener saludo según la hora
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Buenos días';
    if (hour < 18) return 'Buenas tardes';
    return 'Buenas noches';
  };

  // Datos para el gráfico circular de frecuencia cardíaca
  const heartRateData = [
    { name: 'Zona', value: 71 },
    { name: 'Resto', value: 29 }
  ];

  const COLORS = ['#bde901', '#1a1f2a'];

  return (
    <>
      {/* Header */}
      <div className="root-header">
        <div className="greeting-section">
          <h1 className="greeting">{getGreeting()}</h1>
          <h2 className="user-name">{userName}</h2>
          <div className="device-status">
            <span className="status-dot"></span>
            <span>Dispositivo conectado</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="root-content">
        {/* Heart Rate Card */}
        <div className="card heart-rate-card">
          <h3 className="card-title">Frecuencia Cardíaca</h3>
          <div className="heart-rate-content">
            <div className="bpm-section">
              <div className="bpm-value">128</div>
              <div className="bpm-label">BPM</div>
            </div>
            <div className="zone-badge">
              <span className="zone-label">Zona Actual</span>
              <span className="zone-value">Zona 2</span>
            </div>
          </div>
          
          <div className="heart-rate-chart">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={heartRateData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                >
                  {heartRateData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="chart-center-text">
              <div className="chart-percentage">71%</div>
              <div className="chart-label">de FC máx</div>
            </div>
          </div>

          <div className="zones-bar">
            <div className="zone-item">Z1</div>
            <div className="zone-item active">Z2</div>
            <div className="zone-item">Z3</div>
            <div className="zone-item">Z4</div>
            <div className="zone-item">Z5</div>
          </div>
        </div>

        {/* Activity Summary Cards */}
        <div className="activity-cards">
          <div className="activity-card">
            <TrendingUp className="activity-icon steps-icon" size={24} />
            <div className="activity-info">
              <div className="activity-label">Pasos</div>
              <div className="activity-value">8,450</div>
            </div>
          </div>
          
          <div className="activity-card">
            <MapPin className="activity-icon distance-icon" size={24} />
            <div className="activity-info">
              <div className="activity-label">Distancia</div>
              <div className="activity-value">6.2 km</div>
            </div>
          </div>
          
          <div className="activity-card">
            <Zap className="activity-icon calories-icon" size={24} />
            <div className="activity-info">
              <div className="activity-label">Calorías</div>
              <div className="activity-value">420 kcal</div>
            </div>
          </div>
        </div>

        {/* Monthly Progress Card */}
        <div className="card progress-card">
          <h3 className="card-title">Progreso del Mes</h3>
          
          <div className="progress-item">
            <div className="progress-header">
              <span className="progress-label">Días activos</span>
              <span className="progress-value">18/20 días</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '90%' }}></div>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-header">
              <span className="progress-label">Meta mensual</span>
              <span className="progress-value">124/150 km</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '82.67%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
