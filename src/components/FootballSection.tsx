import { MatchData, FALLBACK_MATCHES } from "@/lib/football";

async function getMatches(): Promise<MatchData[]> {
  const apiKey = process.env.FOOTBALL_API_KEY;
  if (!apiKey || apiKey === "your_api_key_here") return FALLBACK_MATCHES;

  try {
    const today = new Date().toISOString().split("T")[0];
    const nextWeek = new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0];

    const leagueIds = [
      "2021", // Premier League
      "2014", // La Liga
      "2019", // Serie A
      "2002", // Bundesliga
      "2015", // Ligue 1
      "2001", // Champions League
    ];

    const allMatches: MatchData[] = [];

    for (const leagueId of leagueIds) {
      const res = await fetch(
        `https://api.football-data.org/v4/competitions/${leagueId}/matches?dateFrom=${today}&dateTo=${nextWeek}&status=SCHEDULED`,
        {
          headers: { "X-Auth-Token": apiKey },
          next: { revalidate: 3600 },
        }
      );

      if (!res.ok) continue;

      const data = await res.json();
      const leagueName = data.competition?.name || "Unknown";
      const leagueColor = getLeagueColor(leagueId);

      for (const match of (data.matches || []).slice(0, 1)) {
        allMatches.push({
          id: String(match.id),
          homeTeam: match.homeTeam?.shortName || match.homeTeam?.name || "TBD",
          awayTeam: match.awayTeam?.shortName || match.awayTeam?.name || "TBD",
          homeCrest: match.homeTeam?.crest || "",
          awayCrest: match.awayTeam?.crest || "",
          date: formatDate(match.utcDate),
          time: formatTime(match.utcDate),
          league: leagueName,
          leagueColor,
          status: "upcoming",
        });
      }
    }

    return allMatches.length > 0 ? allMatches.slice(0, 6) : FALLBACK_MATCHES;
  } catch {
    return FALLBACK_MATCHES;
  }
}

function getLeagueColor(id: string): string {
  const colors: Record<string, string> = {
    "2021": "#37003c",
    "2014": "#ff4b2b",
    "2019": "#0a3d6b",
    "2002": "#e2001a",
    "2015": "#091c3b",
    "2001": "#062058",
  };
  return colors[id] || "#2563eb";
}

function formatDate(utc: string): string {
  if (!utc) return "Coming Soon";
  const d = new Date(utc);
  return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
}

function formatTime(utc: string): string {
  if (!utc) return "";
  const d = new Date(utc);
  return d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

export default async function FootballSection() {
  const matches = await getMatches();

  return (
    <section className="bg-white py-14 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-4">
            Never Miss a Match
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Every league, every tournament, every game — live in HD & 4K. From the Premier League to
            the World Cup, it's all here.
          </p>
        </div>

        {/* Match Cards — scrolling marquee */}
        <div className="relative overflow-hidden mb-8 py-4" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
          <div className="flex gap-4 animate-marquee-slow marquee-pause w-max py-1">
            {[...matches, ...matches, ...matches].map((match, i) => (
            <div
              key={match.id}
              className="group flex-shrink-0 w-60 sm:w-64 rounded-2xl border-2 border-blue-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-blue-500 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: match.leagueColor }}
                >
                  {match.league}
                </span>
                {match.status === "live" && (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-red-500 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    LIVE
                  </span>
                )}
                {match.status === "finished" && match.score && (
                  <span className="text-xs font-bold text-slate-900">{match.score}</span>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
                  {match.homeCrest ? (
                    <img src={match.homeCrest} alt={match.homeTeam} className="h-10 w-10 sm:h-12 sm:w-12 object-contain" loading="lazy" />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-slate-100" />
                  )}
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 text-center truncate w-full">
                    {match.homeTeam}
                  </span>
                </div>

                <div className="flex-shrink-0 text-center">
                  {match.status === "live" ? (
                    <span className="text-lg font-black text-red-500">{match.score}</span>
                  ) : (
                    <span className="text-lg font-black text-blue-600 uppercase tracking-widest">VS</span>
                  )}
                </div>

                <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
                  {match.awayCrest ? (
                    <img src={match.awayCrest} alt={match.awayTeam} className="h-10 w-10 sm:h-12 sm:w-12 object-contain" loading="lazy" />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-slate-100" />
                  )}
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 text-center truncate w-full">
                    {match.awayTeam}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 text-xs text-slate-400 pt-3 border-t border-slate-100">
                <span className="text-blue-600">📅</span> {match.date}
                <span>·</span>
                <span className="text-blue-600">🕐</span> {match.time}
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* League Logos Row */}
        <div className="relative overflow-hidden py-6" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
          <div className="flex gap-10 animate-marquee-slow w-max">
            {[
              { name: "Premier League", src: "https://capology-e6a3.kxcdn.com/static/images/logos/uk/premier-league.svg" },
              { name: "LaLiga", src: "https://capology-e6a3.kxcdn.com/static/images/logos/es/la-liga.svg" },
              { name: "Serie A", src: "https://capology-e6a3.kxcdn.com/static/images/logos/it/serie-a.svg" },
              { name: "Bundesliga", src: "https://capology-e6a3.kxcdn.com/static/images/logos/de/1-bundesliga.svg" },
              { name: "Ligue 1", src: "https://capology-e6a3.kxcdn.com/static/images/logos/fr/ligue-1.svg" },
              { name: "World Cup 2026", src: "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/69f4a677a93ad097171c25d7_fifa-world-cup-2026-official-logo-footylogos.svg" },
              { name: "Saudi Pro League", src: "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68f97f9cf9d408dadd461506_saudi-pro-league-footballlogos-org.svg" },
              { name: "Premier League", src: "https://capology-e6a3.kxcdn.com/static/images/logos/uk/premier-league.svg" },
              { name: "LaLiga", src: "https://capology-e6a3.kxcdn.com/static/images/logos/es/la-liga.svg" },
              { name: "Serie A", src: "https://capology-e6a3.kxcdn.com/static/images/logos/it/serie-a.svg" },
              { name: "Bundesliga", src: "https://capology-e6a3.kxcdn.com/static/images/logos/de/1-bundesliga.svg" },
              { name: "Ligue 1", src: "https://capology-e6a3.kxcdn.com/static/images/logos/fr/ligue-1.svg" },
              { name: "World Cup 2026", src: "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/69f4a677a93ad097171c25d7_fifa-world-cup-2026-official-logo-footylogos.svg" },
              { name: "Saudi Pro League", src: "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68f97f9cf9d408dadd461506_saudi-pro-league-footballlogos-org.svg" },
            ].map((league, i) => (
              <div key={i} className="inline-flex flex-col items-center gap-3 px-4 select-none min-w-[110px]">
                <img src={league.src} alt={league.name} className="h-10 sm:h-12 w-auto object-contain" loading="lazy" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{league.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
