# Cursor CLI Setup Guide

## Installation ✅
Cursor CLI (agent) is installed:
```bash
which agent  # /home/ubuntu/.local/bin/agent
agent --version  # 2026.05.16-0338208
```

## Authentication

### Option 1: Login with Browser (Recommended)
```bash
agent login
```
This will open a browser to authenticate with your Cursor account.

### Option 2: API Key
```bash
export CURSOR_API_KEY=your_api_key
agent --api-key $CURSOR_API_KEY
```

### Option 3: Non-Interactive (Server)
```bash
NO_OPEN_BROWSER=1 agent login
# Follow the URL provided to authenticate
```

## GitHub Integration

Cursor CLI uses Git for version control. To use your GitHub account:

1. **Configure Git with your GitHub credentials:**
```bash
git config --global user.name "skyro-dev"
git config --global user.email "your-email@example.com"
```

2. **Use GitHub CLI (gh) for authentication:**
```bash
gh auth login
# Follow prompts to authenticate with GitHub
```

3. **Or use HTTPS with token:**
```bash
git remote set-url origin https://skyro-dev:YOUR_TOKEN@github.com/skyro-dev/luminance-clone.git
```

## Usage Examples

### Run Agent in Project
```bash
cd /path/to/project
agent
```

### Run with Specific Prompt
```bash
agent "Fix the bug in the navigation component"
```

### Plan Mode (Read-only)
```bash
agent --plan "Analyze the codebase structure"
```

### Print Mode (Non-interactive)
```bash
agent --print "Refactor the FAQ component"
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `CURSOR_API_KEY` | API key for authentication |
| `NO_OPEN_BROWSER` | Disable browser opening for login |

## Help
```bash
agent --help
agent login --help
```
