# Custom UI Components - Inspired by Ant Design

This project contains a set of reusable UI components created with **React 18**, **Tailwind CSS**, and **TypeScript**, inspired by Ant Design components. The goal is to replicate similar functionality and design while maintaining reusability and flexibility in each component.

## Table of Contents

- [Installation](#installation)
- [Components](#components)
  - [Custom Button](#custom-button)
  - [Dropdown Menu](#dropdown-menu)
  - [Empty State](#empty-state)
  - [Collapsible Panel](#collapsible-panel)
  - [Tabbed Component](#tabbed-component)
  - [Notification](#notification)
  - [Loading Spinner](#loading-spinner)
  - [Drawer Component](#drawer-component)
  - [Modal Component](#modal-component)
  - [Form Component](#form-component)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/custom-ui-components.git
    cd custom-ui-components
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

    The application will be available at [http://localhost:5173](http://localhost:5173).

## Components

Here is a list of components created in this project:

### Custom Button
A customizable button component that mimics Ant Design's Button. It supports various types, sizes, and click events.

**Props:**
- `type: 'primary' | 'secondary' | 'danger'` (default: 'primary')
- `size: 'small' | 'medium' | 'large'` (default: 'medium')
- `onClick: () => void`

### Dropdown Menu
A menu that can be shown on click or hover. It supports a list of menu items and can be positioned in various directions.

**Props:**
- `items: string[]` (list of menu items)
- `direction: 'top' | 'bottom' | 'left' | 'right'`
- `trigger: 'click' | 'hover'`

### Empty State
A component for displaying a message when there is no data. It allows custom images and text.

**Props:**
- `message: string`
- `imageUrl: string` (optional)

### Collapsible Panel
A multi-section collapsible panel with support for open/close behavior.

**Props:**
- `defaultOpenKeys: string[]` (initially open sections)
- `onChange: (keys: string[]) => void`

### Tabbed Component
A tab navigation system where users can switch between different content panels.

**Props:**
- `tabs: { key: string, label: string, content: React.ReactNode }[]`
- `activeKey: string` (default active tab)
- `onTabChange: (key: string) => void`

### Notification
A function to display success, error, or warning notifications.

**Props:**
- `message: string`
- `type: 'success' | 'error' | 'warning'`
- `duration: number` (optional)

### Loading Spinner
A simple loading spinner component.

**Props:**
- `isLoading: boolean`

### Drawer Component
A customizable sliding drawer component for side menus.

**Props:**
- `isOpen: boolean`
- `onClose: () => void`
- `width: string` (default: '300px')

### Modal Component
A reusable modal dialog for confirmation or alerts.

**Props:**
- `isVisible: boolean`
- `onClose: () => void`
- `title: string`
- `content: React.ReactNode`
- `footer: React.ReactNode` (optional)

### Form Component
A form component with support for validation rules.

**Props:**
- `fields: Array<{ name: string, rules: any[] }>`
- `onSubmit: (data: any) => void`

## Usage

Each component can be imported individually into your React project and used like this:

```tsx
import { CustomButton } from './components/CustomButton';

<CustomButton 
  type="primary" 
  size="large" 
  onClick={() => alert('Button clicked!')} 
/>
