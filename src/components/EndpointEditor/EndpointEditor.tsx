import React, { ChangeEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  setNewEndpoint,
  setNewEndpointCurrentInput,
  toggleEndpointEditMode,
} from '@/store/reducers/endpointEditorSlice';
import { useLanguageContext } from '@/components/context/LanguageContext/LanguageContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import InputAdornment from '@mui/material/InputAdornment';
import Tooltip from '@mui/material/Tooltip';
import { LANGUAGES } from '@/constants/dictionaries';
import { isUrlValid } from '@/utils/isUrlValid';

// TODO handle clicks away
export default function EndpointEditor() {
  const dispatch = useAppDispatch();
  const { language } = useLanguageContext();
  const { isEndpointEditMode, currentEndpoint, newEndpointCurrentInput } =
    useAppSelector((state) => state.endpointEditor);

  const inputFieldRef = useRef<HTMLInputElement>(null);

  const isSubmitDisabled = !isUrlValid(newEndpointCurrentInput);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setNewEndpointCurrentInput(e.target.value));
  };

  const setEditMode = () => {
    dispatch(toggleEndpointEditMode(true));

    if (inputFieldRef.current) inputFieldRef.current.focus();
  };

  const clearInput = () => {
    dispatch(setNewEndpointCurrentInput(''));
    dispatch(toggleEndpointEditMode(false));
  };

  const submitNewEndpoint = () => {
    dispatch(setNewEndpoint());
  };

  return (
    <Box id={'endpoint-editor'} sx={{ p: 1, display: 'flex' }}>
      <TextField
        label={LANGUAGES[language].ENDPOINT_INPUT_LABEL}
        value={isEndpointEditMode ? newEndpointCurrentInput : currentEndpoint}
        onChange={inputHandler}
        focused={isEndpointEditMode}
        inputRef={inputFieldRef}
        InputProps={{
          readOnly: !isEndpointEditMode,
          endAdornment: isEndpointEditMode ? (
            <InputAdornment position="end">
              <IconButton>
                <Tooltip
                  title={LANGUAGES[language].TOOLTIP_ENDPOINT_CLEAR}
                  placement={'top'}
                  arrow
                >
                  <ClearIcon onClick={clearInput} />
                </Tooltip>
              </IconButton>
              <Tooltip
                title={
                  isSubmitDisabled
                    ? LANGUAGES[language].TOOLTIP_ENDPOINT_SUBMIT_INVALID
                    : LANGUAGES[language].TOOLTIP_ENDPOINT_SUBMIT_OK
                }
                placement={'top'}
                arrow
              >
                <Box>
                  <IconButton disabled={isSubmitDisabled}>
                    <DoneIcon onClick={submitNewEndpoint} />
                  </IconButton>
                </Box>
              </Tooltip>
            </InputAdornment>
          ) : (
            <InputAdornment position="end">
              <IconButton>
                <Tooltip
                  title={LANGUAGES[language].TOOLTIP_ENDPOINT_EDIT}
                  placement={'top'}
                  arrow
                >
                  <EditIcon onClick={setEditMode} />
                </Tooltip>
              </IconButton>
            </InputAdornment>
          ),
        }}
        size={'small'}
        fullWidth
      />
    </Box>
  );
}
