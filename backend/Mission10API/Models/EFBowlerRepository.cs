namespace Mission10API.Models
{
    public class EFBowlerRepository : IBowlerRepository
    {
        private BowlingLeagueContext _BowlingLeagueContext;
        public EFBowlerRepository(BowlingLeagueContext temp)
        {
            _BowlingLeagueContext = temp;
        }
        public IEnumerable<Bowler> Bowlers => _BowlingLeagueContext.Bowlers;
    }
}
