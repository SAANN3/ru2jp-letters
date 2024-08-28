import React, { useState } from 'react';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import dict from './dict';
import { useTranslation } from 'react-i18next';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [output,setOutput] = useState<string>("")
  const [t, i18n] = useTranslation()
  const translateText = (text:string) => {
    let output = "";
    for(let i = 0; i < text.length; i++) {
      output += dict[text[i].toUpperCase()]?dict[text[i].toUpperCase()]:text[i]
    }
    setOutput(output)
  }
  const copy = () => {
    navigator.clipboard.writeText(output)
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          <div  style={{marginBottom:"5%"}}>{t("title")}</div>
          <TextField variant='outlined' label={t("enter-text")} style={{marginBottom:"5%",width:"60%"}}  onInput={(e) => {translateText((e.target as HTMLInputElement).value)}} />
          <TextField variant='outlined' label={t("output")} value={output} style={{marginBottom:"5%",width:"60%"}} disabled={true}/>
          <Button variant='outlined' onClick={copy}>{t("clipboard-copy")}</Button>

          <div className="App-footer">
            <Select onChange={(e) => i18n.changeLanguage((e.target as HTMLInputElement).value)} value={i18n.language} variant='standard'>
              <MenuItem value={"ru"}>RU</MenuItem>
              <MenuItem value={"en"}>EN</MenuItem>
            </Select>
            <a href='https://github.com/SAANN3/ru2jp-letters'>github</a>
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
