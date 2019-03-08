import React from 'react';

import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';

const StyledTextField = styled(TextField)`
  && { width: 100%; }
`

const TextToSpeech = ({value, setValue}) => {

  const handleChange = (event) => setValue(event.target.value);

  return (
    <StyledTextField
      id="standard-name"
      label="Text to speech"
      value={value}
      onChange={handleChange}
      margin="normal"
      multiline
      rows="4"
      variant="outlined"
  />
  )
};

export default TextToSpeech;