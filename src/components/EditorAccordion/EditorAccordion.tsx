import React, { ReactElement, SyntheticEvent, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  setActiveEditorTab,
  toggleEditorAccordionOpen,
} from '@/store/reducers/appViewSlice';
import { useLanguageContext } from '@/context/LanguageContext/LanguageContext';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HeadersEditor, VariablesEditor } from '@/components';
import { LANGUAGES } from '@/constants/dictionaries';

const MIN_TAB_HEIGHT = '8em';
const MAX_TAB_HEIGHT = '15em';

interface TabPanelProps {
  children: ReactElement;
  index: number;
  value: number;
}

const CustomTabPanel = ({
  children,
  value,
  index,
  ...other
}: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`tabpanel-${index}`}
    aria-labelledby={`tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box
        sx={{
          minHeight: MIN_TAB_HEIGHT,
          maxHeight: MAX_TAB_HEIGHT,
          overflowY: 'auto',
        }}
      >
        {children}
      </Box>
    )}
  </div>
);

export default function EditorAccordion() {
  const dispatch = useAppDispatch();
  const { language } = useLanguageContext();

  const { isEditorAccordionOpen, activeEditorTab } = useAppSelector(
    (state) => state.appView,
  );

  const toggleAccordionExpanded = () => {
    dispatch(toggleEditorAccordionOpen());
  };

  const handleTabsChange = (e: SyntheticEvent, newValue: number): void => {
    dispatch(setActiveEditorTab(newValue));
  };

  const tabs = useMemo(
    () => [
      {
        title: LANGUAGES[language].QUERY_VARIABLES_TITLE,
        child: <VariablesEditor />,
      },
      {
        title: LANGUAGES[language].QUERY_HEADERS_TITLE,
        child: <HeadersEditor />,
      },
    ],
    [language],
  );

  return (
    <Accordion
      expanded={isEditorAccordionOpen}
      onClick={() => {
        return;
      }}
      sx={{ '& .MuiButtonBase-root': { minHeight: '2em' } }}
      data-testid={'EditorAccordion'}
    >
      <AccordionSummary
        sx={{
          cursor: 'unset !important',
          '& .MuiAccordionSummary-content': { m: 0 },
        }}
        expandIcon={
          <ExpandMoreIcon
            onClick={toggleAccordionExpanded}
            sx={{ cursor: 'pointer' }}
          />
        }
        aria-controls={'panel-content'}
        id={'panel-header'}
      >
        <Tabs
          value={activeEditorTab}
          onChange={handleTabsChange}
          TabIndicatorProps={{
            style: {
              display: isEditorAccordionOpen ? 'block' : 'none',
            },
          }}
          sx={{
            minHeight: '1.5em',
            '& .MuiButtonBase-root.MuiTab-root': {
              pt: 0,
              pb: 0,
              minHeight: '1.5em',
            },
            '& .MuiTouchRipple-root': { pt: 0, pb: 0 },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.title}
              id={`tab-${index}`}
              aria-controls={`tabpanel-{index}`}
              disabled={!isEditorAccordionOpen}
            />
          ))}
        </Tabs>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 0, pb: 1 }}>
        {tabs.map((tab, index) => (
          <CustomTabPanel key={index} value={activeEditorTab} index={index}>
            {tab.child}
          </CustomTabPanel>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
