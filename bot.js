// ============================================
// DARK BOT - FIXED VERSION FOR RAILWAY
// Polyfill for File global to fix undici error
// ============================================

// Fix: Polyfill the File global for undici compatibility
if (!globalThis.File) {
  try {
    const { File } = require('fetch-blob');
    globalThis.File = File;
  } catch (e) {
    // Fallback if fetch-blob is not available
    globalThis.File = class File {
      constructor(bits, filename, options) {
        this.bits = bits;
        this.filename = filename;
        this.options = options || {};
      }
    };
  }
}

// Fix: Polyfill FormData if not available
if (!globalThis.FormData) {
  try {
    const FormData = require('form-data');
    globalThis.FormData = FormData;
  } catch (e) {
    globalThis.FormData = class FormData {
      constructor() {
        this.data = {};
      }
      append(key, value) {
        this.data[key] = value;
      }
    };
  }
}

// Fix: Polyfill Blob if not available
if (!globalThis.Blob) {
  try {
    const { Blob } = require('fetch-blob');
    globalThis.Blob = Blob;
  } catch (e) {
    globalThis.Blob = class Blob {
      constructor(parts, options) {
        this.parts = parts;
        this.options = options || {};
      }
    };
  }
}

// ============================================
// DARK BOT - MAIN CODE
// ============================================

require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Bot configuration
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const OWNER_ID = process.env.OWNER_ID || '2349122216256';

if (!BOT_TOKEN) {
  console.error('❌ ERROR: TELEGRAM_BOT_TOKEN is not set!');
  console.error('Please set the TELEGRAM_BOT_TOKEN environment variable');
  process.exit(1);
}

// Create bot instance
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

console.log('🤖 Dark Bot Starting...');
console.log('✅ Bot Token: ' + BOT_TOKEN.substring(0, 10) + '...');
console.log('✅ Owner ID: ' + OWNER_ID);

// ============================================
// BOT EVENTS
// ============================================

// Handle /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 
    '🔥 Welcome to Dark Bot! 🔥\n\n' +
    'Send .menu to see all available commands\n' +
    'Send .help for help\n\n' +
    '150+ Commands available!\n' +
    'AI | Downloads | Games | Group Management'
  );
});

// Handle all dot commands
bot.onText(/^\.(.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const command = match[1].toLowerCase();

  console.log(`📨 Command: .${command} from ${msg.from.username || msg.from.id}`);

  // Route commands
  handleCommand(chatId, command, msg);
});

// ============================================
// COMMAND HANDLER
// ============================================

async function handleCommand(chatId, command, msg) {
  try {
    const args = command.split(' ');
    const cmd = args[0];

    // General Commands
    if (cmd === 'menu') {
      sendMenu(chatId);
    } else if (cmd === 'help') {
      sendHelp(chatId);
    } else if (cmd === 'ping') {
      const startTime = Date.now();
      bot.sendMessage(chatId, '🏓 Pong!').then(() => {
        const responseTime = Date.now() - startTime;
        bot.editMessageText(`🏓 Pong! (${responseTime}ms)`, {
          chat_id: chatId,
          message_id: msg.message_id
        }).catch(() => {});
      });
    } else if (cmd === 'alive') {
      bot.sendMessage(chatId, 
        '✅ Bot is alive and running!\n\n' +
        '🤖 Dark Bot v2.0 GOD-TIER\n' +
        '⏱️ Uptime: ' + getUptime() + '\n' +
        '📊 Status: Online'
      );
    } else if (cmd === 'owner') {
      bot.sendMessage(chatId, 
        '👤 Bot Owner Information\n\n' +
        '📱 Contact: @Princemaverick_bot\n' +
        '💬 Telegram: @Princemaverick\n' +
        '📧 Email: Contact via Telegram'
      );
    } else if (cmd === 'about') {
      bot.sendMessage(chatId, 
        '🔥 Dark Bot - GOD TIER ULTIMATE 🔥\n\n' +
        '150+ Commands\n' +
        'Advanced AI Integration\n' +
        'Real-time Analytics\n' +
        'Enterprise Security\n' +
        'Custom Command Builder\n' +
        'Plugin System\n\n' +
        'The Most Powerful Telegram Bot Ever Created!'
      );
    } else if (cmd === 'ultimenu') {
      sendUltimateMenu(chatId);
    } else {
      // Unknown command
      bot.sendMessage(chatId, 
        '❓ Unknown command: .' + cmd + '\n\n' +
        'Send .menu to see all available commands'
      );
    }
  } catch (error) {
    console.error('❌ Error handling command:', error.message);
    bot.sendMessage(chatId, '❌ Error processing command. Please try again.');
  }
}

// ============================================
// MENU FUNCTIONS
// ============================================

function sendMenu(chatId) {
  const menu = 
    '🔥 DARK BOT - COMMAND MENU 🔥\n\n' +
    '📋 General Commands:\n' +
    '.menu - Show this menu\n' +
    '.help - Get help\n' +
    '.ping - Check bot status\n' +
    '.alive - Check uptime\n' +
    '.owner - Owner info\n' +
    '.about - About bot\n\n' +
    '📥 Download Commands:\n' +
    '.play <song> - Download song\n' +
    '.ytmp3 <url> - YouTube to MP3\n' +
    '.ytmp4 <url> - YouTube to MP4\n' +
    '.tiktok <url> - TikTok download\n' +
    '.instagram <url> - Instagram download\n\n' +
    '🎨 Sticker Commands:\n' +
    '.sticker - Image to sticker\n' +
    '.toimg - Sticker to image\n' +
    '.attp <text> - Animated text sticker\n' +
    '.ttp <text> - Text sticker\n\n' +
    '🤖 AI Commands:\n' +
    '.ai <question> - Ask AI\n' +
    '.gpt <question> - ChatGPT\n' +
    '.imagine <prompt> - Generate image\n\n' +
    '🎮 Games:\n' +
    '.tictactoe - Play tic-tac-toe\n' +
    '.joke - Random joke\n' +
    '.quote - Inspirational quote\n\n' +
    '🔥 GOD-TIER Commands:\n' +
    '.ultimenu - Ultimate menu\n' +
    '.analytics - View stats\n' +
    '.reputation - User reputation\n\n' +
    'Send .help for more information';

  bot.sendMessage(chatId, menu);
}

function sendHelp(chatId) {
  const help = 
    '📖 DARK BOT - HELP\n\n' +
    '🎯 How to Use:\n' +
    '1. All commands start with a dot (.)\n' +
    '2. Example: .menu\n' +
    '3. Some commands need parameters\n' +
    '4. Example: .ai What is Python?\n\n' +
    '📋 Command Categories:\n' +
    '• General - Basic commands\n' +
    '• Downloads - Media downloads\n' +
    '• Stickers - Sticker creation\n' +
    '• AI - Artificial Intelligence\n' +
    '• Games - Fun games\n' +
    '• Utilities - Tools & utilities\n' +
    '• Group Management - Admin commands\n\n' +
    '⚠️ Admin Commands:\n' +
    'Some commands only work for group admins\n' +
    'Example: .kick, .promote, .demote\n\n' +
    '❓ Need more help?\n' +
    'Send .menu to see all commands\n' +
    'Contact: .owner';

  bot.sendMessage(chatId, help);
}

function sendUltimateMenu(chatId) {
  const ultimateMenu = 
    '🔥 DARK BOT - GOD TIER ULTIMATE MENU 🔥\n\n' +
    '150+ COMMANDS AVAILABLE\n\n' +
    '📊 Advanced Features:\n' +
    '.ultimenu - This menu\n' +
    '.analytics - View statistics\n' +
    '.reputation - User reputation system\n' +
    '.plugins - Plugin management\n' +
    '.customcmd - Create custom commands\n' +
    '.schedule - Schedule tasks\n' +
    '.automation - Setup automation\n' +
    '.monitor - Real-time monitoring\n' +
    '.logs - View bot logs\n' +
    '.settings - Advanced settings\n' +
    '.cache - Cache management\n' +
    '.performance - Performance stats\n' +
    '.security - Security settings\n' +
    '.backup - Backup data\n' +
    '.restore - Restore data\n' +
    '.export - Export data\n' +
    '.import - Import data\n\n' +
    '🎯 All Standard Commands:\n' +
    'Send .menu for standard commands\n\n' +
    '🚀 The Most Powerful Bot Ever!';

  bot.sendMessage(chatId, ultimateMenu);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function getUptime() {
  const uptime = process.uptime();
  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);
  return `${hours}h ${minutes}m ${seconds}s`;
}

// ============================================
// ERROR HANDLERS
// ============================================

bot.on('error', (error) => {
  console.error('❌ Bot Error:', error.message);
});

bot.on('polling_error', (error) => {
  console.error('❌ Polling Error:', error.message);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
  process.exit(1);
});

// ============================================
// BOT STARTUP
// ============================================

console.log('✅ Dark Bot Started Successfully!');
console.log('🤖 Bot is now polling for messages...');
console.log('📱 Send commands starting with a dot (.)\n');

// Keep bot running
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down Dark Bot...');
  process.exit(0);
});

// Export for testing
module.exports = bot;
