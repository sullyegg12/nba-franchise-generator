const playerPool = {
    PG: [
        { name: "Magic Johnson", era: "1980s Lakers", rating: 98 },
        { name: "Stephen Curry", era: "2010s Warriors", rating: 98 },
        { name: "Oscar Robertson", era: "1960s Royals", rating: 95 },
        { name: "John Stockton", era: "1990s Jazz", rating: 94 },
        { name: "Steve Nash", era: "2000s Suns", rating: 93 },
        { name: "Kyrie Irving", era: "2016 Cavaliers", rating: 91 },
        { name: "Chris Paul", era: "2008 Hornets", rating: 95 },
        { name: "Russell Westbrook", era: "2017 Thunder", rating: 94 },
        { name: "Damian Lillard", era: "2020 Blazers", rating: 94 },
        { name: "Ja Morant", era: "2023 Grizzlies", rating: 91 },
        { name: "Trae Young", era: "2022 Hawks", rating: 90 },
        { name: "Shai Gilgeous-Alexander", era: "2025 Thunder", rating: 97 },
        { name: "Luka Doncic", era: "2024 Mavericks", rating: 98 },
        { name: "Jalen Brunson", era: "2025 Knicks", rating: 92 },
        { name: "Jrue Holiday", era: "2021 Bucks", rating: 89 },
        { name: "Rajon Rondo", era: "2010 Celtics", rating: 89 },
        { name: "Gilbert Arenas", era: "2007 Wizards", rating: 90 },
        { name: "Tony Parker", era: "2007 Spurs", rating: 91 },
        { name: "Mark Price", era: "1990s Cavaliers", rating: 89 },
        { name: "Penny Hardaway", era: "1995 Magic", rating: 92 },
        { name: "Terry Porter", era: "1990s Blazers", rating: 85 },
        { name: "Mike Bibby", era: "2002 Kings", rating: 86 },
        { name: "Jameer Nelson", era: "2009 Magic", rating: 83 },
        { name: "Fred VanVleet", era: "2023 Raptors", rating: 84 },
        { name: "Tyrese Haliburton", era: "2025 Pacers", rating: 94 },
        { name: "De'Aaron Fox", era: "2024 Kings", rating: 91 },
        { name: "Chauncey Billups", era: "2004 Pistons", rating: 89 },
        { name: "Deron Williams", era: "2000s Jazz", rating: 88 },
        { name: "Baron Davis", era: "2007 Warriors", rating: 86 },
        { name: "Mike Conley", era: "2010s Grizzlies", rating: 85 },
        { name: "Kemba Walker", era: "2010s Hornets", rating: 84 },
        { name: "Goran Dragic", era: "2014 Suns", rating: 83 },
        { name: "Kirk Hinrich", era: "2000s Bulls", rating: 81 },
        { name: "Raymond Felton", era: "2010 Knicks", rating: 80 },
        { name: "Patrick Beverley", era: "2010s Rockets", rating: 78 },
        { name: "Ish Smith", era: "2010s Pistons", rating: 74 },
        { name: "Matthew Dellavedova", era: "2016 Cavaliers", rating: 72 }
    ],
    SG: [
        { name: "Michael Jordan", era: "1996 Bulls", rating: 99 },
        { name: "Kobe Bryant", era: "2000s Lakers", rating: 97 },
        { name: "Dwyane Wade", era: "2006 Heat", rating: 95 },
        { name: "James Harden", era: "2018 Rockets", rating: 94 },
        { name: "George Gervin", era: "1980s Spurs", rating: 93 },
        { name: "Reggie Miller", era: "1990s Pacers", rating: 92 },
        { name: "Vince Carter", era: "2001 Raptors", rating: 92 },
        { name: "Tracy McGrady", era: "2003 Magic", rating: 95 },
        { name: "Anthony Edwards", era: "2025 Timberwolves", rating: 94 },
        { name: "Donovan Mitchell", era: "2025 Cavaliers", rating: 92 },
        { name: "Devin Booker", era: "2024 Suns", rating: 93 },
        { name: "Brandon Roy", era: "2009 Blazers", rating: 91 },
        { name: "Mitch Richmond", era: "1990s Kings", rating: 89 },
        { name: "Latrell Sprewell", era: "1990s Warriors", rating: 87 },
        { name: "Michael Redd", era: "2000s Bucks", rating: 88 },
        { name: "Jamal Crawford", era: "2010s Clippers", rating: 85 },
        { name: "Lou Williams", era: "2019 Clippers", rating: 84 },
        { name: "Jason Richardson", era: "2000s Warriors", rating: 86 },
        { name: "Eddie Jones", era: "1990s Lakers", rating: 87 },
        { name: "Bradley Beal", era: "2021 Wizards", rating: 89 },
        { name: "Zach LaVine", era: "2022 Bulls", rating: 87 },
        { name: "Allen Iverson", era: "2001 76ers", rating: 93 },
        { name: "Ray Allen", era: "2008 Celtics", rating: 90 },
        { name: "Manu Ginobili", era: "2000s Spurs", rating: 88 },
        { name: "Klay Thompson", era: "2010s Warriors", rating: 88 },
        { name: "Demar DeRozan", era: "2010s Raptors", rating: 86 },
        { name: "CJ McCollum", era: "2010s Trail Blazers", rating: 85 },
        { name: "Rip Hamilton", era: "2004 Pistons", rating: 84 },
        { name: "Jason Terry", era: "2011 Mavericks", rating: 83 },
        { name: "JJ Redick", era: "2010s Clippers", rating: 82 },
        { name: "Joe Harris", era: "2020 Nets", rating: 80 },
        { name: "Tony Allen", era: "2010s Grizzlies", rating: 80 },
        { name: "Iman Shumpert", era: "2015 Cavaliers", rating: 76 },
        { name: "Austin Rivers", era: "2010s Clippers", rating: 75 },
        { name: "Wayne Ellington", era: "2010s Heat", rating: 73 }
    ],
    SF: [
        { name: "LeBron James", era: "2010s Heat/Cavs", rating: 99 },
        { name: "Larry Bird", era: "1980s Celtics", rating: 98 },
        { name: "Kevin Durant", era: "2017 Warriors", rating: 96 },
        { name: "Kawhi Leonard", era: "2019 Raptors", rating: 95 },
        { name: "Scottie Pippen", era: "1996 Bulls", rating: 95 },
        { name: "Dominique Wilkins", era: "1980s Hawks", rating: 95 },
        { name: "Elgin Baylor", era: "1960s Lakers", rating: 97 },
        { name: "Jimmy Butler", era: "2023 Heat", rating: 92 },
        { name: "Jayson Tatum", era: "2025 Celtics", rating: 96 },
        { name: "Jaylen Brown", era: "2025 Celtics", rating: 91 },
        { name: "Grant Hill", era: "1990s Pistons", rating: 94 },
        { name: "Paul Pierce", era: "2008 Celtics", rating: 91 },
        { name: "Shawn Marion", era: "2000s Suns", rating: 89 },
        { name: "Andre Iguodala", era: "2015 Warriors", rating: 86 },
        { name: "Peja Stojakovic", era: "2004 Kings", rating: 89 },
        { name: "Rashard Lewis", era: "2009 Magic", rating: 85 },
        { name: "Richard Jefferson", era: "2000s Nets", rating: 84 },
        { name: "Mikal Bridges", era: "2024 Nets", rating: 85 },
        { name: "OG Anunoby", era: "2025 Knicks", rating: 84 },
        { name: "Franz Wagner", era: "2025 Magic", rating: 88 },
        { name: "Julius Erving", era: "1980s 76ers", rating: 94 },
        { name: "Carmelo Anthony", era: "2013 Knicks", rating: 89 },
        { name: "Paul George", era: "2010s Pacers", rating: 88 },
        { name: "Gordon Hayward", era: "2017 Jazz", rating: 85 },
        { name: "Luol Deng", era: "2010s Bulls", rating: 84 },
        { name: "Hedo Turkoglu", era: "2009 Magic", rating: 83 },
        { name: "Danilo Gallinari", era: "2010s Nuggets", rating: 82 },
        { name: "Trevor Ariza", era: "2009 Lakers", rating: 81 },
        { name: "Harrison Barnes", era: "2015 Warriors", rating: 80 },
        { name: "Jae Crowder", era: "2010s Celtics", rating: 79 },
        { name: "Kyle Korver", era: "2015 Hawks", rating: 78 },
        { name: "Corey Brewer", era: "2010s Timberwolves", rating: 74 },
        { name: "Jared Dudley", era: "2010s Suns", rating: 73 }
    ],
    PF: [
        { name: "Tim Duncan", era: "2000s Spurs", rating: 98 },
        { name: "Giannis Antetokounmpo", era: "2021 Bucks", rating: 97 },
        { name: "Kevin Garnett", era: "2004 Timberwolves", rating: 95 },
        { name: "Dirk Nowitzki", era: "2011 Mavericks", rating: 95 },
        { name: "Anthony Davis", era: "2020 Lakers", rating: 95 },
        { name: "Bob Pettit", era: "1950s Hawks", rating: 96 },
        { name: "Elvin Hayes", era: "1970s Bullets", rating: 93 },
        { name: "Dennis Rodman", era: "1996 Bulls", rating: 90 },
        { name: "Draymond Green", era: "2016 Warriors", rating: 88 },
        { name: "Blake Griffin", era: "2014 Clippers", rating: 91 },
        { name: "Kevin Love", era: "2012 Timberwolves", rating: 90 },
        { name: "Shawn Kemp", era: "1990s Sonics", rating: 91 },
        { name: "Chris Webber", era: "2002 Kings", rating: 92 },
        { name: "Jermaine O'Neal", era: "2004 Pacers", rating: 89 },
        { name: "Rasheed Wallace", era: "2004 Pistons", rating: 88 },
        { name: "Jaren Jackson Jr.", era: "2025 Grizzlies", rating: 88 },
        { name: "Pascal Siakam", era: "2025 Pacers", rating: 89 },
        { name: "Paolo Banchero", era: "2025 Magic", rating: 91 },
        { name: "Zion Williamson", era: "2024 Pelicans", rating: 91 },
        { name: "Charles Barkley", era: "1993 Suns", rating: 94 },
        { name: "Karl Malone", era: "1990s Jazz", rating: 94 },
        { name: "Pau Gasol", era: "2009 Lakers", rating: 89 },
        { name: "Chris Bosh", era: "2012 Heat", rating: 87 },
        { name: "Amar'e Stoudemire", era: "2000s Suns", rating: 87 },
        { name: "Zach Randolph", era: "2010s Grizzlies", rating: 85 },
        { name: "LaMarcus Aldridge", era: "2010s Trail Blazers", rating: 85 },
        { name: "Paul Millsap", era: "2015 Hawks", rating: 84 },
        { name: "David West", era: "2000s Hornets", rating: 83 },
        { name: "Serge Ibaka", era: "2010s Thunder", rating: 82 },
        { name: "Ryan Anderson", era: "2010s Rockets", rating: 78 },
        { name: "Markieff Morris", era: "2010s Suns", rating: 76 },
        { name: "Udonis Haslem", era: "2000s Heat", rating: 73 }
    ],
    C: [
        { name: "Kareem Abdul-Jabbar", era: "1970s Bucks/Lakers", rating: 99 },
        { name: "Shaquille O'Neal", era: "2000 Lakers", rating: 98 },
        { name: "Hakeem Olajuwon", era: "1994 Rockets", rating: 98 },
        { name: "Bill Russell", era: "1960s Celtics", rating: 97 },
        { name: "Wilt Chamberlain", era: "1960s 76ers", rating: 98 },
        { name: "Nikola Jokic", era: "2020s Nuggets", rating: 96 },
        { name: "Moses Malone", era: "1983 76ers", rating: 96 },
        { name: "David Robinson", era: "1995 Spurs", rating: 96 },
        { name: "Patrick Ewing", era: "1990s Knicks", rating: 95 },
        { name: "Dwight Howard", era: "2009 Magic", rating: 94 },
        { name: "George Mikan", era: "1950s Lakers", rating: 94 },
        { name: "Wes Unseld", era: "1970s Bullets", rating: 90 },
        { name: "Rudy Gobert", era: "2024 Timberwolves", rating: 88 },
        { name: "Domantas Sabonis", era: "2024 Kings", rating: 91 },
        { name: "Bam Adebayo", era: "2025 Heat", rating: 90 },
        { name: "Kristaps Porzingis", era: "2024 Celtics", rating: 87 },
        { name: "Dikembe Mutombo", era: "1990s Nuggets", rating: 91 },
        { name: "Arvydas Sabonis", era: "1990s Blazers", rating: 90 },
        { name: "Brad Daugherty", era: "1980s Cavaliers", rating: 89 },
        { name: "Andrew Bogut", era: "2015 Warriors", rating: 84 },
        { name: "Myles Turner", era: "2025 Pacers", rating: 85 },
        { name: "Ben Wallace", era: "2004 Pistons", rating: 89 },
        { name: "Yao Ming", era: "2000s Rockets", rating: 89 },
        { name: "Marc Gasol", era: "2013 Grizzlies", rating: 87 },
        { name: "Al Horford", era: "2010s Hawks", rating: 85 },
        { name: "Joakim Noah", era: "2014 Bulls", rating: 85 },
        { name: "Tyson Chandler", era: "2011 Mavericks", rating: 83 },
        { name: "Brooke Lopez", era: "2010s Nets", rating: 82 },
        { name: "Steven Adams", era: "2010s Thunder", rating: 80 },
        { name: "Zaza Pachulia", era: "2017 Warriors", rating: 75 },
        { name: "Kosta Koufos", era: "2010s Kings", rating: 73 },
        { name: "Miles Plumlee", era: "2010s Bucks", rating: 71 }
    ]
};

// Back to the traditional 5 core positions
const positionOrder = ["PG", "SG", "SF", "PF", "C"];
let currentPositionIndex = 0;
let currentLineup = [];

function switchPage(pageName) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));

    document.getElementById(`page-${pageName}`).classList.add('active');
    document.getElementById(`nav-${pageName}`).classList.add('active');

    if (pageName === 'profile') {
        updateProfileDisplay();
    }
}

function rollPlayer() {
    if (currentPositionIndex >= positionOrder.length) {
        resetDraft();
        return;
    }

    let currentPos = positionOrder[currentPositionIndex];
    let availablePlayers = playerPool[currentPos];

    // High Mid-Tier Probabilities: 18% Legend | 52% Mid-Tier | 30% Role Player
    let selectedPlayer;
    let roll = Math.random() * 100;

    let eliteTier = availablePlayers.filter(p => p.rating >= 90);
    let midTier = availablePlayers.filter(p => p.rating >= 80 && p.rating < 90);
    let lowTier = availablePlayers.filter(p => p.rating < 80);

    if (roll < 18 && eliteTier.length > 0) {
        selectedPlayer = eliteTier[Math.floor(Math.random() * eliteTier.length)];
    } else if (roll < 70 && midTier.length > 0) {
        selectedPlayer = midTier[Math.floor(Math.random() * midTier.length)];
    } else {
        selectedPlayer = lowTier[Math.floor(Math.random() * lowTier.length)];
    }

    const randomPlayer = selectedPlayer;
    currentLineup.push(randomPlayer);

    const card = document.getElementById(`card-${currentPos}`);
    if (card) {
        card.classList.add('filled');
        card.innerHTML = `
            <div class="pos-tag">${currentPos}</div>
            <div class="player-name">${randomPlayer.name}</div>
            <div class="player-era">${randomPlayer.era}</div>
        `;
    }

    currentPositionIndex++;

    if (currentPositionIndex === positionOrder.length) {
        document.getElementById('btn-roll').innerText = "Reset and Draft Again";
        runSimulation();
    } else {
        document.getElementById('btn-roll').innerText = `Draft ${positionOrder[currentPositionIndex]}`;
    }
}

function resetDraft() {
    currentPositionIndex = 0;
    currentLineup = [];
    document.getElementById('results').style.display = 'none';

    positionOrder.forEach(pos => {
        const card = document.getElementById(`card-${pos}`);
        if (card) {
            card.classList.remove('filled');
            card.innerHTML = `<div class="pos-tag">${pos}</div><div class="player-name">-</div>`;
        }
    });
    document.getElementById('btn-roll').innerText = `Draft ${positionOrder[0]}`;
}

// Dynamically Calibrated Win Simulator (50-60% Winning records, 20% Sub-30 Win records)
function runSimulation() {
    let totalRating = currentLineup.reduce((sum, player) => sum + player.rating, 0);
    let avgRating = totalRating / positionOrder.length;

    let starCount = currentLineup.filter(player => player.rating >= 90).length;
    let lowTierCount = currentLineup.filter(player => player.rating < 80).length;

    // Set standard baseline (An average mid-tier squad defaults right near 44 wins)
    let baseWins = 44;

    // Exponential scaling algorithm based on team composition
    if (avgRating >= 84) {
        baseWins += Math.floor((avgRating - 84) * 3.2); // Elevates good teams out of the 30-40 win mud loop
    } else {
        baseWins -= Math.floor((84 - avgRating) * 2.5); // Drags bad teams down cleanly
    }

    // Target Checkpoints
    if (starCount >= 2) {
        baseWins = Math.max(baseWins, 54); // Multiple superstars lock down immediate playoff threat status
    } else if (starCount === 1) {
        baseWins = Math.max(baseWins, 41); // Single star ensures competitive parity baseline
    }

    // Force strict 20% occurrence parameter check for deep tank scenarios
    if (starCount === 0 && lowTierCount >= 2) {
        baseWins = Math.min(baseWins, 26);
    }

    // Global random schedule variance generator (-4 to +4)
    let variance = Math.floor(Math.random() * 9) - 4;
    let wins = Math.min(Math.max(baseWins + variance, 10), 76);
    let losses = 82 - wins;

    let recordString = `${wins}-${losses}`;
    let playoffFinish = "";
    let finishWeight = wins + (Math.random() * 8 - 4);

    if (wins >= 65) {
        playoffFinish = finishWeight > 68 ? "NBA Champions 🏆" : "Lost in NBA Finals";
    } else if (wins >= 55) {
        playoffFinish = finishWeight > 58 ? "Lost in Conference Finals" : "Lost in Second Round";
    } else if (wins >= 42) {
        playoffFinish = "Lost in First Round";
    } else if (wins >= 36) {
        playoffFinish = "Eliminated in Play-In Tournament";
    } else {
        playoffFinish = "Missed the Playoffs";
    }

    document.getElementById('res-record').innerText = recordString;
    document.getElementById('res-playoffs').innerText = playoffFinish;
    document.getElementById('results').style.display = 'block';

    saveBestRecord(wins, losses, playoffFinish);
}

function saveBestRecord(wins, losses, playoffFinish) {
    let currentBestWins = localStorage.getItem('bestWins') ? parseInt(localStorage.getItem('bestWins')) : -1;
    if (wins > currentBestWins) {
        localStorage.setItem('bestWins', wins);
        localStorage.setItem('bestLosses', losses);
        localStorage.setItem('bestFinish', playoffFinish);
    }
}

function updateProfileDisplay() {
    let bestWins = localStorage.getItem('bestWins');
    let bestLosses = localStorage.getItem('bestLosses');
    let bestFinish = localStorage.getItem('bestFinish');

    if (bestWins !== null) {
        document.getElementById('best-record').innerText = `${bestWins}-${bestLosses}`;
        document.getElementById('best-playoffs').innerText = bestFinish;
    } else {
        document.getElementById('best-record').innerText = "No data yet";
        document.getElementById('best-playoffs').innerText = "Assemble your first team on the Home tab!";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('btn-roll').innerText = `Draft ${positionOrder[0]}`;
});
