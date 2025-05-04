// src/FontAwesomeContext.tsx
import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
  } from 'react';
  
  interface FontAwesomeContextProps {
    cssUrl: string | null;
    setCssUrl: (url: string | null) => void;
  }
  
  const FontAwesomeContext = createContext<FontAwesomeContextProps>({
    cssUrl: null,
    setCssUrl: () => {},
  });
  
  interface FontAwesomeProviderProps {
    children: ReactNode;
    defaultCssUrl?: string;
  }
  
  export const FontAwesomeProvider = ({
    children,
    defaultCssUrl,
  }: FontAwesomeProviderProps) => {
    const [cssUrl, setCssUrl] = useState<string | null>(defaultCssUrl || null);
  
    return (
      <FontAwesomeContext.Provider value={{ cssUrl, setCssUrl }}>
        {children}
      </FontAwesomeContext.Provider>
    );
  };
  
  export const useFontAwesome = () => useContext(FontAwesomeContext);
  