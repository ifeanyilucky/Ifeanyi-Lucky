const Toggle = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <div>
      <h1 onClick={toggleTheme}>Toggle</h1>
    </div>
  );
};

export default Toggle;
