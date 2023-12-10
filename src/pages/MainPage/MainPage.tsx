import React, { ReactElement, SyntheticEvent, useState } from 'react';
import { useLanguageContext } from '@/components/context/LanguageContext/LanguageContext';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  EndpointEditor,
  QueryEditor,
  ResponseViewer,
  SideMenu,
  VariablesEditor,
  HeadersEditor,
} from '@/components';
import { LANGUAGES } from '@/constants/dictionaries';
import { Colors } from '@/constants/colors';

const BLOCK_MIN_WIDTH = '280px';

interface TabPanelProps {
  children: ReactElement;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
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
}

export default function MainPage() {
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

  return (
    <Box component="main" sx={{ display: 'flex', flex: '1', p: 1 }}>
      <SideMenu />
      <Box sx={{ flexGrow: 1 }}>
        <EndpointEditor />
        {/* TODO Correct height of the next box */}
        <Box
          sx={({ palette }) => ({
            height: '75vh',
            display: 'flex',
            flexWrap: 'wrap',
            ml: 1,
            p: 1,
            borderRadius: 3,
            backgroundColor:
              palette.mode === 'dark'
                ? Colors.Backgroung_Dark_Grey
                : Colors.Backgroung_Light_Grey,
          })}
        >
          <Box
            sx={({ palette }) => ({
              width: 3 / 5,
              minWidth: BLOCK_MIN_WIDTH,
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              p: 1,
              borderRadius: 3,
              background: palette.background.default,
            })}
          >
            <Box sx={{ flexGrow: '1' }}>
              <QueryEditor />
            </Box>
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
                  <Tab
                    label={LANGUAGES[language].QUERY_VARIABLES_TITLE}
                    id={'tab-0'}
                    aria-controls={'tabpanel-0'}
                    disabled={!isAccordionExpanded}
                  />
                  <Tab
                    label={LANGUAGES[language].QUERY_HEADERS_TITLE}
                    id={'tab-1'}
                    aria-controls={'tabpanel-1'}
                    disabled={!isAccordionExpanded}
                  />
                </Tabs>
              </AccordionSummary>
              <AccordionDetails>
                <CustomTabPanel value={activeTabs} index={0}>
                  <VariablesEditor />
                </CustomTabPanel>
                <CustomTabPanel value={activeTabs} index={1}>
                  <HeadersEditor />
                </CustomTabPanel>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ width: 2 / 5, minWidth: BLOCK_MIN_WIDTH, p: 1 }}>
            <ResponseViewer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
