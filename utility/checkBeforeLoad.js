const checkBeforeLoad =  ()  => {
    var currentTheme;
  
    function changeTheme(inputTheme) {
      if (inputTheme === "dark") {
        const theme = themeConfig.dark;
        for (let key in theme) {
          setCSSVar(key, theme[key]);
        }
        localStorage.setItem("theme", inputTheme);
      } else {
        const theme = themeConfig.light;
        for (let key in theme) {
          setCSSVar(key, theme[key]);
        }
        localStorage.setItem("theme", inputTheme);
      }
    }
  
    function setCSSVar(property, color) {
      document.documentElement.style.setProperty(property, color);
    }
    try {
      currentTheme = localStorage.getItem("theme") || "light";
  
      var themeConfig = {
        dark: {
          "--color-body": "#181818",
          "--color-text": "#FAFAFA",
          "--color-bg": "#181818",
        },
        light: {
          "--color-body": "#fff",
          "--color-text": "#181818",
          "--color-bg": "#363537",
        },
      };
  
      changeTheme(currentTheme);
    } catch (err) {
      console.log(new Error("accessing theme has been denied"));
    }
  };

export default checkBeforeLoad

