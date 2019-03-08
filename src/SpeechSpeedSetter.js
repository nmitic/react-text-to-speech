import React, { Fragment } from 'react';

import styled from 'styled-components';

import Slider from '@material-ui/lab/Slider';
import FormHelperText from '@material-ui/core/FormHelperText';


const StyledSlider = styled(Slider)`
  && {
    padding-bottom: 4px;
    padding-top: 46px;
    width: 100%;
  }
`;

const StepSlider = ({value, setValue}) => {

  const handleChange = (event, value) => setValue(value);
  
  return (
    <Fragment>
      <StyledSlider
        value={value}
        min={0}
        max={10}
        step={1}
        onChange={handleChange}
      />
      <FormHelperText>Select text to speech speed: {value}</FormHelperText>
    </Fragment>
  );
}

export default StepSlider;