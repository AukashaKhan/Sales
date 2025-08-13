# DiscountModal Component

A responsive, feature-rich React modal component for displaying discount offers and promotions. Built with modern React patterns and follows the project's design system.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with adaptive grid layouts
- **Live Countdown Timer**: Real-time countdown with days, hours, minutes, and seconds
- **Banner Image**: Full-width banner image with hover effects
- **Interactive Cards**: 8 discount option cards in a responsive grid
- **Smooth Animations**: CSS animations for modal opening/closing and interactions
- **Accessibility**: Focus states, keyboard navigation, and reduced motion support
- **Glass Morphism**: Modern backdrop blur and transparency effects

## 📱 Responsive Breakpoints

- **Desktop (1024px+)**: 4 cards per row
- **Tablet (768px-1023px)**: 4 cards per row
- **Mobile (≤767px)**: 2 cards per row
- **Small Mobile (≤480px)**: 2 cards per row with optimized spacing

## 🎨 Design Features

- **Glass Effect**: Backdrop blur and semi-transparent backgrounds
- **Gradient Text**: Multi-color gradient text for titles
- **Hover Effects**: Scale, shadow, and color transitions
- **Color Scheme**: Follows project's color palette
- **Typography**: Consistent with project's font hierarchy

## 📦 Installation & Usage

### 1. Import the Component

```jsx
import DiscountModal from './components/DiscountModal';
```

### 2. Basic Usage

```jsx
import React, { useState } from 'react';
import DiscountModal from './components/DiscountModal';

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Discount Modal</button>
      
      <DiscountModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
}
```

### 3. Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `isOpen` | boolean | Yes | Controls modal visibility |
| `onClose` | function | Yes | Callback when modal should close |

## 🔧 Customization

### Modifying Discount Options

Edit the `discountOptions` array in the component:

```jsx
const discountOptions = [
  { id: 1, percentage: '10% OFF', icon: <FaPercent />, type: 'percentage' },
  { id: 2, percentage: '20% OFF', icon: <FaGift />, type: 'gift' },
  // Add more options...
];
```

### Changing Banner Image

Update the image source in the component:

```jsx
<img 
  src="/path/to/your/image.jpg" 
  alt="Your Banner Alt Text"
  className="banner-image"
/>
```

### Modifying Countdown Timer

Adjust the initial countdown values:

```jsx
const [countdown, setCountdown] = useState({
  days: 5,      // Change initial days
  hours: 12,    // Change initial hours
  minutes: 30,  // Change initial minutes
  seconds: 0    // Change initial seconds
});
```

## 🎯 Integration Examples

### With Discount Cards

```jsx
const DiscountCard = ({ discount, onCardClick }) => {
  return (
    <div className="discount-card" onClick={() => onCardClick(discount)}>
      {/* Card content */}
    </div>
  );
};

// In parent component
const [selectedDiscount, setSelectedDiscount] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const handleCardClick = (discount) => {
  setSelectedDiscount(discount);
  setIsModalOpen(true);
};
```

### With Navigation

```jsx
// Add to navigation menu
<button onClick={() => setIsModalOpen(true)}>
  Special Offers
</button>
```

## 🎨 Styling Customization

### CSS Variables

The component uses CSS custom properties that can be overridden:

```css
:root {
  --modal-background: rgba(255, 255, 255, 0.1);
  --modal-border: rgba(255, 255, 255, 0.2);
  --accent-color: #06d41b;
  --primary-color: #dfdfeb;
  --secondary-color: #0f2ffe;
}
```

### Theme Overrides

```css
/* Custom theme */
.discount-modal {
  background: var(--your-theme-bg);
  border-color: var(--your-theme-border);
}

.discount-option-card {
  background: var(--your-theme-card-bg);
}
```

## ♿ Accessibility Features

- **Keyboard Navigation**: Tab through interactive elements
- **Focus Management**: Proper focus states and focus trapping
- **Screen Reader Support**: Semantic HTML structure
- **Reduced Motion**: Respects user's motion preferences
- **High Contrast**: Supports high contrast mode
- **Touch Friendly**: Optimized for touch devices

## 🔍 Browser Support

- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 88+
- **Features Used**: CSS Grid, Flexbox, Backdrop Filter, CSS Animations

## 🚀 Performance Features

- **Lazy Rendering**: Modal only renders when `isOpen` is true
- **Efficient Animations**: CSS transforms and opacity for smooth performance
- **Memory Management**: Proper cleanup of timers and event listeners
- **Optimized Images**: Responsive image loading

## 🐛 Troubleshooting

### Modal Not Opening

1. Check that `isOpen` prop is being set to `true`
2. Verify `onClose` function is properly defined
3. Check browser console for errors

### Styling Issues

1. Ensure CSS file is properly imported
2. Check for CSS conflicts with existing styles
3. Verify CSS custom properties are defined

### Responsive Issues

1. Test on different screen sizes
2. Check media query breakpoints
3. Verify viewport meta tag is set

## 📝 Development Notes

### Component Structure

```
DiscountModal/
├── Modal Overlay (backdrop)
├── Modal Container
│   ├── Close Button
│   ├── Banner Image
│   ├── Header (Title + Countdown)
│   ├── Discount Options Grid
│   └── Actions (Apply Button + Terms)
```

### State Management

- Uses React hooks for local state
- Countdown timer with `useEffect` and `setInterval`
- Proper cleanup to prevent memory leaks

### Event Handling

- Click outside to close
- Escape key to close (can be added)
- Close button click
- Apply button click

## 🔮 Future Enhancements

- [ ] Escape key support for closing
- [ ] Customizable countdown end behavior
- [ ] Multiple banner image support
- [ ] Advanced discount selection logic
- [ ] Integration with backend APIs
- [ ] Analytics tracking
- [ ] A/B testing support

## 📄 License

This component is part of the project and follows the same licensing terms.

---

For questions or issues, please refer to the project's main documentation or create an issue in the project repository.
