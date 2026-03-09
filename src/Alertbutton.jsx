import React from 'react';
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

// 2. The Main App Component that renders the button
export default function App() {
  return (
    <div>
      <h1>done alert</h1>
      {/* This renders your custom button */}
      <MyButton />
    </div>
  );
}