# 2048 Game Project - Development Context

## 重要提示
- 写任何代码前必须完整阅读 memory-bank/@architecture.md（包含完整数据库结构）
- 写任何代码前必须完整阅读 memory-bank/@game-design-document.md
- 每完成一个重大功能或里程碑后，必须更新 memory-bank/@architecture.md

## Project Overview

This is a 2048 puzzle game project built using web technologies. The game follows the classic 2048 gameplay where players slide numbered tiles on a grid to combine them and create a tile with the number 2048.

**Game Features:**
- Classic 4x4 grid gameplay
- Tile movement and merging mechanics
- Score tracking and high score persistence
- Responsive design supporting both keyboard and touch controls
- Win/lose conditions with appropriate messaging

## Technology Stack

The project utilizes a lightweight, framework-free approach using native web technologies:

- **HTML5**: Structure and layout
- **CSS3**: Styling and animations
- **JavaScript (ES6+)**: Game logic implementation
- **localStorage**: Persistent storage for scores and game state
- **CSS Transitions**: Smooth animation effects for tile movements
- **requestAnimationFrame**: For smooth animation loops

## Project Architecture

The codebase follows a modular vanilla JavaScript approach without external dependencies:
- Game state management
- Grid manipulation algorithms
- User input handling (keyboard and touch)
- UI rendering and updates
- Score calculation and persistence

## Development Conventions

- Clean, semantic HTML structure
- Mobile-first responsive CSS design
- ES6+ JavaScript with modular organization
- LocalStorage for saving game progress and high scores
- Keyboard accessibility with arrow keys
- Touch gesture support for mobile devices

## Building and Running

Since this is a pure frontend application with no build process required, you can run it by:

1. Opening the `index.html` file directly in a browser, or
2. Using a local development server like Live Server for automatic refresh

For development, recommended tools include:
- VSCode as the code editor
- A local server for development (e.g., Live Server extension)
- Modern browsers for testing

## Testing

Testing should cover:
- Game logic correctness (movement, merging, scoring)
- Win/loss condition detection
- Cross-browser compatibility
- Mobile responsiveness and touch controls
- Performance on different devices

## Deployment

The application can be deployed as a static website to platforms like:
- GitHub Pages
- Netlify
- Vercel
- Any web server capable of serving static files


No backend server is required as the game operates entirely client-side.