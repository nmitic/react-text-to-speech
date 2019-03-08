import React from 'react';

import styled from 'styled-components';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const StyledFormControl = styled(FormControl)`
  && { width: 100%; }
`

const LanguageSelect = ({value, setValue}) => {

  const handleChange = (event) => setValue(event.target.value);

  return (
    <StyledFormControl>
      <InputLabel htmlFor="language-select">Language Select</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        inputProps={{
          name: 'language',
          id: 'language-select',
        }}
      >
        <MenuItem value={'en-us'}>English (United States)</MenuItem>
        <MenuItem value={'de-de'}>German</MenuItem>
      </Select>
      <FormHelperText>Please choose output language</FormHelperText>
    </StyledFormControl>
  );
};

export default LanguageSelect;
