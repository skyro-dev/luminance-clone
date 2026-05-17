# Luminance Labs Clone - Design Document

## Overview
Complete clone of https://www.luminance-labs.com landing page.
Single-page application with smooth scroll navigation.

---

## Page Structure

### 1. Navigation (Sticky)
- **Position:** Fixed top, full width
- **Height:** 64px
- **Background:** Transparent → White with backdrop blur on scroll
- **Content:**
  - Logo: "Luminance Labs" (left)
  - Links: Process, Services, Benefits, About, FAQ (center)
  - CTA: "Book a call" button (right)
- **Mobile:** Hamburger menu

### 2. Hero Section
- **Height:** 100vh minimum
- **Background:** Linear gradient (135deg, #0A1628 0%, #1E3A5F 100%)
- **Content (centered):**
  - Headline: "Unlock 10x Efficiency with AI-Powered Automation"
    - Font: 4rem, weight 800, color white
  - Subheadline: "Empowering CIOs and Innovation Leaders to streamline workflows, enhance efficiency, and drive growth through cutting-edge AI solutions."
    - Font: 1.25rem, weight 400, color rgba(255,255,255,0.8)
  - CTA Button: "See Services"
    - Background: #00D4FF, text: #0A1628
    - Padding: 1rem 2rem, border-radius: 0.5rem
    - Links to #services
- **Animation:** Fade in + slide up on load

### 3. Process Section (#process)
- **Background:** White
- **Padding:** 6rem 0
- **Content:**
  - Label: "PROCESS" (12px, uppercase, #94A3B8, letter-spacing 2px)
  - Heading: "Our Proven Process" (3rem, #0F172A)
  - Subheading: "From concept to execution, see how we bring AI to life in your business" (1.125rem, #475569)
  - **3 Cards (horizontal):**
    1. **01 - Discovery & Analysis**
       - "We collaborate with your team to identify automation opportunities, analyzing workflows to pinpoint areas where AI can deliver significant value."
    2. **02 - Development**
       - "Crafting tailored AI solutions, we design interfaces that seamlessly integrate into your existing systems, ensuring minimal disruption and maximum efficiency."
    3. **03 - Deployment**
       - "We smoothly roll out the solutions into your workflow, provide thorough training, and offer ongoing support to keep things running smoothly. We're here for you every step of the way."
  - **Card Style:**
    - Number: 3rem, #00D4FF, weight 700
    - Title: 1.5rem, #0F172A, weight 600
    - Description: 1rem, #475569
    - No border, no shadow, clean layout

### 4. Services Section (#services)
- **Background:** #F8FAFC
- **Padding:** 6rem 0
- **Content:**
  - Label: "SERVICES"
  - Heading: "Next-Gen AI Solutions"
  - Subheading: "We don't just deploy AI. We architect intelligent systems that work with your teams and for your business. Explore our four flagship categories of innovation"
  - **4 Cards (2×2 grid):**
    1. **Autonomous Operations**
       - Icon: Bot
       - "We design and deploy AI agents and MCP based multi agent workflows that take over repetitive, manual tasks—freeing up your teams to focus on strategic priorities."
    2. **Conversational Knowledge**
       - Icon: MessageSquare
       - "We transform your internal documentation and knowledge bases into dynamic, searchable GPT-powered assistants with RAG agents."
       - **Includes chat demo widget**
    3. **Intelligent Insights**
       - Icon: BarChart3
       - "We build and integrate predictive systems that turn your operational data into real-time foresight, enabling faster, smarter decisions."
    4. **Growth Automations**
       - Icon: Zap
       - "We engineer end-to-end workflows that capture leads, enrich data, and trigger smart actions—automating revenue-driving processes at scale."
  - **Card Style:**
    - Background: white
    - Border: 1px solid #E2E8F0
    - Border-radius: 1rem
    - Padding: 2rem
    - Shadow: 0 4px 6px -1px rgba(0,0,0,0.1)
    - Hover: translateY(-4px), shadow increases

### 5. Benefits Section (#benefits)
- **Background:** White
- **Padding:** 6rem 0
- **Content:**
  - Label: "BENEFITS"
  - Heading: "Why Choose Us?"
  - Subheading: "Discover the advantages of partnering with our AI automation agency"
  - **6 Cards (3×2 grid):**
    1. **20+ Hrs Saved Weekly per Team**
       - "Intelligent agents reduce busywork so your top talent can focus on strategy."
    2. **Deploy MVP Automations in Just 10 Days**
       - "From chaos to clarity in under two weeks with our rapid pilot model."
    3. **Stack-Agnostic Integration**
       - "Works with Jira, Slack, Gmail, Airtable, Pinecone, Notion, HubSpot—whatever you use."
    4. **Custom-Built for your Business Logic**
       - "Our agents aren't generic. They're trained on your process, data, and domain."
    5. **Decision Support in real-time**
       - "With predictive insights and intelligent summaries, you're always one step ahead."
    6. **No-code Solutions**
       - "We hand over flexible systems that your teams can evolve without writing a line of code."
  - **Card Style:**
    - Icon + Title + Description
    - Icon: 32px, #00D4FF
    - Title: 1.25rem, #0F172A, weight 600
    - Description: 1rem, #475569

### 6. About Section (#about)
- **Background:** #F8FAFC
- **Padding:** 6rem 0
- **Content:**
  - Label: "ABOUT"
  - Heading: "Who We Are"
  - Body: "Founded in 2023, Luminance Labs was born from a vision to turn complexity into clarity and possibilities into progress. With over 20 years of combined experience in AI strategy, digital transformation, and program management, we specialize in building practical, scalable, and high-impact technology solutions that bridge business goals with cutting-edge innovation."
  - Font: 1.125rem, #475569, line-height 1.8
  - Max-width: 800px, centered

### 7. FAQ Section (#faq)
- **Background:** White
- **Padding:** 6rem 0
- **Content:**
  - Label: "FAQ"
  - Heading: "Your Questions, Answered"
  - Subheading: "Answers to your most common questions about our AI services"
  - **Accordion Items:**
    1. Q: "What is AI automation and how can it benefit my business?"
       A: "AI automation uses artificial intelligence to handle repetitive tasks, analyze data, and make decisions without human intervention. It can reduce costs, improve accuracy, and free your team to focus on strategic work."
    2. Q: "What services does your agency offer?"
       A: "We offer autonomous operations, conversational knowledge systems, intelligent insights, and growth automation solutions tailored to your business needs."
    3. Q: "How long does it take to implement an AI automation solution?"
       A: "Most MVP automations can be deployed in just 10 days. Full enterprise solutions typically take 4-8 weeks depending on complexity."
    4. Q: "What kind of support do you provide after deploying an AI automation solution?"
       A: "We provide ongoing monitoring, maintenance, training, and optimization services to ensure your AI solutions continue to deliver value."
    5. Q: "How much does an AI automation solution cost?"
       A: "Costs vary based on scope and complexity. We offer flexible pricing models including project-based and retainer options. Book a free consultation for a custom quote."
  - **Accordion Style:**
    - Question: 1.125rem, #0F172A, weight 500
    - Answer: 1rem, #475569
    - Border-bottom: 1px solid #E2E8F0
    - Chevron icon rotates on expand

### 8. CTA Section
- **Background:** Linear gradient (135deg, #0A1628 0%, #1E3A5F 100%)
- **Padding:** 6rem 0
- **Content (centered):**
  - Heading: "Ready to Transform Your Business?" (3rem, white)
  - Subheading: "Schedule a consultation with our AI experts" (1.25rem, rgba(255,255,255,0.8))
  - Button: "Book a 30-min call"
    - Background: #00D4FF, text: #0A1628
    - Links to: https://calendly.com/hiren-luminance-labs/30min
  - Trust signal: "It's 100% free" (1rem, rgba(255,255,255,0.6))

### 9. Footer
- **Background:** #0A1628
- **Padding:** 3rem 0
- **Content:**
  - Navigation links: Process, Services, Benefits, About, FAQ, Book a call
  - Copyright: "© 2024 Luminance Labs. All rights reserved."
  - Text: 0.875rem, rgba(255,255,255,0.6)

---

## Animation Specifications

### Scroll Animations
Use Intersection Observer + CSS:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-scroll {
  opacity: 0;
}

.animate-on-scroll.is-visible {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

**Trigger:** Intersection Observer with threshold 0.2
**Stagger:** 0.1s delay between sibling elements

### Hero Animation
- Headline: fade in + slide up (delay 0.2s)
- Subheadline: fade in + slide up (delay 0.4s)
- CTA: fade in + slide up (delay 0.6s)

### Hover Effects
```css
/* Cards */
transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
}

/* Buttons */
transition: transform 0.2s ease, background-color 0.2s ease;
:hover {
  transform: scale(1.02);
}
```

### Smooth Scroll
```css
html {
  scroll-behavior: smooth;
}
```

---

## Responsive Breakpoints

- **Mobile:** < 640px - Single column, stacked layout
- **Tablet:** 640px - 1024px - 2 column grids
- **Desktop:** > 1024px - Full layout as specified

### Mobile Adaptations
- Navigation: Hamburger menu
- Hero: Smaller text (2.5rem headline)
- Process: Vertical stack
- Services: 1 column
- Benefits: 1 column
- FAQ: Full width
