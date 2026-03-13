// js/script.js

// ==================== UTILITY FUNCTIONS ====================
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  
  if (type === 'success') toast.style.borderLeftColor = '#059669';
  if (type === 'error') toast.style.borderLeftColor = '#dc2626';
  if (type === 'warning') toast.style.borderLeftColor = '#f97316';
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function generatePassword() {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+{}[]<>?';
  const all = uppercase + lowercase + numbers + symbols;
  
  let password = '';
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  
  for (let i = password.length; i < 16; i++) {
    password += all[Math.floor(Math.random() * all.length)];
  }
  
  return password.split('').sort(() => Math.random() - 0.5).join('');
}

function checkPasswordStrength(password) {
  let score = 0;
  
  if (password.length >= 12) score += 2;
  else if (password.length >= 8) score += 1;
  
  if (/[A-Z]/.test(password)) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  
  if (score >= 6) return '🔒 Very Strong';
  if (score >= 5) return '🔒 Strong';
  if (score >= 3) return '⚠️ Medium';
  return '❌ Weak';
}

// ==================== SEARCH DATABASE ====================
const searchDatabase = [
  { title: 'Remove malware from Windows', category: 'guides', content: 'Step-by-step guide to remove malware from Windows systems.', keywords: 'malware virus trojan windows' },
  { title: 'Identify phishing emails', category: 'guides', content: 'Learn to spot phishing attempts and protect your data.', keywords: 'phishing email scam' },
  { title: 'Password strength checker', category: 'tools', content: 'Check your password security and get improvement tips.', keywords: 'password strength tool' },
  { title: 'Ransomware decryption tools', category: 'tools', content: 'Free tools to decrypt files locked by ransomware.', keywords: 'ransomware decrypt' },
  { title: 'Forum: Recent attacks discussion', category: 'forum', content: 'Community discussions about latest cybersecurity threats.', keywords: 'forum discussion attacks' },
  { title: 'Contact a security expert', category: 'experts', content: 'Get help from certified cybersecurity professionals.', keywords: 'expert help contact' },
  { title: 'Secure your router', category: 'guides', content: 'Router security best practices to protect your network.', keywords: 'router network secure' },
  { title: 'Two-factor authentication setup', category: 'guides', content: 'Enable 2FA on all accounts for enhanced security.', keywords: '2fa two factor authentication' },
  { title: 'Data breach check', category: 'tools', content: 'Check if your email was involved in a data breach.', keywords: 'breach data leak' }
];

// ==================== SEARCH FUNCTIONALITY ====================
let currentFilter = 'all';

function performSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const resultsDiv = document.getElementById('searchResults');
  
  if (!query) {
    resultsDiv.classList.remove('show');
    return;
  }
  
  const filteredResults = searchDatabase.filter(item => {
    const matchesFilter = currentFilter === 'all' || item.category === currentFilter;
    const matchesQuery = item.title.toLowerCase().includes(query) || 
                         item.content.toLowerCase().includes(query) ||
                         item.keywords.includes(query);
    return matchesFilter && matchesQuery;
  });
  
  if (filteredResults.length === 0) {
    resultsDiv.innerHTML = '<div class="search-result-item">No results found. Try different keywords.</div>';
  } else {
    resultsDiv.innerHTML = filteredResults.map(item => `
      <div class="search-result-item" data-category="${item.category}">
        <h4><i class="fas fa-${item.category === 'guides' ? 'book' : item.category === 'tools' ? 'wrench' : item.category === 'forum' ? 'comments' : 'user-tie'}"></i> ${item.title}</h4>
        <p>${item.content}</p>
      </div>
    `).join('');
    
    document.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        showToast(`Opening: ${item.querySelector('h4').textContent}`, 'info');
      });
    });
  }
  
  resultsDiv.classList.add('show');
}

// ==================== CHAT BOT ====================
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendMessage');
const chatTyping = document.getElementById('chatTyping');

function addMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `msg ${sender}`;
  msgDiv.textContent = text;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
  chatTyping.classList.add('show');
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTyping() {
  chatTyping.classList.remove('show');
}

function getBotResponse(message) {
  const msg = message.toLowerCase();
  
  // Command handling
  if (msg.startsWith('/')) {
    const cmd = msg.split(' ')[0];
    switch(cmd) {
      case '/help':
        return "Available commands:\n/help - Show this message\n/tools - List available tools\n/contact - Contact support\n/emergency - Emergency info\n/scan - Run quick scan\n/clear - Clear chat";
      case '/tools':
        return "🛠️ Available tools:\n- Hash Identifier\n- Port Scanner\n- Password Generator\n- Phishing Checker\n- Breach Scanner";
      case '/contact':
        return "📞 Contact options:\n- Emergency: +1 (555) 237-8247\n- Email: support@cyberhelp.com\n- Live Chat: 24/7";
      case '/emergency':
        return "🚨 EMERGENCY PROTOCOL:\n1. Call: +1 (555) 237-8247\n2. Disconnect from network\n3. Run emergency scan\n4. Wait for expert assistance";
      case '/scan':
        return "🔄 Running quick system scan...\n✓ Checking for malware\n✓ Analyzing processes\n✓ Checking network connections\n✓ Scan complete - No immediate threats detected (simulated)";
      case '/clear':
        chatMessages.innerHTML = '';
        addMessage('Chat cleared. How can I help you?', 'support');
        return '';
      default:
        return `Unknown command: ${cmd}. Type /help for available commands.`;
    }
  }
  
  // Keyword responses
  if (msg.includes('malware') || msg.includes('virus')) {
    return "🦠 Malware detected? Run a full antivirus scan immediately. Would you like me to guide you through the removal process?";
  }
  if (msg.includes('phish')) {
    return "🎣 Suspicious email? Don't click any links. Forward it to phish@cyberhelp.com and I'll analyze it immediately.";
  }
  if (msg.includes('hack') || msg.includes('account')) {
    return "🔓 Account compromised? 1. Change password 2. Enable 2FA 3. Check recent activity. Need step-by-step help?";
  }
  if (msg.includes('password')) {
    return "🔐 Need a strong password? I can generate one for you! Try our password generator tool above.";
  }
  if (msg.includes('ransomware')) {
    return "💰 Ransomware attack? Do NOT pay. Disconnect immediately and call our emergency hotline: +1 (555) 237-8247";
  }
  if (msg.includes('2fa') || msg.includes('two factor')) {
    return "📱 Two-factor authentication adds security. Which platform do you need help with? (Google, Microsoft, etc.)";
  }
  if (msg.includes('hello') || msg.includes('hi')) {
    return "👋 Hello! I'm your security assistant. How can I help protect you today?";
  }
  if (msg.includes('thank')) {
    return "You're welcome! Stay safe online! 🛡️";
  }
  
  return "I understand. Could you provide more details? Or try one of these: malware, phishing, hacked, password, ransomware, 2fa";
}

// ==================== SUPPORT TICKETS ====================
let supportTickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');

function displayTickets() {
  const ticketList = document.getElementById('ticketList');
  
  if (supportTickets.length === 0) {
    ticketList.innerHTML = '<p>No support tickets found.</p>';
    return;
  }
  
  ticketList.innerHTML = supportTickets.reverse().map(ticket => `
    <div class="ticket-item">
      <h4>
        ${ticket.id}
        <span class="ticket-status ${ticket.status === 'open' ? 'status-open' : 'status-closed'}">${ticket.status}</span>
      </h4>
      <p><strong>Subject:</strong> ${ticket.subject}</p>
      <p><strong>Priority:</strong> ${ticket.priority}</p>
      <p><strong>Message:</strong> ${ticket.message.substring(0, 50)}...</p>
      <p><small>${new Date(ticket.timestamp).toLocaleString()}</small></p>
    </div>
  `).join('');
}

// ==================== NAVIGATION ====================
function showSection(sectionId) {
  document.getElementById('home-section').style.display = 'none';
  document.getElementById('services-section').style.display = 'none';
  document.getElementById('contact-section').style.display = 'none';
  
  if (sectionId === 'home') document.getElementById('home-section').style.display = 'flex';
  if (sectionId === 'services') document.getElementById('services-section').style.display = 'block';
  if (sectionId === 'contact') document.getElementById('contact-section').style.display = 'block';
}

// ==================== EVENT LISTENERS ====================
document.addEventListener('DOMContentLoaded', function() {
  
  // Search functionality
  document.getElementById('searchBtn').addEventListener('click', performSearch);
  document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
  });

  document.querySelectorAll('.search-filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.search-filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.dataset.filter;
      performSearch();
    });
  });

  // Hash Identifier
  document.getElementById('identifyHash').addEventListener('click', () => {
    const hash = document.getElementById('hashInput').value.trim();
    const result = document.getElementById('hashResult');
    
    if (!hash) {
      result.textContent = '❌ Please enter a hash';
      showToast('Please enter a hash', 'warning');
      return;
    }
    
    const len = hash.length;
    let type = 'Unknown';
    
    if (len === 32) type = 'MD5';
    else if (len === 40) type = 'SHA-1';
    else if (len === 56) type = 'SHA-224';
    else if (len === 64) type = 'SHA-256';
    else if (len === 96) type = 'SHA-384';
    else if (len === 128) type = 'SHA-512';
    else type = `Unknown (${len} chars)`;
    
    result.textContent = `🔍 Detected: ${type}`;
    showToast(`Hash identified as ${type}`, 'success');
  });

  document.getElementById('clearHash').addEventListener('click', () => {
    document.getElementById('hashInput').value = '';
    document.getElementById('hashResult').textContent = 'Cleared';
    showToast('Hash input cleared', 'info');
  });

  // Port Scanner
  document.getElementById('scanPorts').addEventListener('click', () => {
    const host = document.getElementById('portInput').value.trim() || 'scanme.nmap.org';
    const result = document.getElementById('portResult');
    
    result.textContent = `🔄 Scanning ${host}...`;
    showToast(`Scanning ${host}`, 'info');
    
    setTimeout(() => {
      const openPorts = ['22 (SSH)', '80 (HTTP)', '443 (HTTPS)', '8080 (HTTP-Alt)'];
      result.textContent = `✅ Open ports on ${host}: ${openPorts.join(' · ')} (simulated)`;
      showToast('Scan complete', 'success');
    }, 2000);
  });

  document.getElementById('scanCommonPorts').addEventListener('click', () => {
    const host = document.getElementById('portInput').value.trim() || 'scanme.nmap.org';
    const result = document.getElementById('portResult');
    
    result.textContent = `🔄 Scanning common ports on ${host}...`;
    
    setTimeout(() => {
      const commonPorts = ['21 (FTP)', '22 (SSH)', '23 (Telnet)', '25 (SMTP)', '80 (HTTP)', '443 (HTTPS)', '3306 (MySQL)', '3389 (RDP)'];
      result.textContent = `✅ Common open ports: ${commonPorts.slice(0, 4).join(' · ')} (simulated)`;
      showToast('Common ports scan complete', 'success');
    }, 3000);
  });

  // Password Generator
  const passwordDisplay = document.getElementById('passwordDisplay');
  const strengthDisplay = document.getElementById('strengthDisplay');
  
  document.getElementById('generatePass').addEventListener('click', () => {
    const newPass = generatePassword();
    passwordDisplay.textContent = newPass;
    strengthDisplay.textContent = 'Strength: ' + checkPasswordStrength(newPass);
    showToast('New password generated', 'success');
  });

  document.getElementById('copyPass').addEventListener('click', () => {
    const pass = passwordDisplay.textContent;
    navigator.clipboard.writeText(pass).then(() => {
      showToast('Password copied!', 'success');
    }).catch(() => {
      showToast('Failed to copy', 'error');
    });
  });

  document.getElementById('checkStrength').addEventListener('click', () => {
    const pass = passwordDisplay.textContent;
    const strength = checkPasswordStrength(pass);
    strengthDisplay.textContent = 'Strength: ' + strength;
    showToast(`Password strength: ${strength}`, 'info');
  });

  passwordDisplay.textContent = generatePassword();
  strengthDisplay.textContent = 'Strength: ' + checkPasswordStrength(passwordDisplay.textContent);

  // Chat functionality
  sendButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (!message) return;
    
    addMessage(message, 'user');
    chatInput.value = '';
    
    showTyping();
    
    setTimeout(() => {
      hideTyping();
      const response = getBotResponse(message);
      if (response) {
        addMessage(response, 'support');
      }
    }, 1500);
  });

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendButton.click();
    }
  });

  // Chat commands
  document.querySelectorAll('.chat-command').forEach(cmd => {
    cmd.addEventListener('click', () => {
      chatInput.value = cmd.dataset.command;
      sendButton.click();
    });
  });

  // Chat suggestions
  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chatInput.value = chip.dataset.suggestion;
      sendButton.click();
    });
  });

  // Contact form
  document.getElementById('submitContact').addEventListener('click', () => {
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value.trim();
    const priority = document.getElementById('contactPriority').value;
    
    if (!name || !email || !message) {
      showToast('Please fill in all required fields', 'warning');
      return;
    }
    
    const ticket = {
      id: 'TICKET-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      name,
      email,
      subject,
      message,
      priority,
      status: 'open',
      timestamp: new Date().toISOString()
    };
    
    supportTickets.push(ticket);
    localStorage.setItem('supportTickets', JSON.stringify(supportTickets));
    
    showToast(`Ticket ${ticket.id} created successfully!`, 'success');
    
    // Clear form
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactMessage').value = '';
    
    // Add to chat
    addMessage(`Support ticket created: ${ticket.id} (${priority} priority)`, 'system');
  });

  // View tickets modal
  document.getElementById('viewTickets').addEventListener('click', (e) => {
    e.preventDefault();
    displayTickets();
    document.getElementById('ticketsModal').classList.add('show');
  });

  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('ticketsModal').classList.remove('show');
  });

  // Navigation
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      const page = link.dataset.page;
      showSection(page);
      showToast(`Navigating to ${link.textContent}`, 'info');
    });
  });

  // Emergency buttons
  document.getElementById('emergencyBtn').addEventListener('click', () => {
    showToast('🚨 Connecting to emergency services...', 'warning');
  });

  document.getElementById('panicBtn').addEventListener('click', () => {
    showToast('🔴 Emergency hotline: +1 (555) 237-8247', 'error');
    addMessage('🚨 EMERGENCY: Please call our hotline immediately: +1 (555) 237-8247', 'system');
  });

  // Service cards
  document.querySelectorAll('.card-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const service = link.dataset.service || 'general';
      showToast(`Service request: ${service} - Expert will contact you soon`, 'info');
      addMessage(`Service requested: ${service} - Support ticket created`, 'system');
    });
  });

  // Welcome toast
  setTimeout(() => {
    showToast('🛡️ Welcome to CyberHelp! Type /help for commands', 'info');
  }, 500);
});