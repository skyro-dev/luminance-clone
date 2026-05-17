# Vercel Deployment Guide

## Do You Need a Vercel Account?

**Yes**, you need a Vercel account to deploy. However, you can:

### Option 1: Use GitHub Account (Recommended)
Vercel supports "Login with GitHub" - no separate account needed!

1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Done! Your Vercel account is linked to GitHub

### Option 2: Create Vercel Account
1. Go to https://vercel.com/signup
2. Sign up with email or GitHub
3. Verify email

## Deploy from GitHub (Recommended)

Once your repo is on GitHub and you have a Vercel account:

1. Go to https://vercel.com/new
2. Select your GitHub repo: `skyro-dev/luminance-clone`
3. Configure:
   - Framework: Next.js
   - Root Directory: `website-fresh/` (or `website/`)
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click "Deploy"

## Deploy from CLI

### Install Vercel CLI
```bash
npm install -g vercel
```

### Login
```bash
vercel login
# Opens browser to authenticate
```

### Deploy
```bash
cd /home/ubuntu/.openclaw/workspace/dev_crew/projects/luminance-clone/website-fresh
vercel --prod
```

## Free Tier Limits (Hobby Plan)

| Feature | Limit |
|---------|-------|
| Deployments | Unlimited |
| Bandwidth | 100 GB/month |
| Build Time | 6,000 minutes/month |
| Team Members | 1 (you) |
| Custom Domains | 1 |

## Custom Domain (Optional)

After deployment:
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS (A record or CNAME)

## Costs

| Plan | Cost |
|------|------|
| Hobby (Free) | $0 |
| Pro | $20/month |
| Enterprise | Custom |

For a simple static site: **FREE** ✅
