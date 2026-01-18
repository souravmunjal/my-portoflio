# AI Coding Guidelines for Retro Portfolio

## Project Overview
This is a single-page static website portfolio with a retro gaming theme. It consists of three main sections: Home, Projects, and Contact, navigated via JavaScript-driven page switching.

## Architecture
- **Structure**: HTML provides the skeleton with hidden/shown pages using CSS classes. JavaScript handles navigation and project detail switching.
- **Styling**: Retro aesthetic with CRT effects, neon colors (#ff0080, #8000ff, #00ff80, #ffff00), pixelated images, and 'Press Start 2P' font.
- **Interaction**: Page navigation via menu clicks; project details toggle via thumbnail clicks.

## Key Patterns
- **Page Switching**: Use `data-page` attributes on menu links and `showPage(id)` function to toggle `.page.active` classes.
- **Project Details**: `data-project` attributes on thumbnails trigger `showProjectDetail(id)` to show corresponding detail divs.
- **Adding Projects**: In `index.html`, add `.project-item` in `.project-list` and matching `.project-detail` in `.project-details`. Update images in `images/` folder.
- **Theming**: Maintain neon color scheme; use `rgba(0,0,0,0.8)` backgrounds with colored borders and box-shadows for sections.

## Development Workflow
- **Preview**: Open `index.html` directly in browser (no build required).
- **Customization**: Edit content in `index.html`, styles in `styles.css`, behavior in `script.js`.
- **Assets**: Place project images in `images/` folder; reference as `images/filename.jpg`.

## Conventions
- Use semantic HTML with data attributes for JS targeting.
- Responsive design with media queries for mobile (768px, 480px breakpoints).
- Avoid external JS libraries; keep vanilla JS for simplicity.
- Font size in rem with base 0.6rem for retro pixel feel.

## Examples
- **New Project**: Add `<div class="project-item" data-project="4"><img src="images/project4.jpg"><p>LEVEL 4</p></div>` and corresponding detail div with id="detail4".
- **Color Usage**: Headers use #ffff00 (yellow), projects #8000ff (purple), contact #00ff80 (green).</content>
<parameter name="filePath">c:\Users\soura\OneDrive\Desktop\online_portfolio\.github\copilot-instructions.md