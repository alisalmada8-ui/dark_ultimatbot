# 🔥 Dark Bot - FIXED VERSION 🔥

**The Most Powerful Telegram Bot with 150+ Commands**

## ✅ What's Fixed

This version fixes the `ReferenceError: File is not defined` error that was causing crashes on Railway.

### Fixes Applied:
1. ✅ **Polyfill for File global** - Added fetch-blob polyfill
2. ✅ **FormData polyfill** - Added form-data support
3. ✅ **Blob polyfill** - Added blob support
4. ✅ **Compatible dependencies** - Updated to Node 18+ compatible versions
5. ✅ **Error handling** - Added proper error handlers

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Bot Token
Create a `.env` file:
```
TELEGRAM_BOT_TOKEN=your_bot_token_here
OWNER_ID=2349122216256
NODE_ENV=production
```

### 3. Run Bot
```bash
npm start
```

## 📋 150+ Commands

### General Commands
- `.menu` - Show all commands
- `.help` - Get help
- `.ping` - Check bot status
- `.alive` - Check uptime
- `.owner` - Owner info
- `.about` - About bot

### Download Commands
- `.play <song>` - Download song
- `.ytmp3 <url>` - YouTube to MP3
- `.ytmp4 <url>` - YouTube to MP4
- `.tiktok <url>` - TikTok download
- `.instagram <url>` - Instagram download

### AI Commands
- `.ai <question>` - Ask AI
- `.gpt <question>` - ChatGPT
- `.imagine <prompt>` - Generate image

### Games
- `.tictactoe` - Tic-tac-toe
- `.joke` - Random joke
- `.quote` - Quote

### GOD-TIER Commands
- `.ultimenu` - Ultimate menu
- `.analytics` - View stats
- `.reputation` - User reputation
- `.plugins` - Plugin management
- `.customcmd` - Custom commands
- `.schedule` - Schedule tasks
- `.automation` - Automation setup
- `.monitor` - Real-time monitoring
- `.logs` - View logs
- `.settings` - Settings
- `.cache` - Cache management
- `.performance` - Performance stats
- `.security` - Security settings
- `.backup` - Backup data
- `.restore` - Restore data
- `.export` - Export data
- `.import` - Import data

## 🚀 Deploy on Railway

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Dark Bot Fixed"
git remote add origin https://github.com/YOUR_USERNAME/dark-bot.git
git push -u origin main
```

### Step 2: Deploy on Railway
1. Go to railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `dark-bot` repository
5. Click "Deploy"

### Step 3: Add Environment Variables
1. In Railway dashboard
2. Click "Variables"
3. Add: `TELEGRAM_BOT_TOKEN = your_new_token`
4. Save

### Step 4: Done!
- Railway deploys automatically
- Bot runs 24/7
- Check logs to verify

## 🛠️ Troubleshooting

### Bot not starting?
1. Check bot token is correct
2. Check logs in Railway dashboard
3. Verify Node.js version is 18+

### Commands not working?
1. Make sure command starts with dot (.)
2. Example: `.menu` (correct)
3. Example: `menu` (incorrect)

### Still crashing?
1. Check Railway logs
2. Verify all dependencies installed
3. Make sure .env file has bot token

## 📊 Features

✅ 150+ Commands
✅ Advanced AI Integration
✅ Real-time Analytics
✅ Enterprise Security
✅ Custom Command Builder
✅ Plugin System
✅ 24/7 Uptime
✅ Production Ready

## 🔧 Tech Stack

- Node.js 18+
- Telegram Bot API
- Express.js
- Axios
- Sharp (image processing)
- OpenAI (AI features)

## 📝 License

MIT

## 👤 Author

Prince Maverick (@Princemaverick_bot)

---

**Dark Bot v2.0 - FIXED & READY FOR PRODUCTION! 🚀**
