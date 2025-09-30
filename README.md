# glowing-telegram

A modern React application built with Vite and integrated with React Compiler for optimal performance.

## 🚀 Features

- **React 19.1.1** - Latest stable version of React
- **Vite 7.1.7** - Lightning-fast build tool and dev server
- **React Compiler** - Automatic optimization for better performance
- **Modern JavaScript** - ES modules and modern syntax support
- **Hot Module Replacement (HMR)** - Instant feedback during development
- **ESLint** - Code linting and formatting

## 📦 Tech Stack

- React 19.1.1
- Vite 7.1.7
- React Compiler (babel-plugin-react-compiler)
- ESLint with React plugins
- CSS3

## 🏗️ Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd glowing-telegram
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🧠 React Compiler Integration

This project includes React Compiler integration for automatic performance optimizations:

- **Automatic memoization** of components and values
- **Reduced re-renders** through intelligent optimization
- **Better performance** without manual optimization

The React Compiler is configured in `vite.config.js` and runs automatically during development and build processes.

## 🎯 Demo Components

The project includes a demo component (`OptimizedComponent`) that showcases React Compiler optimizations with expensive calculations and state management.

## 🔧 Configuration

- **Vite Config**: `vite.config.js` - Build tool configuration with React Compiler integration
- **ESLint**: `eslint.config.js` - Code linting rules
- **Package.json**: Project dependencies and scripts

## 🌟 Getting Started

After installation, you can:

1. Explore the default React components
2. Modify `src/App.jsx` to see HMR in action
3. Check the browser console to see React Compiler optimizations
4. Build the project with `npm run build` to see production optimizations

## 📈 Performance

React Compiler automatically optimizes your React components by:
- Automatically memoizing expensive computations
- Reducing unnecessary re-renders
- Optimizing component updates

No manual optimization needed - the compiler handles it automatically!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` to ensure code quality
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
