# Content Schema

## Data Structures

### Service
```typescript
interface Service {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
  hasDemo?: boolean;
}
```

### Process Step
```typescript
interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
```

### Benefit
```typescript
interface Benefit {
  icon: string; // Lucide icon name
  metric?: string;
  claim: string;
  explanation: string;
}
```

### FAQ Item
```typescript
interface FAQItem {
  question: string;
  answer: string;
}
```

### Navigation Link
```typescript
interface NavLink {
  label: string;
  href: string;
}
```

## Content Data

### Services
1. Autonomous Operations - Bot icon
2. Conversational Knowledge - MessageSquare icon (hasDemo: true)
3. Intelligent Insights - BarChart3 icon
4. Growth Automations - Zap icon

### Process Steps
1. "01" - Discovery & Analysis
2. "02" - Development
3. "03" - Deployment

### Benefits
1. Clock icon - "20+ Hrs Saved Weekly per Team"
2. Rocket icon - "Deploy MVP Automations in Just 10 Days"
3. Puzzle icon - "Stack-Agnostic Integration"
4. Settings icon - "Custom-Built for your Business Logic"
5. TrendingUp icon - "Decision Support in real-time"
6. Code icon - "No-code Solutions"

### FAQ Items (5 questions)
See design.md for full text

### Navigation Links
- Process → #process
- Services → #services
- Benefits → #benefits
- About → #about
- FAQ → #faq
- Book a call → external Calendly
