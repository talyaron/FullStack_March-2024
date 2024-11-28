import exp from "constants";

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-between items-center p-4 mb-4">
      <h1 className="text-xl font-bold">Theme Example</h1>
      <Button onClick={toggleTheme} variant="outline" size="icon">
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default Header;
