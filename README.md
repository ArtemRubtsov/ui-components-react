# UI Components React Library

A collection of customizable and reusable UI components built with React, designed to accelerate your development process.

## Features

- **Reusable components**: Use a wide variety of pre-built UI components that can be easily customized to suit your project's needs.
- **TypeScript support**: Developed with TypeScript, ensuring type safety and a better developer experience.
- **Styled with SCSS**: Components are styled using SCSS, making it easy to override styles or create custom themes.
- **Storybook integration**: Preview all components with live documentation using Storybook. <a href="https://artemrubtsov.github.io/ui-components-react/?path=/docs/components-avatar--docs" target="_blank" rel="noopener noreferrer">View Storybook</a>.
- **Fast setup**: Easily install the package via npm and start building.

## Installation

You can install the library through npm:

```bash
npm install @rubtsov/ui-components-react
```

## Usage

Import and use the components in your React application:

```tsx
import { Avatar } from '@rubtsov/ui-components-react';
import '@rubtsov/ui-components-react/dist/style.css'

const App = () => (
  <div>
    <Avatar src="https://example.com/image.jpg" alt="User Avatar" />
  </div>
);

export default App;
```


