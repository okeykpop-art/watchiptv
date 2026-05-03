export interface MatchData {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeCrest: string;
  awayCrest: string;
  date: string;
  time: string;
  league: string;
  leagueColor: string;
  status: "live" | "upcoming" | "finished";
  score?: string;
}

export const TEAM_CRESTS: Record<string, string> = {
  "Arsenal": "https://crests.football-data.org/57.svg",
  "Chelsea": "https://crests.football-data.org/61.svg",
  "Liverpool": "https://crests.football-data.org/64.svg",
  "Manchester City": "https://crests.football-data.org/65.svg",
  "Manchester United": "https://crests.football-data.org/66.svg",
  "Tottenham": "https://crests.football-data.org/73.svg",
  "Real Madrid": "https://crests.football-data.org/86.svg",
  "Barcelona": "https://crests.football-data.org/81.svg",
  "Atletico Madrid": "https://crests.football-data.org/78.svg",
  "Bayern Munich": "https://crests.football-data.org/5.svg",
  "Borussia Dortmund": "https://crests.football-data.org/4.svg",
  "Paris Saint-Germain": "https://crests.football-data.org/524.svg",
  "Juventus": "https://crests.football-data.org/109.svg",
  "AC Milan": "https://crests.football-data.org/98.svg",
  "Inter Milan": "https://crests.football-data.org/108.svg",
  "Napoli": "https://crests.football-data.org/113.svg",
};

export const FALLBACK_MATCHES: MatchData[] = [
  {
    id: "f1",
    homeTeam: "Manchester City",
    awayTeam: "Arsenal",
    homeCrest: TEAM_CRESTS["Manchester City"],
    awayCrest: TEAM_CRESTS["Arsenal"],
    date: "Coming Soon",
    time: "16:00",
    league: "Premier League",
    leagueColor: "#37003c",
    status: "upcoming",
  },
  {
    id: "f2",
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    homeCrest: TEAM_CRESTS["Real Madrid"],
    awayCrest: TEAM_CRESTS["Barcelona"],
    date: "Coming Soon",
    time: "21:00",
    league: "LaLiga",
    leagueColor: "#ff4b2b",
    status: "upcoming",
  },
  {
    id: "f3",
    homeTeam: "Bayern Munich",
    awayTeam: "Borussia Dortmund",
    homeCrest: TEAM_CRESTS["Bayern Munich"],
    awayCrest: TEAM_CRESTS["Borussia Dortmund"],
    date: "Coming Soon",
    time: "18:30",
    league: "Bundesliga",
    leagueColor: "#e2001a",
    status: "upcoming",
  },
  {
    id: "f4",
    homeTeam: "AC Milan",
    awayTeam: "Inter Milan",
    homeCrest: TEAM_CRESTS["AC Milan"],
    awayCrest: TEAM_CRESTS["Inter Milan"],
    date: "Coming Soon",
    time: "20:45",
    league: "Serie A",
    leagueColor: "#0a3d6b",
    status: "upcoming",
  },
  {
    id: "f5",
    homeTeam: "Paris Saint-Germain",
    awayTeam: "Liverpool",
    homeCrest: TEAM_CRESTS["Paris Saint-Germain"],
    awayCrest: TEAM_CRESTS["Liverpool"],
    date: "Coming Soon",
    time: "21:00",
    league: "Champions League",
    leagueColor: "#062058",
    status: "upcoming",
  },
  {
    id: "f6",
    homeTeam: "Juventus",
    awayTeam: "Napoli",
    homeCrest: TEAM_CRESTS["Juventus"],
    awayCrest: TEAM_CRESTS["Napoli"],
    date: "Coming Soon",
    time: "18:00",
    league: "Serie A",
    leagueColor: "#0a3d6b",
    status: "upcoming",
  },
];
