# Vercel-Inspired Redesign Brief

## Objective
Redesign the Luminance Labs clone website to match Vercel's visual aesthetic.

## Current State
- Website built at: `/home/ubuntu/.openclaw/workspace/dev_crew/projects/luminance-clone/website/`
- Current theme: White/light (corporate)
- Target theme: Dark/futuristic (Vercel-style)

## Vercel Design Language

### Colors
- Background: Pure black (#000000)
- Cards: Glassmorphism (rgba(255,255,255,0.03) + backdrop-blur)
- Text: White (#FFFFFF) primary, gray (#888888) secondary
- Accents: Cyan (#00E5FF), Blue (#3B82F6), Purple (#8B5CF6)
- Borders: Subtle white/10

### Key Visual Elements
1. **Dark Mode First** - Deep black backgrounds
2. **Glowing Accents** - Soft cyan/blue glows
3. **Grid Lines** - Subtle background grid patterns
4. **Gradient Text** - Headlines with gradient fills (white → cyan → blue)
5. **Floating Cards** - Glassmorphism with subtle borders
6. **Smooth Animations** - Fade/slide in on scroll
7. **Terminal/Code Blocks** - Visual code elements
8. **Interactive Hover** - Glow/scale effects
9. **Gradient Borders** - Buttons/cards with gradient outlines
10. **Radial Gradients** - Background glow effects

### Effects to Implement
```css
/* Gradient Text */
background: linear-gradient(135deg, #FFFFFF 0%, #00E5FF 50%, #3B82F6 100%);
-webkit-background-clip: text;

/* Glassmorphism */
background: rgba(255,255,255,0.03);
backdrop-filter: blur(10px);
border: 1px solid rgba(255,255,255,0.1);

/* Glow */
box-shadow: 0 0 20px rgba(0,229,255,0.3);

/* Grid Background */
background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
background-size: 50px 50px;
```

## Files to Modify

### 1. globals.css
- Update color variables to dark theme
- Add gradient-text, glass-card, glow-cyan classes
- Add grid-bg, radial-gradient-bg classes
- Update animation keyframes

### 2. layout.tsx
- Change body bg to black
- Ensure font loads correctly

### 3. Navigation.tsx
- Change to transparent → glassmorphism on scroll
- Update link colors to gray → white on hover
- Add gradient border CTA button
- Add animated underline on hover

### 4. HeroSection.tsx
- Change bg to black with radial gradient
- Add grid pattern overlay
- Add floating orbs (CSS animations)
- Add terminal/code block visual
- Make headline gradient text
- Update CTA to gradient border button

### 5. ProcessSection.tsx
- Change bg to black
- Add grid pattern
- Update cards to glassmorphism
- Make numbers gradient text
- Add glow hover effect

### 6. ServicesSection.tsx
- Change bg to black
- Add gradient line divider
- Update cards to glassmorphism with glow-border-hover
- Update icons to cyan with glow

### 7. BenefitsSection.tsx
- Change bg to black with gradient
- Update cards to glassmorphism
- Update icons to cyan

### 8. AboutSection.tsx
- Change to two-column layout
- Add gradient text heading
- Add stats cards (glassmorphism)

### 9. FAQSection.tsx
- Change bg to black with gradient
- Update accordion to minimal style
- Add cyan chevron rotation

### 10. CTASection.tsx
- Add radial gradient background
- Add floating orbs
- Make headline gradient text
- Update button to solid cyan with glow

### 11. Footer.tsx
- Add gradient line divider
- Update to minimal dark style

### 12. ChatDemo.tsx
- Update to dark theme
- Update message bubbles to dark style

## Tech Stack Reminder
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- NO Framer Motion - use CSS animations + Intersection Observer
- Lucide React (icons)

## Acceptance Criteria
- [ ] All sections have dark theme
- [ ] Glassmorphism cards work
- [ ] Gradient text on headlines
- [ ] Glow effects on hover
- [ ] Grid pattern visible
- [ ] Terminal/code block in hero
- [ ] Floating orbs animated
- [ ] Navigation glassmorphism on scroll
- [ ] Build succeeds with no errors
- [ ] All animations work
