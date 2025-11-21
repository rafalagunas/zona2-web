import React from 'react';
import { Trophy } from 'lucide-react';
import { useStore } from '../../../../../zustand/userStore';
import './Community.css';

function Community() {
  const { user } = useStore();

  // Obtener iniciales del usuario
  const getUserInitials = (name: string) => {
    if (!name) return 'U';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const userName = user?.name || 'Usuario';
  const userInitials = getUserInitials(userName);

  const activeChallenges = [
    {
      id: 1,
      title: "Reto 50km del Mes",
      daysRemaining: 8,
      progress: 38.5,
      total: 50,
      reward: 150,
      percentage: 77
    },
    {
      id: 2,
      title: "Zona 2 Challenge",
      daysRemaining: 15,
      progress: 12.0,
      total: 20,
      reward: 200,
      percentage: 60
    }
  ];

  const leaderboard = [
    {
      id: 1,
      rank: 1,
      initials: userInitials,
      name: userName + " (Tú)",
      score: 2450,
      isCurrentUser: true
    },
    {
      id: 2,
      rank: 2,
      initials: "LT",
      name: "Laura Torres",
      score: 2380,
      isCurrentUser: false
    },
    {
      id: 3,
      rank: 3,
      initials: "MA",
      name: "Miguel Ángel",
      score: 2215,
      isCurrentUser: false
    },
    {
      id: 4,
      rank: 4,
      initials: "SR",
      name: "Sofia Ramírez",
      score: 2180,
      isCurrentUser: false
    },
    {
      id: 5,
      rank: 5,
      initials: "DI",
      name: "Diego López",
      score: 2050,
      isCurrentUser: false
    }
  ];

  const getRankColor = (rank: number) => {
    if (rank === 1) return '#bde901'; // Amarillo/verde para el primero
    if (rank === 2) return '#9ca3af'; // Gris para el segundo
    if (rank === 3) return '#FF6B35'; // Naranja para el tercero
    return 'transparent';
  };

  return (
    <div className="community-page">
      {/* Active Challenges Section */}
      <div className="community-content">
        <div className="challenges-section">
          <h2 className="section-title">Retos Activos</h2>
          <div className="challenges-list">
          {activeChallenges.map((challenge) => (
            <div key={challenge.id} className="challenge-card">
              <div className="challenge-header">
                <div className="challenge-info">
                  <h3 className="challenge-title">{challenge.title}</h3>
                  <span className="challenge-days">{challenge.daysRemaining} días restantes</span>
                </div>
                <div className="challenge-reward-wrapper">
                  <div className="challenge-reward">${challenge.reward}</div>
                  <div className="challenge-percentage">{challenge.percentage}%</div>
                </div>
              </div>
              <div className="challenge-progress">
                <div className="challenge-progress-text">
                  {challenge.progress} / {challenge.total} km
                </div>
                <div className="challenge-progress-bar-container">
                  <div 
                    className="challenge-progress-bar" 
                    style={{ width: `${challenge.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Leaderboard Section */}
        <div className="leaderboard-section">
          <div className="leaderboard-header">
            <h2 className="section-title">Clasificación</h2>
            <Trophy className="trophy-icon" size={20} />
          </div>
          <div className="leaderboard-card">
            {leaderboard.map((entry) => (
              <div 
                key={entry.id} 
                className={`leaderboard-item ${entry.isCurrentUser ? 'current-user' : ''}`}
              >
                <div className="leaderboard-rank" style={{ backgroundColor: getRankColor(entry.rank) }}>
                  {entry.rank}
                </div>
                <div className="leaderboard-avatar">
                  {entry.initials}
                </div>
                <div className="leaderboard-name">
                  {entry.name}
                </div>
                <div className="leaderboard-score">
                  {entry.score}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
