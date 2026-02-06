/* ============================================
   TERMINAL PORTFOLIO - SIMPLE JAVASCRIPT
   ============================================
   
   This file controls:
   1. Tab switching (Feed, About, Projects, Guestbook)
   2. Dark/Light theme toggle
   3. The interactive terminal
   
   Everything is simple and easy to explain!
*/

// ============================================
// DATA - Information about each team member
// ============================================
const members = {
    prayatna: {
        name: "Prayatna Sapkota",
        role: "Frontend Developer",
        color: "#7ee787",
        skills: [
            { name: "HTML", level: 90 },
            { name: "CSS", level: 85 },
            { name: "JavaScript", level: 70 }
        ],
        projects: [
            { name: "Terminal Portfolio", desc: "This website!", stars: 42 },
            { name: "Weather App", desc: "Shows weather using API", stars: 28 }
        ],
        city: "Banepa",
        country: "Nepal",
        fun: "Loves physics videos",
        email: "prayatna@example.com"
    },
    shubham: {
        name: "Shubham Pradhananga",
        role: "Backend Developer",
        color: "#79c0ff",
        skills: [
            { name: "PHP", level: 88 },
            { name: "Python", level: 85 },
            { name: "Database", level: 80 }
        ],
        projects: [
            { name: "Portfolio", desc: "Personal website", stars: 67 },
            { name: "API System", desc: "Backend for apps", stars: 45 }
        ],
        city: "Banepa",
        country: "Nepal",
        fun: "Black Panther fan",
        email: "shubham@example.com"
    },
    dixit: {
        name: "Dixit Neupane",
        role: "QA & Testing",
        color: "#d2a8ff",
        skills: [
            { name: "Testing", level: 90 },
            { name: "JavaScript", level: 75 },
            { name: "Debugging", level: 85 }
        ],
        projects: [
            { name: "Bug Tracker", desc: "Finds and tracks bugs", stars: 34 },
            { name: "E-Commerce", desc: "Online store project", stars: 29 }
        ],
        city: "Panauti",
        country: "Nepal",
        fun: "Future politician?",
        email: "dixit@example.com"
    }
};

// Fake file system for terminal
const files = {
    home: {
        prayatna: { "README.txt": "Welcome to Prayatna's folder!", projects: {} },
        shubham: { "README.txt": "Welcome to Shubham's folder!", projects: {} },
        dixit: { "README.txt": "Welcome to Dixit's folder!", projects: {} }
    }
};

// ============================================
// STATE - What is currently happening
// ============================================
let currentUser = "prayatna";  // Which member is selected
let currentPath = "/home/prayatna";  // Current folder in terminal
let commandHistory = [];  // List of typed commands
let historyIndex = -1;  // For arrow key navigation
let gameMode = null;  // If user is playing a game

// ============================================
// TAB SWITCHING
// ============================================
function setupTabs() {
    // Get all tab buttons
    const tabs = document.querySelectorAll(".nav-item");
    
    // Add click event to each tab
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Get the tab name (feed, about, projects, guestbook)
            const tabName = tab.dataset.tab;
            
            // Remove 'active' class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            
            // Add 'active' class to clicked tab
            tab.classList.add("active");
            
            // Hide all sections
            document.getElementById("feed-section").classList.add("hidden");
            document.getElementById("about-section").classList.add("hidden");
            document.getElementById("projects-section").classList.add("hidden");
            document.getElementById("guestbook-section").classList.add("hidden");
            
            // Show the clicked section
            document.getElementById(tabName + "-section").classList.remove("hidden");
            
            // If About tab, scroll to top of About section
            if (tabName === "about") {
                document.getElementById("about-start").scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

// ============================================
// THEME TOGGLE (Dark/Light mode)
// ============================================
function setupTheme() {
    const toggle = document.getElementById("theme-toggle");
    const body = document.body;
    
    // Check saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        body.classList.remove("dark-theme");
        toggle.textContent = "☀️";
    }
    
    // When button is clicked
    toggle.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        
        // Save preference
        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
            toggle.textContent = "🌙";
        } else {
            localStorage.setItem("theme", "light");
            toggle.textContent = "☀️";
        }
    });
}

// ============================================
// TERMINAL FUNCTIONS
// ============================================

// Switch to a different user
function switchUser(user) {
    if (!members[user]) return;
    
    currentUser = user;
    currentPath = "/home/" + user;
    
    // Update buttons
    document.querySelectorAll(".user-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.user === user);
    });
    
    // Clear terminal and show welcome
    const output = document.getElementById("term-output");
    output.innerHTML = "";
    
    // Show ASCII art
    printToTerminal(`
  _____                   _             _ _ _   
 |_   _|__ _ __ _ __ ___ (_)_ __   __ _| (_) |_ 
   | |/ _ \\ '__| '_ \\ _ \\| | '_ \\ / _\` | | | __|
   | |  __/ |  | | | | | | | | | | (_| | | | |_ 
   |_|\\___|_|  |_| |_| |_|_|_| |_|\\__,_|_|_|\\__|
    `);
    
    printToTerminal("Welcome to Terminal Portfolio!");
    printToTerminal("User: " + members[user].name);
    printToTerminal("Type 'help' to see commands.\n");
    
    updatePrompt();
}

// Update the terminal prompt text
function updatePrompt() {
    const user = members[currentUser];
    const promptText = `<span style="color:${user.color}">${currentUser}</span>@terminal:<span class="term-blue">${currentPath}</span>$`;
    
    document.getElementById("term-prompt").innerHTML = promptText;
    document.getElementById("term-title").textContent = currentUser + "@terminal:~";
}

// Print text to terminal
function printToTerminal(text) {
    const output = document.getElementById("term-output");
    const line = document.createElement("div");
    line.className = "output-line";
    line.innerHTML = text;
    output.appendChild(line);
    
    // Auto scroll to bottom
    const body = document.getElementById("term-body");
    body.scrollTop = body.scrollHeight;
}

// Handle keyboard input in terminal
function handleInput(event) {
    const input = document.getElementById("term-input");
    
    // If Enter key pressed
    if (event.key === "Enter") {
        const command = input.value.trim();
        
        if (command !== "") {
            // Show what user typed
            const user = members[currentUser];
            printToTerminal(`<span style="color:${user.color}">${currentUser}</span>@terminal:<span class="term-blue">${currentPath}</span>$ ${escapeHtml(command)}`);
            
            // Run the command
            runCommand(command);
            
            // Save to history
            commandHistory.push(command);
            historyIndex = commandHistory.length;
        }
        
        // Clear input
        input.value = "";
    }
    
    // Arrow up - previous command
    else if (event.key === "ArrowUp") {
        event.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            input.value = commandHistory[historyIndex];
        }
    }
    
    // Arrow down - next command
    else if (event.key === "ArrowDown") {
        event.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            input.value = commandHistory[historyIndex];
        } else {
            historyIndex = commandHistory.length;
            input.value = "";
        }
    }
    
    // Tab - autocomplete
    else if (event.key === "Tab") {
        event.preventDefault();
        const commands = ["help", "about", "skills", "projects", "contact", "weather", "time", "ls", "cd", "cat", "pwd", "game", "hack", "joke", "neofetch", "clear"];
        const val = input.value.toLowerCase();
        const matches = commands.filter(c => c.startsWith(val));
        
        if (matches.length === 1) {
            input.value = matches[0];
        }
    }
}

// Run a terminal command
function runCommand(cmdString) {
    const parts = cmdString.split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    // If playing a game, handle game input
    if (gameMode) {
        handleGame(cmdString);
        return;
    }
    
    // Run the command
    switch (cmd) {
        case "help":
            showHelp();
            break;
        case "about":
            showAbout();
            break;
        case "skills":
            showSkills();
            break;
        case "projects":
            showProjects();
            break;
        case "contact":
            showContact();
            break;
        case "weather":
            showWeather();
            break;
        case "time":
            showTime();
            break;
        case "pwd":
            printToTerminal(`<span class="term-cyan">${currentPath}</span>`);
            break;
        case "ls":
            listFiles(args[0]);
            break;
        case "cd":
            changeDirectory(args[0]);
            break;
        case "cat":
            showFile(args[0]);
            break;
        case "game":
            startGame(args[0]);
            break;
        case "hack":
            fakeHack();
            break;
        case "joke":
            showJoke();
            break;
        case "neofetch":
            showNeofetch();
            break;
        case "clear":
            document.getElementById("term-output").innerHTML = "";
            break;
        case "sudo":
            printToTerminal(`<span class="term-red">Nice try! No sudo access here.</span>`);
            break;
        default:
            printToTerminal(`<span class="term-red">Command not found: ${escapeHtml(cmd)}</span>`);
            printToTerminal(`Type "help" for available commands`);
    }
}

// Show help message
function showHelp() {
    const helpText = `
<div class="term-box">
<span class="term-yellow">Available Commands:</span><br><br>
<span class="term-green">about</span>     - Show profile info<br>
<span class="term-green">skills</span>    - Show technical skills<br>
<span class="term-green">projects</span>  - List projects<br>
<span class="term-green">contact</span>   - Contact information<br>
<span class="term-green">weather</span>   - Check weather<br>
<span class="term-green">time</span>      - Show current time<br>
<span class="term-green">ls</span>        - List files<br>
<span class="term-green">cd</span>        - Change directory<br>
<span class="term-green">cat</span>       - View file contents<br>
<span class="term-green">game</span>      - Play games<br>
<span class="term-green">hack</span>      - Fake hacking ;)<br>
<span class="term-green">joke</span>      - Random joke<br>
<span class="term-green">neofetch</span>  - System info<br>
<span class="term-green">clear</span>     - Clear screen<br>
</div>
<span class="term-muted">Tip: Use Tab to autocomplete, Up/Down for history</span>
    `;
    printToTerminal(helpText);
}

// Show member info
function showAbout() {
    const m = members[currentUser];
    printToTerminal(`
<div class="term-box">
<span style="color:${m.color}">👤 ${m.name}</span><br>
Role: <span class="term-blue">${m.role}</span><br>
Location: ${m.city}, ${m.country}<br>
Fun Fact: <span class="term-yellow">${m.fun}</span>
</div>
    `);
}

// Show skills with progress bars
function showSkills() {
    const m = members[currentUser];
    let html = `<div class="term-box"><span style="color:${m.color}">🛠️ Skills:</span><br><br>`;
    
    m.skills.forEach(skill => {
        html += `${skill.name}: <span class="term-green">${skill.level}%</span><br>`;
        // Simple progress bar using equals signs
        const filled = Math.round(skill.level / 10);
        const empty = 10 - filled;
        html += `[<span class="term-green">${"=".repeat(filled)}</span>${" ".repeat(empty)}]<br><br>`;
    });
    
    html += "</div>";
    printToTerminal(html);
}

// Show projects
function showProjects() {
    const m = members[currentUser];
    let html = `<div class="term-box"><span style="color:${m.color}">📁 Projects:</span><br><br>`;
    
    m.projects.forEach(p => {
        html += `<span class="term-yellow">${p.name}</span> ⭐ ${p.stars}<br>`;
        html += `<span class="term-muted">${p.desc}</span><br><br>`;
    });
    
    html += "</div>";
    printToTerminal(html);
}

// Show contact info
function showContact() {
    const m = members[currentUser];
    printToTerminal(`
<div class="term-box">
<span class="term-yellow">📧 Contact:</span><br><br>
Email: <span class="term-blue">${m.email}</span><br>
Location: ${m.city}, ${m.country}
</div>
    `);
}

// Show fake weather
function showWeather() {
    const m = members[currentUser];
    const weathers = [
        { icon: "☀️", text: "Sunny", temp: 28 },
        { icon: "⛅", text: "Cloudy", temp: 24 },
        { icon: "🌧️", text: "Rainy", temp: 20 }
    ];
    const w = weathers[Math.floor(Math.random() * weathers.length)];
    
    printToTerminal(`
<div class="term-box" style="text-align:center">
<div style="font-size:40px">${w.icon}</div>
<div style="font-size:24px;color:var(--yellow)">${w.temp}°C</div>
<div class="term-blue">${w.text}</div>
<div class="term-muted">${m.city}, ${m.country}</div>
</div>
    `);
}

// Show current time
function showTime() {
    const now = new Date();
    printToTerminal(`
<div class="term-box">
Local: ${now.toLocaleString()}<br>
UTC: ${now.toUTCString()}
</div>
    `);
}

// List files (fake file system)
function listFiles(path) {
    const targetPath = path || currentPath;
    
    if (targetPath === "/home" || targetPath === "/home/" + currentUser) {
        printToTerminal(`<span class="term-blue">📁 README.txt</span>  <span class="term-blue">📁 projects/</span>`);
    } else if (targetPath === "/home/" + currentUser + "/projects") {
        printToTerminal(`<span class="term-muted">Empty folder</span>`);
    } else {
        printToTerminal(`<span class="term-red">Folder not found</span>`);
    }
}

// Change directory
function changeDirectory(path) {
    if (!path || path === "~") {
        currentPath = "/home/" + currentUser;
    } else if (path === "..") {
        if (currentPath !== "/home") {
            currentPath = "/home/" + currentUser;
        }
    } else if (path === "projects") {
        currentPath = "/home/" + currentUser + "/projects";
    } else {
        printToTerminal(`<span class="term-red">cd: ${path}: No such folder</span>`);
        return;
    }
    updatePrompt();
}

// Show file contents
function showFile(filename) {
    if (!filename) {
        printToTerminal(`<span class="term-red">cat: Please specify a file</span>`);
        return;
    }
    
    if (filename === "README.txt") {
        printToTerminal(`<div class="term-box">Welcome to ${currentUser}'s folder!<br>This is a demo file system.</div>`);
    } else {
        printToTerminal(`<span class="term-red">cat: ${filename}: File not found</span>`);
    }
}

// Start a game
function startGame(gameName) {
    if (!gameName) {
        printToTerminal(`
<div class="term-box">
<span class="term-yellow">🎮 Games:</span><br><br>
<span class="term-green">game guess</span> - Guess the number (1-100)<br>
<span class="term-green">game rps</span>   - Rock Paper Scissors
</div>
        `);
        return;
    }
    
    if (gameName === "guess") {
        gameMode = { type: "guess", number: Math.floor(Math.random() * 100) + 1, tries: 0 };
        printToTerminal(`
<div class="term-box">
<span class="term-yellow">🎯 Guess the Number!</span><br><br>
I'm thinking of a number between 1 and 100.<br>
Type your guess!
</div>
        `);
    } else if (gameName === "rps") {
        gameMode = { type: "rps" };
        printToTerminal(`
<div class="term-box">
<span class="term-yellow">✊ Rock Paper Scissors!</span><br><br>
Type: rock, paper, or scissors
</div>
        `);
    }
}

// Handle game input
function handleGame(input) {
    if (gameMode.type === "guess") {
        const guess = parseInt(input);
        gameMode.tries++;
        
        if (isNaN(guess)) {
            printToTerminal(`<span class="term-red">Please enter a number!</span>`);
            return;
        }
        
        if (guess === gameMode.number) {
            printToTerminal(`<span class="term-green">🎉 Correct! The number was ${gameMode.number}</span>`);
            printToTerminal(`<span class="term-muted">Tries: ${gameMode.tries}</span>`);
            gameMode = null;
        } else if (guess < gameMode.number) {
            printToTerminal(`<span class="term-yellow">📈 Too low! Try higher.</span>`);
        } else {
            printToTerminal(`<span class="term-yellow">📉 Too high! Try lower.</span>`);
        }
    } else if (gameMode.type === "rps") {
        const choices = ["rock", "paper", "scissors"];
        const userChoice = input.toLowerCase();
        
        if (!choices.includes(userChoice)) {
            printToTerminal(`<span class="term-red">Type: rock, paper, or scissors</span>`);
            return;
        }
        
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let result = "";
        
        if (userChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            result = `<span class="term-green">You win! 🎉</span>`;
        } else {
            result = `<span class="term-red">Computer wins! 💻</span>`;
        }
        
        printToTerminal(`You: ${userChoice} | Computer: ${computerChoice}`);
        printToTerminal(result);
        gameMode = null;
    }
}

// Fake hacking animation
function fakeHack() {
    const steps = [
        "Initializing...",
        "Bypassing firewall...",
        "Accessing mainframe...",
        "Downloading data..."
    ];
    
    steps.forEach((step, i) => {
        setTimeout(() => {
            const progress = "=".repeat(i + 1) + ">".repeat(4 - i);
            printToTerminal(`[<span class="term-green">${progress}</span>] ${step}`);
        }, i * 500);
    });
    
    setTimeout(() => {
        printToTerminal(`<span class="term-green">ACCESS GRANTED (just kidding! 😄)</span>`);
    }, 2500);
}

// Show random joke
function showJoke() {
    const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
        "Why did the developer go broke? Because he used up all his cache! 💸",
        "What's a programmer's favorite place? The Foo Bar! 🍺",
        "Why do Java devs wear glasses? Because they don't C#! 👓"
    ];
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    
    printToTerminal(`
<div class="term-box">
<span class="term-yellow">😂 Joke:</span><br><br>
${joke}
</div>
    `);
}

// Show system info
function showNeofetch() {
    const m = members[currentUser];
    printToTerminal(`
<div style="display:flex;gap:15px">
<pre style="color:var(--green);font-size:10px">
    .---.
   /     \\
  | o   o |
  |  >    |
  |  \\__/ |
   \\_____/
</pre>
<div>
<span style="color:${m.color}">${m.name}</span>@terminal<br>
----------------<br>
<span class="term-muted">OS:</span> Terminal Portfolio<br>
<span class="term-muted">Shell:</span> custom-terminal<br>
<span class="term-muted">Theme:</span> Cyberpunk<br>
<span class="term-muted">Uptime:</span> ${Math.floor(performance.now() / 1000)}s
</div>
</div>
    `);
}

// Helper: Make text safe to display
function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// SETUP TERMINAL
// ============================================
function setupTerminal() {
    // User buttons in terminal
    document.querySelectorAll(".user-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            switchUser(btn.dataset.user);
        });
    });
    
    // Quick command buttons
    document.querySelectorAll(".quick-cmds button").forEach(btn => {
        btn.addEventListener("click", () => {
            const cmd = btn.dataset.cmd;
            document.getElementById("term-input").value = cmd;
            runCommand(cmd);
            document.getElementById("term-input").value = "";
            document.getElementById("term-input").focus();
        });
    });
    
    // Keyboard input
    document.getElementById("term-input").addEventListener("keydown", handleInput);
    
    // Start with default user
    switchUser("prayatna");
}

// ============================================
// TEAM AVATAR CLICKS
// ============================================
function setupTeamAvatars() {
    // Hero avatars - click to go to About and scroll to terminal
    document.querySelectorAll(".team-avatar").forEach(avatar => {
        avatar.addEventListener("click", () => {
            const member = avatar.dataset.member;
            
            // Click About tab
            document.querySelector('.nav-item[data-tab="about"]').click();
            
            // Switch user
            switchUser(member);
            
            // Scroll to terminal
            setTimeout(() => {
                document.getElementById("terminal-section").scrollIntoView({ behavior: "smooth", block: "center" });
            }, 100);
        });
    });
    
    // Member cards - click to switch user
    document.querySelectorAll(".member-card").forEach(card => {
        card.addEventListener("click", () => {
            const member = card.dataset.member;
            switchUser(member);
            document.getElementById("terminal-section").scrollIntoView({ behavior: "smooth", block: "center" });
            document.getElementById("term-input").focus();
        });
    });
}

// ============================================
// START EVERYTHING WHEN PAGE LOADS
// ============================================
document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
    setupTheme();
    setupTerminal();
    setupTeamAvatars();
    
    console.log("Terminal Portfolio loaded!");
});
