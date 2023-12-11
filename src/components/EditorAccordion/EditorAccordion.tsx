import React, { ReactElement, SyntheticEvent, useMemo, useState } from 'react';
import { useLanguageContext } from '@/components/context/LanguageContext/LanguageContext';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HeadersEditor, VariablesEditor } from '@/components';
import { LANGUAGES } from '@/constants/dictionaries';

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
    {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
  </div>
);

export default function EditorAccordion() {
  const { language } = useLanguageContext();

  const [isAccordionExpanded, setIsAccordionExpanded] =
    useState<boolean>(false);

  const [activeTabs, setActiveTabs] = useState<number>(0);

  const toggleAccordionExpanded = () => {
    setIsAccordionExpanded((prev) => !prev);
  };

  const handleTabsChange = (e: SyntheticEvent, newValue: number): void => {
    setActiveTabs(newValue);
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
      expanded={isAccordionExpanded}
      onClick={() => {
        return;
      }}
    >
      <AccordionSummary
        sx={{ cursor: 'unset !important' }}
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
          value={activeTabs}
          onChange={handleTabsChange}
          TabIndicatorProps={{
            style: {
              display: isAccordionExpanded ? 'block' : 'none',
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.title}
              id={`tab-${index}`}
              aria-controls={`tabpanel-{index}`}
              disabled={!isAccordionExpanded}
            />
          ))}
        </Tabs>
      </AccordionSummary>
      <AccordionDetails>
        {tabs.map((tab, index) => (
          <CustomTabPanel key={index} value={activeTabs} index={index}>
            {tab.child}
          </CustomTabPanel>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
