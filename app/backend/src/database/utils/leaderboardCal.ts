interface IMatch {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number
  awayTeamGoals: number,
  inProgress: boolean,
  teamHome?: string;
  teamAway?: string
}

const calculoVitorias = (matches: IMatch[], idTeam: number): number => {
  const totalVitorias = matches.reduce((acc, curr) => {
    if (curr.homeTeam === idTeam && curr.homeTeamGoals > curr.awayTeamGoals) return acc + 1;
    if (curr.awayTeam === idTeam && curr.awayTeamGoals > curr.homeTeamGoals) return acc + 1;
    return acc;
  }, 0);
  return totalVitorias;
};
const calculoEmpates = (matches: IMatch[], idTeam: number) => {
  const totalEmpates = matches.reduce((acc, curr) => {
    if (curr.homeTeam === idTeam && curr.homeTeamGoals === curr.awayTeamGoals) return acc + 1;
    if (curr.awayTeam === idTeam && curr.awayTeamGoals === curr.homeTeamGoals) return acc + 1;
    return acc;
  }, 0);
  return totalEmpates;
};
const calculoDerrotas = (matches: IMatch[], idTeam: number) => {
  const totalDerrotas = matches.reduce((acc, curr) => {
    if (curr.homeTeam === idTeam && curr.homeTeamGoals < curr.awayTeamGoals) return acc + 1;
    if (curr.awayTeam === idTeam && curr.awayTeamGoals < curr.homeTeamGoals) return acc + 1;
    return acc;
  }, 0);
  return totalDerrotas;
};

const totalJogos = (matches: IMatch[], idTeam: number) => {
  const jogos = matches.reduce((acc, curr) => {
    if (curr.homeTeam === idTeam || curr.awayTeam === idTeam) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return jogos;
};

const totalPontos = (matches: IMatch[], idTeam: number) => {
  const totalV = calculoVitorias(matches, idTeam);
  const calculoE = calculoEmpates(matches, idTeam);

  const pontuação = (totalV * 3) + (calculoE * 1);
  return pontuação;
};

const calculoGolsFeitos = (matches: IMatch[], idTeam: number) => {
  const goalFeito = matches.reduce((acc, curr) => {
    if (curr.homeTeam === idTeam) {
      return acc + curr.homeTeamGoals;
    }
    if (curr.awayTeam === idTeam) {
      return acc + curr.awayTeamGoals;
    }
    return acc;
  }, 0);
  return goalFeito;
};

const calculoGolsSofridos = (matches: IMatch[], idTeam: number) => {
  const golsSofridos = matches.reduce((acc, curr) => {
    if (curr.homeTeam === idTeam) {
      return acc + curr.awayTeamGoals;
    }
    if (curr.awayTeam === idTeam) {
      return acc + curr.homeTeamGoals;
    }
    return acc;
  }, 0);
  return golsSofridos;
};

const calcularSaldoDeGol = (matches: IMatch[], idTeam: number) => {
  const golsFeitos = calculoGolsFeitos(matches, idTeam);
  const golsSofridos = calculoGolsSofridos(matches, idTeam);

  const saldoDeGol = golsFeitos - golsSofridos;
  return saldoDeGol;
};

const calculoEficiencia = (matches: IMatch[], idTeam: number) => {
  const totalPonto = totalPontos(matches, idTeam);
  const totalJogo = totalJogos(matches, idTeam);

  const rendimento = (totalPonto / (totalJogo * 3)) * 100;
  return rendimento.toFixed(2);
};

const LeaderboardGene = (matches: IMatch[], idTeam: number) => ({
  totalPoints: totalPontos(matches, idTeam),
  totalGames: totalJogos(matches, idTeam),
  totalVictories: calculoVitorias(matches, idTeam),
  totalDraws: calculoEmpates(matches, idTeam),
  totalLosses: calculoDerrotas(matches, idTeam),
  goalsFavor: calculoGolsFeitos(matches, idTeam),
  goalsOwn: calculoGolsSofridos(matches, idTeam),
  goalsBalance: calcularSaldoDeGol(matches, idTeam),
  efficiency: calculoEficiencia(matches, idTeam),

});

export default LeaderboardGene;
