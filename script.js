/**
 * CodeCraft Trio - Team Portfolio JavaScript
 * Modular, clean, and well-organized
 */

// ============================================
// TEAM DATA
// ============================================
const teamMembers = {
    prayatna: {
        name: "Prayatna Sapkota",
        role: "Frontend Developer & UI/UX",
        skills: [
            { name: "HTML", level: 90 },
            { name: "CSS", level: 85 },
            { name: "JavaScript", level: 70 },
            { name: "Python", level: 40 },
            { name: "Linux", level: 65 }
        ],
        projects: [
            { name: "Terminal Portfolio", desc: "Interactive terminal portfolio with file system", tech: ["HTML", "CSS", "JS"], stars: 42 },
            { name: "Weather Dashboard", desc: "Real-time weather app with location detection", tech: ["JS", "API"], stars: 28 }
        ],
        city: "Banepa",
        country: "Nepal",
        fun: "Richard Feynman fanboy - watches physics lectures for fun",
        color: "#7ee787",
        github: "github.com/prayatnasapkota",
        email: "prayatna@codecraft.np"
    },
    shubham: {
        name: "Shubham Pradhananga",
        role: "Backend Developer & Database Architect",
        skills: [
            { name: "HTML/CSS", level: 92 },
            { name: "Python", level: 88 },
            { name: "Node.js", level: 80 },
            { name: "Database", level: 85 },
            { name: "Linux", level: 75 }
        ],
        projects: [
            { name: "Personal Portfolio", desc: "Modern portfolio with dark mode and animations", tech: ["HTML", "CSS", "JS"], stars: 67 },
            { name: "API Gateway", desc: "Microservices orchestration system", tech: ["Node.js", "Express"], stars: 45 }
        ],
        city: "Banepa",
        country: "Nepal",
        fun: "Black Panther fan - Wakanda Forever!",
        color: "#79c0ff",
        github: "github.com/shubhampradhananga",
        email: "shubham@codecraft.np"
    },
    dixit: {
        name: "Dixit Neupane",
        role: "Bug Hunter & QA Specialist",
        skills: [
            { name: "JavaScript", level: 75 },
            { name: "HTML/CSS", level: 80 },
            { name: "Testing", level: 85 },
            { name: "Debugging", level: 90 }
        ],
        projects: [
            { name: "E-Commerce Platform", desc: "Full-stack store with payment integration", tech: ["JS", "HTML", "CSS"], stars: 34 },
            { name: "Bug Tracker", desc: "Issue tracking system for developers", tech: ["JS", "Node.js"], stars: 29 }
        ],
        city: "Panauti",
        country: "Nepal",
        fun: "No plans for politics... yet 👀",
        color: "#d2a8ff",
        github: "github.com/dixitneupane",
        email: "dixit@codecraft.np"
    }
};

// Simulated File System
const fileSystem = {
    home: {
        prayatna: {
            "README.md": "# Prayatna's Home\n\nWelcome to my directory!\n\n- Check out my projects/ folder\n- View my skills\n- Contact me anytime",
            "skills.txt": "Frontend Skills:\n- HTML/CSS: Expert\n- JavaScript: Advanced\n- UI/UX Design: Intermediate",
            projects: {
                "terminal.md": "# Terminal Portfolio\n\nBuilt with vanilla JS. No frameworks!",
                "weather.md": "# Weather App\n\nReal-time forecasts using OpenWeather API"
            }
        },
        shubham: {
            "README.md": "# Shubham's Home\n\nBackend wizard at your service.",
            "server.js": "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.json({ msg: 'Hello World' });\n});",
            projects: {
                "api.md": "# API Gateway\n\nMicroservices orchestration"
            }
        },
        dixit: {
            "README.md": "# Dixit's Home\n\nI find bugs so you don't have to.",
            "debug.log": "[2025-02-06] INFO: All systems operational\n[2025-02-06] DEBUG: No bugs found (yet)",
            projects: {
                "qa.md": "# QA Process\n\nTesting strategies and methodologies"
            }
        }
    },
    etc: {
        "motd": "Welcome to CodeCraft Terminal! Type 'help' to get started.",
        "config.json": '{"theme": "cyberpunk", "animations": true}'
    }
};

// ASCII Art Collection
const asciiArt = {
    logo: `
   ____          _      _____            _   
  / ___|___   __| | ___|  ___|__ _ _ __ | |_ 
 | |   / _ \\ / _\` |/ _ \\ |_ / _\` | '_ \\| __|
 | |__| (_) | (_| |  __/  _| (_| | | | | |_ 
  \\____\\___/ \\__,_|\\___|_|  \\__,_|_| |_|\\__|
                                              
    `,
    tux: `
       .---.
      /     \\
     | o   o |
     |  >    |
     |  \\__/ |
      \\_____/
      /     \\
    ~~Linux~~`,
    cat: `
      /\\_/\\
     ( o.o )
      > ^ <
     /|   |\\
    (_|   |_)
    ~Catto~`
};

// ============================================
// APP STATE
// ============================================
const AppState = {
    currentTab: 'feed',
    currentUser: 'prayatna',
    currentDir: '/home/prayatna',
    commandHistory: [],
    historyIndex: -1,
    commandCount: 0,
    gameMode: null,
    startTime: Date.now()
};

// ============================================
// DOM ELEMENTS CACHE
// ============================================
const DOM = {};

function cacheDOMElements() {
    DOM.navItems = document.querySelectorAll('.nav-item');
    DOM.sections = {
        feed: document.getElementById('feed-section'),
        about: document.getElementById('about-section'),
        content: document.getElementById('content-section'),
        guestbook: document.getElementById('guestbook-section')
    };
    DOM.themeToggle = document.getElementById('theme-toggle');
    DOM.body = document.body;
    
    // Terminal elements
    DOM.terminalOutput = document.getElementById('terminal-output');
    DOM.terminalInput = document.getElementById('terminal-input');
    DOM.terminalPrompt = document.getElementById('terminal-prompt');
    DOM.terminalTitle = document.getElementById('terminal-title');
    DOM.terminalBody = document.getElementById('terminal-body');
    DOM.userSelectBtns = document.querySelectorAll('.user-select-btn');
    DOM.quickCmds = document.querySelectorAll('.quick-cmd');
    DOM.statusUser = document.getElementById('status-user');
    DOM.statusDir = document.getElementById('status-dir');
    DOM.statusCmds = document.getElementById('status-cmds');
    
    // Modal elements
    DOM.socialModal = document.getElementById('socialModal');
    DOM.linksButton = document.getElementById('links-button');
    DOM.closeModal = document.querySelector('.close-modal');
    
    // Guestbook
    DOM.guestbookForm = document.getElementById('guestbook-form');
    DOM.guestbookEntries = document.getElementById('guestbook-entries-container');
    
    // Newsletter
    DOM.newsletterForm = document.getElementById('newsletter-form');
}

// ============================================
// TAB NAVIGATION
// ============================================
function initTabNavigation() {
    DOM.navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabName = item.dataset.tab;
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    // Update nav items
    DOM.navItems.forEach(nav => nav.classList.remove('active'));
    document.querySelector(`.nav-item[data-tab="${tabName}"]`).classList.add('active');
    
    // Show/hide sections with fade effect
    Object.keys(DOM.sections).forEach(key => {
        const section = DOM.sections[key];
        if (key === tabName) {
            section.classList.remove('hidden');
            section.classList.add('fade-in');
        } else {
            section.classList.add('hidden');
            section.classList.remove('fade-in');
        }
    });
    
    AppState.currentTab = tabName;
    
    // Focus terminal if about tab
    if (tabName === 'about' && DOM.terminalInput) {
        setTimeout(() => DOM.terminalInput.focus(), 100);
    }
}

// ============================================
// THEME TOGGLE
// ============================================
function initThemeToggle() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        DOM.body.classList.add(savedTheme);
    } else {
        DOM.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    }
    
    DOM.themeToggle.addEventListener('click', () => {
        DOM.body.classList.toggle('dark-theme');
        const theme = DOM.body.classList.contains('dark-theme') ? 'dark-theme' : 'light';
        localStorage.setItem('theme', theme);
    });
}

// ============================================
// TERMINAL FUNCTIONALITY
// ============================================
function initTerminal() {
    // User selector buttons
    DOM.userSelectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const user = btn.dataset.user;
            switchUser(user);
        });
    });
    
    // Quick command buttons
    DOM.quickCmds.forEach(btn => {
        btn.addEventListener('click', () => {
            const cmd = btn.dataset.cmd;
            DOM.terminalInput.value = cmd;
            executeCommand(cmd);
            DOM.terminalInput.value = '';
        });
    });
    
    // Input handling
    DOM.terminalInput.addEventListener('keydown', handleTerminalInput);
    
    // Initial terminal setup
    switchUser('prayatna');
}

function switchUser(user) {
    if (!teamMembers[user]) return;
    
    AppState.currentUser = user;
    AppState.currentDir = `/home/${user}`;
    
    // Update UI
    DOM.userSelectBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.user === user);
    });
    
    // Clear and reinitialize terminal
    DOM.terminalOutput.innerHTML = '';
    updateTerminalPrompt();
    printToTerminal(asciiArt.logo, false);
    printToTerminal(`\nWelcome to CodeCraft Terminal!`, false);
    printToTerminal(`Current user: <span style="color:${teamMembers[user].color}">${teamMembers[user].name}</span>`, false);
    printToTerminal(`Type <span class="term-yellow">help</span> to see available commands.\n`, false);
    
    DOM.terminalInput.focus();
}

function updateTerminalPrompt() {
    const user = teamMembers[AppState.currentUser];
    const promptText = `<span style="color:${user.color}">${AppState.currentUser}</span>@codecraft:<span class="term-blue">${AppState.currentDir}</span>$`;
    DOM.terminalPrompt.innerHTML = promptText;
    DOM.terminalTitle.textContent = `${AppState.currentUser}@codecraft:~`;
    
    // Update status bar
    if (DOM.statusUser) DOM.statusUser.textContent = `user: ${AppState.currentUser}`;
    if (DOM.statusDir) DOM.statusDir.textContent = `dir: ${AppState.currentDir}`;
    if (DOM.statusCmds) DOM.statusCmds.textContent = `cmds: ${AppState.commandCount}`;
}

function handleTerminalInput(e) {
    if (e.key === 'Enter') {
        const cmd = DOM.terminalInput.value.trim();
        if (cmd) {
            executeCommand(cmd);
            AppState.commandHistory.push(cmd);
            AppState.historyIndex = AppState.commandHistory.length;
            AppState.commandCount++;
            updateTerminalPrompt();
        }
        DOM.terminalInput.value = '';
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (AppState.historyIndex > 0) {
            AppState.historyIndex--;
            DOM.terminalInput.value = AppState.commandHistory[AppState.historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (AppState.historyIndex < AppState.commandHistory.length - 1) {
            AppState.historyIndex++;
            DOM.terminalInput.value = AppState.commandHistory[AppState.historyIndex];
        } else {
            AppState.historyIndex = AppState.commandHistory.length;
            DOM.terminalInput.value = '';
        }
    } else if (e.key === 'Tab') {
        e.preventDefault();
        autocompleteCommand();
    }
}

function autocompleteCommand() {
    const cmds = Object.keys(terminalCommands);
    const val = DOM.terminalInput.value.toLowerCase();
    const matches = cmds.filter(c => c.startsWith(val));
    
    if (matches.length === 1) {
        DOM.terminalInput.value = matches[0];
    } else if (matches.length > 1) {
        printToTerminal(`<span class="term-dim">${matches.join('  ')}</span>`, false);
    }
}

function executeCommand(cmdStr) {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;
    
    // Print command line
    const user = teamMembers[AppState.currentUser];
    const cmdLine = document.createElement('div');
    cmdLine.className = 'cmd-line';
    cmdLine.innerHTML = `<span class="terminal-prompt"><span style="color:${user.color}">${AppState.currentUser}</span>@codecraft:<span class="term-blue">${AppState.currentDir}</span>$</span> ${escapeHtml(trimmed)}`;
    DOM.terminalOutput.appendChild(cmdLine);
    
    // Handle game modes
    if (AppState.gameMode) {
        handleGameMode(trimmed);
        return;
    }
    
    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    if (terminalCommands[cmd]) {
        const result = terminalCommands[cmd](args);
        if (result instanceof Promise) {
            result.then(output => {
                if (output !== null) printToTerminal(output, false);
            });
        } else if (result !== null) {
            printToTerminal(result, false);
        }
    } else {
        printToTerminal(`<span class="term-red">bash: ${escapeHtml(cmd)}: command not found</span>`, false);
        printToTerminal(`<span class="term-dim">Type "help" for available commands</span>`, false);
    }
    
    scrollTerminal();
}

function handleGameMode(input) {
    const mode = AppState.gameMode;
    
    if (mode.type === 'guess') {
        const guess = parseInt(input);
        if (isNaN(guess)) {
            printToTerminal('<span class="term-red">Please enter a number!</span>', false);
            return;
        }
        mode.attempts++;
        if (guess === mode.target) {
            printToTerminal(`<span class="term-green">🎉 Correct! The number was ${mode.target}</span>`, false);
            printToTerminal(`<span class="term-dim">Attempts: ${mode.attempts}</span>`, false);
            AppState.gameMode = null;
        } else if (guess < mode.target) {
            printToTerminal('<span class="term-yellow">📈 Too low! Try higher.</span>', false);
        } else {
            printToTerminal('<span class="term-yellow">📉 Too high! Try lower.</span>', false);
        }
    } else if (mode.type === 'rps') {
        const choices = ['rock', 'paper', 'scissors'];
        const userChoice = input.toLowerCase();
        if (!choices.includes(userChoice)) {
            printToTerminal('<span class="term-red">Type rock, paper, or scissors!</span>', false);
            return;
        }
        const compChoice = choices[Math.floor(Math.random() * 3)];
        let result = '';
        
        if (userChoice === compChoice) result = "It's a tie!";
        else if (
            (userChoice === 'rock' && compChoice === 'scissors') ||
            (userChoice === 'paper' && compChoice === 'rock') ||
            (userChoice === 'scissors' && compChoice === 'paper')
        ) result = '<span class="term-green">You win! 🎉</span>';
        else result = '<span class="term-red">Computer wins! 💻</span>';
        
        printToTerminal(`You: ${userChoice} | Computer: ${compChoice}`, false);
        printToTerminal(result, false);
        AppState.gameMode = null;
    }
    
    scrollTerminal();
}

function printToTerminal(html, animate = false) {
    const line = document.createElement('div');
    line.className = 'output-line';
    line.innerHTML = html;
    DOM.terminalOutput.appendChild(line);
    scrollTerminal();
}

function scrollTerminal() {
    DOM.terminalBody.scrollTop = DOM.terminalBody.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// TERMINAL COMMANDS
// ============================================
const terminalCommands = {
    help: () => {
        return `<div class="term-box">
<div class="term-box-title">📚 Available Commands</div>
<div class="term-grid">
  <div><span class="term-yellow">about</span> <span class="term-dim">- Profile info</span></div>
  <div><span class="term-yellow">skills</span> <span class="term-dim">- Tech skills</span></div>
  <div><span class="term-yellow">projects</span> <span class="term-dim">- Show projects</span></div>
  <div><span class="term-yellow">contact</span> <span class="term-dim">- Contact info</span></div>
  <div><span class="term-yellow">weather</span> <span class="term-dim">- Check weather</span></div>
  <div><span class="term-yellow">time</span> <span class="term-dim">- Current time</span></div>
  <div><span class="term-yellow">ls</span> <span class="term-dim">- List files</span></div>
  <div><span class="term-yellow">cd</span> <span class="term-dim">- Change directory</span></div>
  <div><span class="term-yellow">cat</span> <span class="term-dim">- View file</span></div>
  <div><span class="term-yellow">pwd</span> <span class="term-dim">- Current path</span></div>
  <div><span class="term-yellow">game</span> <span class="term-dim">- Play games</span></div>
  <div><span class="term-yellow">hack</span> <span class="term-dim">- Fake hacking</span></div>
  <div><span class="term-yellow">ascii</span> <span class="term-dim">- ASCII art</span></div>
  <div><span class="term-yellow">joke</span> <span class="term-dim">- Random joke</span></div>
  <div><span class="term-yellow">neofetch</span> <span class="term-dim">- System info</span></div>
  <div><span class="term-yellow">clear</span> <span class="term-dim">- Clear screen</span></div>
</div>
</div>
<span class="term-dim">💡 Tip: Use Tab to autocomplete, Up/Down for history</span>`;
    },

    about: () => {
        const u = teamMembers[AppState.currentUser];
        return `<div class="term-box" style="border-left-color: ${u.color}">
<div class="term-box-title" style="color:${u.color}">👤 ${u.name}</div>
<div><span class="term-dim">Role:</span> <span class="term-blue">${u.role}</span></div>
<div><span class="term-dim">Location:</span> ${u.city}, ${u.country}</div>
<div><span class="term-dim">Fun Fact:</span> <span class="term-yellow">${u.fun}</span></div>
</div>`;
    },

    skills: () => {
        const u = teamMembers[AppState.currentUser];
        let html = `<div class="term-box-title" style="color:${u.color}">🛠️ Technical Skills</div>`;
        u.skills.forEach(s => {
            html += `<div style="margin:8px 0;display:flex;gap:12px;align-items:center;">
<span style="min-width:100px;color:var(--term-orange)">${s.name}</span>
<div style="flex:1;height:10px;background:var(--term-bg-lighter);border-radius:5px;overflow:hidden;">
<div style="height:100%;width:${s.level}%;background:linear-gradient(90deg,${u.color},var(--term-cyan));border-radius:5px;"></div>
</div>
<span class="term-dim">${s.level}%</span>
</div>`;
        });
        return `<div class="term-box">${html}</div>`;
    },

    projects: () => {
        const u = teamMembers[AppState.currentUser];
        if (!u.projects.length) return '<span class="term-dim">No projects yet.</span>';
        let html = `<div class="term-box-title" style="color:${u.color}">📁 Projects</div>`;
        u.projects.forEach(p => {
            html += `<div class="term-box" style="margin:10px 0;border-left:3px solid var(--term-blue);">
<div style="color:var(--term-yellow);font-weight:600;margin-bottom:6px;">${p.name} <span class="term-dim">⭐ ${p.stars}</span></div>
<div class="term-dim" style="margin-bottom:8px;">${p.desc}</div>
<div>${p.tech.map(t => `<span style="background:var(--term-bg-lighter);color:var(--term-cyan);padding:2px 8px;border-radius:4px;font-size:0.8em;margin-right:5px;">${t}</span>`).join('')}</div>
</div>`;
        });
        return html;
    },

    contact: () => {
        const u = teamMembers[AppState.currentUser];
        return `<div class="term-box">
<div class="term-box-title">📧 Contact Information</div>
<div><span class="term-dim">Email:</span> <span class="term-blue">${u.email}</span></div>
<div><span class="term-dim">GitHub:</span> <span class="term-blue">${u.github}</span></div>
<div><span class="term-dim">Location:</span> ${u.city}, ${u.country}</div>
</div>`;
    },

    weather: async () => {
        const u = teamMembers[AppState.currentUser];
        const conditions = [
            { icon: '☀️', desc: 'Sunny', temp: 28 },
            { icon: '⛅', desc: 'Partly Cloudy', temp: 24 },
            { icon: '☁️', desc: 'Cloudy', temp: 20 },
            { icon: '🌧️', desc: 'Rainy', temp: 18 },
            { icon: '⛈️', desc: 'Thunderstorm', temp: 16 }
        ];
        const w = conditions[Math.floor(Math.random() * conditions.length)];

        return `<div class="term-box" style="text-align:center;max-width:250px;">
<div style="font-size:48px;margin-bottom:10px;">${w.icon}</div>
<div style="font-size:32px;font-weight:700;color:var(--term-yellow);">${w.temp}°C</div>
<div class="term-blue" style="margin:5px 0;">${w.desc}</div>
<div class="term-dim">${u.city}, ${u.country}</div>
</div>`;
    },

    time: () => {
        const now = new Date();
        return `<div class="term-box">
<div><span class="term-dim">Local:</span> ${now.toLocaleString()}</div>
<div><span class="term-dim">UTC:</span> ${now.toUTCString()}</div>
<div><span class="term-dim">Timestamp:</span> ${now.getTime()}</div>
</div>`;
    },

    pwd: () => `<span class="term-cyan">${AppState.currentDir}</span>`,

    ls: (args) => {
        const path = args[0] || AppState.currentDir;
        const parts = path.split('/').filter(Boolean);
        let curr = fileSystem;

        for (const part of parts) {
            if (curr && curr[part]) curr = curr[part];
            else return `<span class="term-red">ls: cannot access '${path}': No such file or directory</span>`;
        }

        if (typeof curr === 'string') {
            return `<span class="term-red">ls: '${path}': Not a directory</span>`;
        }

        const items = Object.entries(curr).map(([name, val]) => {
            const isDir = typeof val === 'object';
            return `<span class="${isDir ? 'term-blue' : ''}">${isDir ? '📁' : '📄'} ${name}</span>`;
        });

        return `<div style="display:flex;flex-wrap:wrap;gap:15px;">${items.join('')}</div>`;
    },

    cd: (args) => {
        const path = args[0];
        if (!path || path === '~') {
            AppState.currentDir = `/home/${AppState.currentUser}`;
            updateTerminalPrompt();
            return null;
        }
        if (path === '..') {
            const parts = AppState.currentDir.split('/').filter(Boolean);
            if (parts.length > 1) {
                parts.pop();
                AppState.currentDir = '/' + parts.join('/');
            }
            updateTerminalPrompt();
            return null;
        }

        const newPath = path.startsWith('/') ? path : `${AppState.currentDir}/${path}`;
        const parts = newPath.split('/').filter(Boolean);
        let curr = fileSystem;

        for (const part of parts) {
            if (curr && curr[part]) curr = curr[part];
            else return `<span class="term-red">cd: '${path}': No such file or directory</span>`;
        }

        if (typeof curr === 'string') {
            return `<span class="term-red">cd: '${path}': Not a directory</span>`;
        }

        AppState.currentDir = newPath;
        updateTerminalPrompt();
        return null;
    },

    cat: (args) => {
        const filename = args[0];
        if (!filename) return `<span class="term-red">cat: missing file operand</span>`;

        const path = filename.startsWith('/') ? filename : `${AppState.currentDir}/${filename}`;
        const parts = path.split('/').filter(Boolean);
        const fname = parts.pop();
        let curr = fileSystem;

        for (const part of parts) {
            if (curr && curr[part]) curr = curr[part];
            else return `<span class="term-red">cat: '${filename}': No such file or directory</span>`;
        }

        if (!curr || typeof curr !== 'object' || !curr[fname]) {
            return `<span class="term-red">cat: '${filename}': No such file or directory</span>`;
        }

        const content = curr[fname];
        if (typeof content === 'object') {
            return `<span class="term-red">cat: '${filename}': Is a directory</span>`;
        }

        return `<div style="background:var(--term-bg-light);padding:12px;border-radius:6px;margin:8px 0;"><pre style="white-space:pre-wrap;color:var(--term-fg-dim);margin:0;">${escapeHtml(content)}</pre></div>`;
    },

    game: (args) => {
        const game = args[0];
        if (!game) {
            return `<div class="term-box">
<div class="term-box-title">🎮 Available Games</div>
<div><span class="term-yellow">game guess</span> <span class="term-dim">- Guess number (1-100)</span></div>
<div><span class="term-yellow">game rps</span> <span class="term-dim">- Rock Paper Scissors</span></div>
</div>`;
        }

        if (game === 'guess') {
            AppState.gameMode = { type: 'guess', target: Math.floor(Math.random() * 100) + 1, attempts: 0 };
            return `<div class="term-box">
<div class="term-box-title">🎯 Guess the Number</div>
<div>I'm thinking of a number between 1 and 100.</div>
<div class="term-dim">Type your guess and press Enter!</div>
</div>`;
        }

        if (game === 'rps') {
            AppState.gameMode = { type: 'rps' };
            return `<div class="term-box">
<div class="term-box-title">✊ Rock Paper Scissors</div>
<div>Type <span class="term-yellow">rock</span>, <span class="term-yellow">paper</span>, or <span class="term-yellow">scissors</span>!</div>
</div>`;
        }

        return `<span class="term-red">Unknown game: ${game}</span>`;
    },

    hack: () => {
        const steps = [
            'Initializing hack sequence...',
            'Bypassing firewall...',
            'Cracking passwords...',
            'Accessing mainframe...',
            'Downloading secrets...',
            'Covering tracks...'
        ];

        let html = '';
        steps.forEach((step, i) => {
            html += `<div style="animation:fadeIn 0.3s ${i * 0.4}s both"><span class="term-green">[${'='.repeat(i + 1)}${'>'.padEnd(7 - i)}]</span> ${step}</div>`;
        });
        html += `<div class="term-green" style="margin-top:10px;animation:fadeIn 0.3s 2.4s both">ACCESS GRANTED (just kidding! 😄)</div>`;
        return html;
    },

    ascii: (args) => {
        const art = args[0] || 'logo';
        if (asciiArt[art]) {
            return `<pre style="color:var(--term-cyan);font-size:10px;line-height:1.2;overflow-x:auto;">${asciiArt[art]}</pre>`;
        }
        return `<span class="term-red">Unknown art: ${art}</span>
<span class="term-dim">Available: logo, tux, cat</span>`;
    },

    joke: () => {
        const jokes = [
            "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
            "Why did the developer go broke? Because he used up all his cache! 💸",
            "What's a programmer's favorite hangout place? Foo Bar! 🍺",
            "Why do Java developers wear glasses? Because they don't C#! 👓",
            "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
            "Why was the function sad? It didn't get any calls! 📞",
            "What's the object-oriented way to become wealthy? Inheritance! 💰"
        ];
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        return `<div class="term-box">
<div class="term-box-title">😂 Random Joke</div>
<div>${joke}</div>
</div>`;
    },

    neofetch: () => {
        const u = teamMembers[AppState.currentUser];
        const uptime = Math.floor((Date.now() - AppState.startTime) / 1000);
        return `<div style="display:flex;gap:20px;align-items:flex-start;flex-wrap:wrap;">
<pre style="color:var(--term-green);font-size:9px;line-height:1.1;margin:0;">${asciiArt.tux}</pre>
<div>
<div><span class="term-green">${u.name}</span>@codecraft</div>
<div class="term-dim">---------------------</div>
<div><span class="term-dim">OS:</span> CodeCraft Terminal</div>
<div><span class="term-dim">Host:</span> GitHub Pages</div>
<div><span class="term-dim">Kernel:</span> Vanilla JS ES6+</div>
<div><span class="term-dim">Uptime:</span> ${uptime}s</div>
<div><span class="term-dim">Shell:</span> custom-terminal</div>
<div><span class="term-dim">Resolution:</span> ${window.innerWidth}x${window.innerHeight}</div>
<div><span class="term-dim">Theme:</span> Cyberpunk</div>
</div>
</div>`;
    },

    sudo: () => {
        return `<span class="term-red">Nice try! You don't have sudo privileges here.</span>
<span class="term-dim">(we log these attempts btw 👀)</span>`;
    },

    whoami: () => `<span style="color:${teamMembers[AppState.currentUser].color}">${AppState.currentUser}</span>`,

    echo: (args) => escapeHtml(args.join(' ')),

    history: () => {
        if (!AppState.commandHistory.length) return '<span class="term-dim">No command history.</span>';
        return AppState.commandHistory.map((c, i) => `<span class="term-dim">${i + 1}</span> ${escapeHtml(c)}`).join('\n');
    },

    clear: () => {
        DOM.terminalOutput.innerHTML = '';
        return null;
    },

    rm: (args) => {
        if (args[0] === '-rf' && args[1] === '/') {
            return `<span class="term-red">bruh. you really tried to rm -rf / ?</span>
<span class="term-dim">I'm not letting you destroy my beautiful filesystem.</span>`;
        }
        return `<span class="term-dim">File removed (simulated)</span>`;
    }
};

// ============================================
// SOCIAL MODAL
// ============================================
function initSocialModal() {
    DOM.linksButton.addEventListener('click', (e) => {
        e.preventDefault();
        DOM.socialModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
        DOM.socialModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    DOM.closeModal.addEventListener('click', closeModal);
    DOM.socialModal.addEventListener('click', (e) => {
        if (e.target === DOM.socialModal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && DOM.socialModal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ============================================
// GUESTBOOK
// ============================================
function initGuestbook() {
    if (!DOM.guestbookForm) return;
    
    DOM.guestbookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = DOM.guestbookForm.querySelector('textarea').value.trim();
        const name = DOM.guestbookForm.querySelector('input').value.trim();
        
        if (message && name) {
            const entry = document.createElement('div');
            entry.className = 'guestbook-entry';
            entry.innerHTML = `
                <div class="entry-header">
                    <div class="user-avatar">👤</div>
                    <div class="entry-info">
                        <h3 class="entry-author">${escapeHtml(name)}</h3>
                        <div class="entry-meta">
                            <span class="entry-date">📅 ${new Date().toLocaleString('en-US', { 
                                month: 'short', 
                                day: 'numeric', 
                                hour: 'numeric', 
                                minute: '2-digit',
                                hour12: true 
                            })}</span>
                        </div>
                    </div>
                </div>
                <div class="entry-content">
                    <p>${escapeHtml(message)}</p>
                </div>
            `;
            
            DOM.guestbookEntries.prepend(entry);
            DOM.guestbookForm.reset();
        }
    });
}

// ============================================
// NEWSLETTER
// ============================================
function initNewsletter() {
    if (!DOM.newsletterForm) return;
    
    DOM.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = DOM.newsletterForm.querySelector('input').value.trim();
        
        if (email) {
            alert(`Thanks for subscribing with ${email}! We'll keep you updated on our latest projects.`);
            DOM.newsletterForm.reset();
        }
    });
}

// ============================================
// TEAM AVATAR CLICKS
// ============================================
function initTeamAvatars() {
    document.querySelectorAll('.team-avatar').forEach(avatar => {
        avatar.addEventListener('click', () => {
            const member = avatar.dataset.member;
            switchTab('about');
            switchUser(member);
        });
    });
    
    document.querySelectorAll('.team-member-card').forEach(card => {
        card.addEventListener('click', () => {
            const member = card.dataset.member;
            switchUser(member);
            DOM.terminalInput.focus();
        });
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    cacheDOMElements();
    initTabNavigation();
    initThemeToggle();
    initTerminal();
    initSocialModal();
    initGuestbook();
    initNewsletter();
    initTeamAvatars();
    
    console.log('🚀 CodeCraft Trio Portfolio Loaded!');
    console.log('💻 Type "help" in the terminal to get started');
});
