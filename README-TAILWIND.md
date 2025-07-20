# Trema Ghost Theme

I've configured the theme with Tailwind.


### 📁 File Structure

```
/assets/
  /css/
    main.css         # Advanced Tailwind setup (experimental)
    styles.css       # Alternative Tailwind setup
    screen.css       # Original CSS (preserved as backup)
  /built/
    screen.css       # Compiled output (currently working version)
```

### 🚀 Build Commands

```bash
# Development - watch for changes
npm run dev

# Production build - minified output
npm run build

# Or run the specific CSS build commands:
npm run build:css         # Watch mode
npm run build:css:prod     # Production mode
```

## How to Use Tailwind Classes in Your Templates

You can now use Tailwind utility classes in your Handlebars templates:

```handlebars
<!-- Instead of custom CSS classes -->
<div class="flex items-center justify-center p-8">
  <h1 class="text-center font-bold uppercase">{{title}}</h1>
</div>

<!-- Responsive design -->
<div class="container mx-auto px-4 md:px-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Your content -->
  </div>
</div>
```

## Customization

### Colors
Edit your theme colors in `tailwind.config.js`:

```javascript
colors: {
  'primary': 'blue',        // Change to your brand color
  'base': '#131313',
  'border': '#ddd',
  'bg': '#fff',
  'text': '#333333',
  'text-light': '#666',
}
```

### Fonts
Custom fonts are configured in the Tailwind config:

```javascript
fontFamily: {
  'sans': ['Degular', 'Inter', 'system-ui', ...],
  'serif': ['Blanco', 'Times New Roman', ...],
}
```

