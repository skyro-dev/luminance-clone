# Deploy to Vercel

## Option 1: GitHub Integration (Easiest) ✅

Since you already connected Vercel to GitHub:

1. **Go to:** https://vercel.com/new
2. **Import:** `skyro-dev/luminance-clone`
3. **Configure:**
   - Framework Preset: Next.js
   - Root Directory: `website-fresh`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Click:** Deploy

That's it! Vercel will auto-deploy on every git push.

---

## Option 2: Vercel CLI

### Get Your Token
1. Go to https://vercel.com/account/tokens
2. Click "Create Token"
3. Name it "luminance-deploy"
4. Copy the token

### Deploy
```bash
cd website-fresh
npx vercel --token YOUR_TOKEN --prod
```

---

## Option 3: GitHub Actions (Auto-deploy)

Add `.github/workflows/deploy.yml` to your repo:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: vercel/action-deploy@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./website-fresh
```

---

## After Deployment

- **URL:** `https://luminance-clone-xyz.vercel.app`
- **Custom Domain:** Add in Project Settings → Domains
- **Analytics:** Available in Vercel Dashboard

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check `next.config.ts` has `output: 'export'` |
| 404 errors | Ensure `dist/` has `index.html` |
| CSS missing | Check `globals.css` is imported |
