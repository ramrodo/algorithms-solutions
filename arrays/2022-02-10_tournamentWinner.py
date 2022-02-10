# https://www.algoexpert.io/questions/Tournament%20Winner

def tournamentWinner(competitions, results):
    teamsDict = {}

    for i in range(len(competitions)):
        competition = competitions[i]
        homeTeam = competition[0]
        awayTeam = competition[1]
        result = results[i]

        if result == 1:
            if homeTeam in teamsDict:
                teamsDict[homeTeam] += 3
            else:
                teamsDict[homeTeam] = 3
        else:
            if awayTeam in teamsDict:
                teamsDict[awayTeam] += 3
            else:
                teamsDict[awayTeam] = 3

    # get winner
    best = 0
    winner = ""
    for k,v in teamsDict.items():
        if v > best:
            winner = k
            best = v

    return winner
