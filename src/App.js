import React, { useState } from 'react';

import styled from 'styled-components';

import SpeechSpeedSetter from './SpeechSpeedSetter';
import LanguageSelect from './LanguageSelect';
import TextToSpeech from './TextToSpeech';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { DEFAULTS } from './appEnums';

const apiKey = '332c16d1a8db4a10b44047fd0888b485';

const App = ({className}) => {
  const [language, setLanguage] = useState(DEFAULTS.LANGUAGES);
  const [speed, setSpeed] = useState(DEFAULTS.SPEED);
  const [text, setText] = useState(DEFAULTS.TEXT);
  const [speech, setSpeech] = useState(DEFAULTS.SPEECH);

  const handleClick = () => {
    const audioSrc = `http://api.voicerss.org/?key=${apiKey}&hl=${language}&src=${text}&r=${speed}`

    setSpeech(audioSrc);
  };

  return (
    <div className={className}>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <LanguageSelect value={language} setValue={setLanguage} />
        </Grid>
        <Grid item xs={6}>
          <SpeechSpeedSetter value={speed} setValue={setSpeed} />
        </Grid>
        <Grid item xs={12}>
          <TextToSpeech value={text} setValue={setText} />
        </Grid>
        <Grid item xs={12}>
          <Button 
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Click To Speech
          </Button>
        </Grid>
        <Grid item xs={12} >
          { speech && <audio autoPlay src={speech}></audio> }
        </Grid>
      </Grid>
    </div>
  );
}

const StyledApp = styled(App)`
  max-width: 640px;
  margin: 0 auto;
  padding-top: 40px;
`

export default StyledApp;
