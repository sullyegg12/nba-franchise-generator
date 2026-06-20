const playerPool = {
    PG: [
        { name: "Michael Jordan", era: "1990s Bulls", rating: 99 },
        { name: "Magic Johnson", era: "1980s Lakers", rating: 98 },
        { name: "Stephen Curry", era: "2010s Warriors", rating: 97 },
        { name: "Oscar Robertson", era: "1960s Royals", rating: 95 },
        { name: "John Stockton", era: "1990s Jazz", rating: 94 },
        { name: "Steve Nash", era: "2000s Suns", rating: 93 },
        { name: "Kyrie Irving", era: "2016 Cavaliers", rating: 91 },
        // --- EXPANDED MID TIER ---
        { name: "Chauncey Billups", era: "2004 Pistons", rating: 89 },
        { name: "Deron Williams", era: "2000s Jazz", rating: 88 },
        { name: "Baron Davis", era: "2007 Warriors", rating: 86 },
        { name: "Mike Conley", era: "2010s Grizzlies", rating: 85 },
        { name: "Kemba Walker", era: "2010s Hornets", rating: 84 },
        { name: "Goran Dragic", era: "2014 Suns", rating: 83 },
        { name: "Kirk Hinrich", era: "2000s Bulls", rating: 81 },
        { name: "Raymond Felton", era: "2010 Knicks", rating: 80 },
        // --- LOW TIER ---
        { name: "Patrick Beverley", era: "2010s Rockets", rating: 78 },
        { name: "Ish Smith", era: "2010s Pistons", rating: 74 },
        { name: "Matthew Dellavedova", era: "2016 Cavaliers", rating: 72 }
    ],
    SG: [
        { name: "Kobe Bryant", era: "2000s Lakers", rating: 97 },
        { name: "Dwyane Wade", era: "2006 Heat", rating: 95 },
        { name: "James Harden", era: "2018 Rockets", rating: 94 },
        { name: "Allen Iverson", era: "2001 76ers", rating: 93 },
        { name: "Ray Allen", era: "2008 Celtics", rating: 90 },
        // --- EXPANDED MID TIER ---
        { name: "Manu Ginobili", era: "2000s Spurs", rating: 88 },
        { name: "Klay Thompson", era: "2010s Warriors", rating: 88 },
        { name: "Demar DeRozan", era: "2010s Raptors", rating: 86 },
        { name: "CJ McCollum", era: "2010s Trail Blazers", rating: 85 },
        { name: "Rip Hamilton", era: "2004 Pistons", rating: 84 },
        { name: "Jason Terry", era: "2011 Mavericks", rating: 83 },
        { name: "JJ Redick", era: "2010s Clippers", rating: 82 },
        { name: "Joe Harris", era: "2020 Nets", rating: 80 },
        // --- LOW TIER ---
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
        { name: "Julius Erving", era: "1980s 76ers", rating: 94 },
        // --- EXPANDED MID TIER ---
        { name: "Carmelo Anthony", era: "2013 Knicks", rating: 89 },
        { name: "Paul George", era: "2010s Pacers", rating: 88 },
        { name: "Gordon Hayward", era: "2017 Jazz", rating: 85 },
        { name: "Luol Deng", era: "2010s Bulls", rating: 84 },
        { name: "Hedo Turkoglu", era: "2009 Magic", rating: 83 },
        { name: "Danilo Gallinari", era: "2010s Nuggets", rating: 82 },
        { name: "Trevor Ariza", era: "2009 Lakers", rating: 81 },
        { name: "Harrison Barnes", era: "2015 Warriors", rating: 80 },
        // --- LOW TIER ---
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
        { name: "Charles Barkley", era: "1993 Suns", rating: 94 },
        { name: "Karl Malone", era: "1990s Jazz", rating: 94 },
        // --- EXPANDED MID TIER ---
        { name: "Pau Gasol", era: "2009 Lakers", rating: 89 },
        { name: "Chris Bosh", era: "2012 Heat", rating: 87 },
        { name: "Amar'e Stoudemire", era: "2000s Suns", rating: 87 },
        { name: "Zach Randolph", era: "2010s Grizzlies", rating: 85 },
        { name: "LaMarcus Aldridge", era: "2010s Trail Blazers", rating: 85 },
        { name: "Paul Millsap", era: "2015 Hawks", rating: 84 },
        { name: "David West", era: "2000s Hornets", rating: 83 },
        { name: "Serge Ibaka", era: "2010s Thunder", rating: 82 },
        { name: "Ryan Anderson", era: "2010s Rockets", rating: 78 },
        // --- LOW TIER ---
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
        // --- EXPANDED MID TIER ---
        { name: "Ben Wallace", era: "2004 Pistons", rating: 89 },
        { name: "Yao Ming", era: "2000s Rockets", rating: 89 },
        { name: "Marc Gasol", era: "2013 Grizzlies", rating: 87 },
        { name: "Al Horford", era: "2010s Hawks", rating: 85 },
        { name: "Joakim Noah", era: "2014 Bulls", rating: 85 },
        { name: "Tyson Chandler", era: "2011 Mavericks", rating: 83 },
        { name: "Brooke Lopez", era: "2010s Nets", rating: 82 },
        { name: "Steven Adams", era: "2010s Thunder", rating: 80 },
        // --- LOW TIER ---
        { name: "Zaza Pachulia", era: "2017 Warriors", rating: 75 },
        { name: "Kosta Koufos", era: "2010s Kings", rating: 73 },
        { name: "Miles Plumlee", era: "2010s Bucks", rating: 71 }
    ]
};

const positionOrder = ["PG", "SG", "SF", "PF", "C"];
let currentPositionIndex = 0;
let currentLineup = [];

// Simple SPA Page Toggling
function switchPage(pageName) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));

    document.getElementById(`page-${pageName}`).classList.add('active');
    document.getElementById(`nav-${pageName}`).classList.add('active');

    if (pageName === 'profile') {
        updateProfileDisplay();
    }
}

// Handle rolling/drafting one position at a time
function rollPlayer() {
    if (currentPositionIndex >= positionOrder.length) {
        // Reset lineup if they click after completion
        resetDraft();
    }

    const currentPos = positionOrder[currentPositionIndex];
    const availablePlayers = playerPool[currentPos];

    // Weighted Probability Algorithm
    let selectedPlayer;
    let roll = Math.random() * 100; // Roll a number from 0 to 100

    // Filter available pools based on tier rarity
    let eliteTier = availablePlayers.filter(p => p.rating >= 90);
    let midTier = availablePlayers.filter(p => p.rating >= 80 && p.rating < 90);
    let lowTier = availablePlayers.filter(p => p.rating < 80);

    if (roll < 5 && eliteTier.length > 0) {
        // 5% chance to draft an Elite Legend (90+ Rating)
        selectedPlayer = eliteTier[Math.floor(Math.random() * eliteTier.length)];
    } else if (roll < 30 && midTier.length > 0) {
        // 25% chance to draft a Quality Starter (80-89 Rating)
        selectedPlayer = midTier[Math.floor(Math.random() * midTier.length)];
    } else {
        // 70% chance to draft a Role Player / Bench Asset (Under 80 Rating)
        selectedPlayer = lowTier[Math.floor(Math.random() * lowTier.length)];
    }

    const randomPlayer = selectedPlayer;

    currentLineup.push(randomPlayer);

    // Update UI Card
    const card = document.getElementById(`card-${currentPos}`);
    card.classList.add('filled');
    card.innerHTML = `
                <div class="pos-tag">${currentPos}</div>
                <div class="player-name">${randomPlayer.name}</div>
                <div class="player-era">${randomPlayer.era}</div>
            `;

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
        card.classList.remove('filled');
        card.innerHTML = `<div class="pos-tag">${pos}</div><div class="player-name">-</div>`;
    });
    document.getElementById('btn-roll').innerText = "Draft PG";
}

// Realistic Season Simulation Logic
function runSimulation() {
    // Calculate team average rating
    let totalRating = currentLineup.reduce((sum, player) => sum + player.rating, 0);
    let avgRating = totalRating / positionOrder.length;

    // Map ratings to expected win calculations (with random factor)
    // Elite tier (~98 avg) maps near 65-74 wins. Floor tier maps near 45-50 wins.
    let wins = 41; // Start at a perfectly balanced .500 team (41-41)

    // Standard NBA baseline team average is roughly 81 overall
    if (avgRating >= 81) {
        // Teams rating above 81 scale up aggressively toward 70+ wins
        wins += Math.floor((avgRating - 81) * 2.1);
    } else {
        // Teams rating below 81 scale down aggressively toward sub-20 wins
        wins -= Math.floor((81 - avgRating) * 2.5);
    }

    // Add competitive schedule variance (-5 to +5 games)
    let variance = Math.floor(Math.random() * 11) - 5;
    wins = Math.min(Math.max(wins + variance, 8), 78); // Caps realistic records between 8-74 and 74-8
    let losses = 82 - wins;

    let recordString = `${wins}-${losses}`;
    let playoffFinish = "";
    let finishWeight = wins + (Math.random() * 10 - 5); // Seed value for playoffs based on wins

    // Determine accurate playoff outcome
    if (wins >= 67) {
        playoffFinish = finishWeight > 72 ? "NBA Champions 🏆" : "Lost in NBA Finals";
    } else if (wins >= 58) {
        playoffFinish = finishWeight > 62 ? "Lost in Conference Finals" : "Lost in Second Round";
    } else if (wins >= 42) {
        playoffFinish = "Lost in First Round";
    } else if (wins >= 36) {
        playoffFinish = "Eliminated in Play-In Tournament";
    } else {
        playoffFinish = "Missed the Playoffs";
    }

    // Display Results
    document.getElementById('res-record').innerText = recordString;
    document.getElementById('res-playoffs').innerText = playoffFinish;
    document.getElementById('results').style.display = 'block';

    // Check and update All-Time Best Record in local storage
    saveBestRecord(wins, losses, playoffFinish);
}

function saveBestRecord(wins, losses, playoffFinish) {
    let currentBestWins = localStorage.getItem('bestWins') ? parseInt(localStorage.getItem('bestWins')) : -1;

    // If new win count is higher, save it as the new best record
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

// Initialize button label on launch
document.getElementById('btn-roll').innerText = `Draft ${positionOrder[0]}`;