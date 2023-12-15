import React, { useLayoutEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import {
  EndpointEditor,
  QueryEditor,
  ResponseViewer,
  EditorMenu,
  EditorAccordion,
  DocDrawer,
} from '@/components';
import { Colors } from '@/constants/colors';

const BLOCK_MIN_WIDTH = '260px';

export default function MainPage() {
  const QueryEditorRef = useRef<HTMLDivElement>(null);
  const [queryEditorHeight, setQueryEditorHeight] = useState<string>('200px');

  useLayoutEffect(() => {
    setQueryEditorHeight(`${QueryEditorRef.current?.clientHeight}px`);
  }, []);

  return (
    <Box
      component={'main'}
      sx={({ breakpoints }) => ({
        p: 1,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        [breakpoints.up('sm')]: {
          flexDirection: 'row',
        },
      })}
    >
      <DocDrawer />
      <EditorMenu />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <EndpointEditor />
        <Box
          sx={({ palette }) => ({
            p: 1,
            flexGrow: 1,
            display: 'flex',
            flexWrap: 'wrap',
            borderRadius: 3,
            backgroundColor:
              palette.mode === 'dark'
                ? Colors.Background_Dark_Grey
                : Colors.Background_Light_Grey,
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
            <Box sx={{ flexGrow: '1' }} ref={QueryEditorRef}>
              <QueryEditor height={queryEditorHeight} />
            </Box>
            <EditorAccordion />
          </Box>
          <Box sx={{ width: 2 / 5, minWidth: BLOCK_MIN_WIDTH, p: 1 }}>
            <ResponseViewer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
