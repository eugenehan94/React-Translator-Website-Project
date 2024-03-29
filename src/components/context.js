/*Context API */
import React, { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [detectedLanguage, setDetectedLanguage] = useState();
  const [languagesList, setLanguagesList] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [resultText, setResultText] = useState("");
  const [loading, setLoading] = useState(true);
  /*Modal for Navbar - smaller screen*/
  const [open, setOpen] = useState(false);
  /*States for the plan on the Home page */
  const [select, setSelect] = useState("individual");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getLanguageSource = useCallback(() => {
    axios
      .post("https://libretranslate.de/detect", {
        q: inputText,
      })
      .then((response) => {
        setDetectedLanguage(response.data[0].language);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          console.log(
            "API detecting is currently having some technical difficulties"
          );
        }
      });
  }, [inputText]);

  const languageKey = (data) => {
    setSelectedLanguage(data.target.value);
  };

  const translateText = (e) => {
    e.preventDefault();
    if (!inputText) {
      // console.log("Please enter input");
      return;
    }
    getLanguageSource();
    let data = {
      q: inputText,
      source: detectedLanguage,
      target: selectedLanguage,
    };
    axios
      .post("https://libretranslate.de/translate", data)
      .then((response) => {
        setResultText(response.data.translatedText);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          console.log("API is currently having some technical difficulties");
          setResultText("API is currently having some technical difficulties");
        }
      });
  };

  useEffect(() => {
    axios.get("https://libretranslate.de/languages").then((response) => {
      setLanguagesList(response.data);
      setLoading(false);
    });
    getLanguageSource();
  }, [inputText, getLanguageSource]);

  return (
    <AppContext.Provider
      value={{
        inputText,
        languagesList,
        loading,
        setInputText,
        languageKey,
        translateText,
        resultText,
        open,
        handleClickOpen,
        handleClose,
        select,
        setSelect,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/*Custom Hook to export the AppContext 
Done this way so other components wouldn't have to 
import the useContext hook and AppContext
*/
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
