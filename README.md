# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# FSC Moodlet Component

A React component that displays and manages Fuelling, Servicing, and Cleaning (FSC) status indicators with interactive state management.

## Implementation Decisions

### Architecture
- **Single Responsibility Principle**: Component handles both display and state logic in one place for simplicity
- **Controlled/Uncontrolled**: Works as both (manages own state but accepts initial state prop)
- **Stateless Design**: Pure UI component with no external dependencies

### State Management
- **Internal useState**: Chosen over redux for component-local state
- **Deterministic Transitions**: Strict state machine pattern prevents invalid states
- **Right-Click Handling**: Implemented context menu prevention and custom logic

### UI/UX
- **Visual Hierarchy**: Color-coded states for immediate recognition
- **Responsive Design**: Works at any size via relative units
- **Interaction Feedback**: 
  - Hover effects
  - Click animations
  - State transition clarity

### Code Quality
- **Type Safety**: PropTypes validation
- **Performance**: Memoization considered but not needed for this scale
- **Accessibility**: 
  - Title attributes
  - Keyboard interactions (could be added)
  - Sufficient color contrast

## Integration Impact

### Positive Aspects
- **Plug-and-Play**: Zero external dependencies
- **Style Isolation**: CSS scoped to component
- **Flexible API**: 
  ```jsx
  <FscMoodlet 
    type="F" 
    displayMode="letter" 
    initialState="required"
  />

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

Deployes [Websit](https://iqm-assessment-fsc.netlify.app/) for more information.
