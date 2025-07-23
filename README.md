# Trema - Ghost Theme

A custom theme for Trema, a monthly newsletter about books worth reading. Fiction and non-fiction, for the casual and the voracious reader.

- **Typography**: Optimized for readability with beautiful typefaces (Degular and Blanco)
- **Fast loading**: Minimal CSS and JavaScript for optimal performance
- **SEO optimised**: Built with Ghost's SEO best practices
- **Image Optimisation**: Lazy loading and responsive images
- **Member support**: Full Ghost membership integration
- **Accessibility**: ARIA labels and semantic HTML

## Installation

1. Download the theme files
2. Zip the theme folder
3. Upload to your Ghost admin panel under **Design** → **Change theme**
4. Activate the theme

## Development

### File Structure

```
trema/
├── package.json          # Theme configuration
├── default.hbs           # Main layout template
├── index.hbs             # Home page template
├── post.hbs              # Single post template
├── author.hbs            # Author page template
├── tag.hbs               # Tag page template
├── error.hbs             # Error page template
├── partials/
│   └── pagination.hbs    # Pagination component
└── assets/
    ├── css/
    │   └── screen.css     # Main stylesheet
    ├── js/
    │   └── main.js        # Theme JavaScript
    ├── images/           # Theme images
    └── fonts/            # Custom fonts
```

### Customization

#### Colors

The theme uses CSS custom properties for easy color customization. Edit the `:root` section in `assets/css/screen.css`:

```css
:root {
    --color-primary: blue;
    --color-base: #131313;
    --color-border: #ddd;
    --color-bg: #fff;
    --color-text: #333;
    --color-text-light: #666;
}
```

#### Typography

Modify the font variables in the CSS:

```css
:root {
    --font-sans: 'Degular', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif';
    --font-serif: 'Blanco', 'Times New Roman', 'Times', 'Georgia', 'serif';
    --font-mono: 'Courier New', Courier, monospace;
}
```

#### Layout

- **Container max-width**: 1200px (adjustable in `.container` class)
- **Content max-width**: 720px (adjustable in `.gh-content` class)
- **Posts per page**: 5 (configurable in `package.json`)

### Ghost Features Supported

- ✅ Ghost 5.0+ compatibility
- ✅ Membership/subscription features
- ✅ Multiple authors
- ✅ Tags and primary tags
- ✅ Feature images
- ✅ Image galleries
- ✅ Bookmarks and embeds
- ✅ Custom navigation
- ✅ Secondary navigation (footer)
- ✅ Site logo and icon
- ✅ Meta tags and descriptions
- ✅ Pagination
- ✅ Search functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari
- Chrome Mobile

## Performance

- Minimal CSS and JavaScript
- Optimized images with lazy loading
- Web fonts with proper loading strategies
- Minimal external dependencies

## License

This theme is licensed under the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) License.  
You are free to use, share, and adapt this theme for non-commercial purposes, with attribution.  
For more information, see the [LICENSE](LICENSE) file or visit https://creativecommons.org/licenses/by-nc/4.0/

## Support

For issues and questions:
1. Check the [Ghost Theme Documentation](https://ghost.org/docs/themes/)
2. Review the code comments in the theme files
3. Test in a local Ghost development environment


