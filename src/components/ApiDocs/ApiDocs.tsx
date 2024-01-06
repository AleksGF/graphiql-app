import { Colors } from '@/constants/colors';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  ApiDocsFieldEntry,
  ApiDocsInputFieldEntry,
  clearApiDocsTypeDetailedInfo,
  fetchApiTypeDetailedInfo,
} from '@/store/reducers/apiDocsSlice';

import { Box, Divider, Typography, Link } from '@mui/material';
import React, { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

//TODO: Refactor all render functions. Probably it should be recursive.

const DOCS_MAX_WIDTH = '320px';

export default function ApiDocs() {
  const { apiTypesList, apiDocsTypeDetailedInfo } = useAppSelector(
    (state) => state.apiDocs,
  );
  const { apiUrl } = useAppSelector((state) => state.apiEndpoint);

  const dispatch = useAppDispatch();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    type: string | null,
  ) => {
    event.preventDefault();

    if (!type) {
      dispatch(clearApiDocsTypeDetailedInfo());

      return;
    }

    dispatch(
      fetchApiTypeDetailedInfo({
        endpointUrl: apiUrl,
        type,
      }),
    );
  };

  const getFieldSignature = (
    field: ApiDocsFieldEntry | ApiDocsInputFieldEntry,
  ): ReactNode => {
    const { name, type, args } = field as ApiDocsFieldEntry;

    if (type.kind !== 'NON_NULL' && type.kind !== 'LIST') {
      if (type && (!args || args.length === 0)) {
        return (
          <>
            {`${name}: `}
            <Link
              component={RouterLink}
              to=""
              onClick={(e) => handleClick(e, type.name)}
            >
              {type.name}
            </Link>
          </>
        );
      }

      if (type.name && args && args.length > 0) {
        return (
          <>
            {`${name}(`}
            {args.map((arg) => {
              return (
                <>
                  <br />
                  {`  ${arg.name}: `}
                  <Link
                    component={RouterLink}
                    to=""
                    onClick={(e) => handleClick(e, arg.type.name)}
                  >
                    {arg.type.name}
                  </Link>
                </>
              );
            })}
            <br />
            {'): '}
            <Link
              component={RouterLink}
              to=""
              onClick={(e) => handleClick(e, type.name)}
            >
              {type.name}
            </Link>
          </>
        );
      }
    }

    if (type.kind === 'LIST' && type.ofType) {
      return (
        <>
          {`${name}: `}[
          <Link
            component={RouterLink}
            to=""
            onClick={(e) => handleClick(e, type.ofType!.name)}
          >
            {type.ofType!.name}
          </Link>
          ]
        </>
      );
    }

    if (type.kind === 'NON_NULL' && type.ofType) {
      return (
        <>
          {`${name}: `}
          <Link
            component={RouterLink}
            to=""
            onClick={(e) => handleClick(e, type.ofType!.name)}
          >
            {type.ofType!.name}
          </Link>
          !
        </>
      );
    }
  };

  const renderFieldItem = (
    field: ApiDocsFieldEntry | ApiDocsInputFieldEntry,
  ) => {
    const { name, description } = field;

    return (
      <li key={name} style={{ margin: '1em 0' }}>
        <Typography
          variant="body1"
          sx={{ color: Colors.GraphQLColor }}
          whiteSpace={'pre-wrap'}
        >
          {getFieldSignature(field)}
        </Typography>
        <Typography variant="body2" gutterBottom noWrap={false}>
          {description}
        </Typography>
      </li>
    );
  };

  const backToDocsIndexLink = () => {
    return (
      <Link component={RouterLink} to={''} onClick={(e) => handleClick(e, '')}>
        <Typography gutterBottom variant="h5" component="div">
          {'< Docs'}
        </Typography>
      </Link>
    );
  };

  if (!apiDocsTypeDetailedInfo) {
    return (
      <>
        <Typography gutterBottom variant="h4" component="h4">
          API Docs
        </Typography>
        {backToDocsIndexLink()}
        {apiTypesList && (
          <ul style={{ listStyle: 'none', padding: '1em', margin: 0 }}>
            {apiTypesList.types
              .filter((field) => !field.name.startsWith('__'))
              .map((value) => {
                return (
                  <li key={value.name}>
                    <Link
                      component={RouterLink}
                      to={''}
                      onClick={(e) => handleClick(e, value.name)}
                    >
                      {value.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        )}
      </>
    );
  }

  return (
    <>
      <Typography gutterBottom variant="h4" component="h4">
        {apiDocsTypeDetailedInfo.name}
      </Typography>
      {backToDocsIndexLink()}
      <Box maxWidth={DOCS_MAX_WIDTH}>
        {apiDocsTypeDetailedInfo.description && (
          <>
            <Divider textAlign="left">
              <Typography variant="caption">Description</Typography>
            </Divider>
            <Typography
              gutterBottom
              variant="body1"
              component="p"
              sx={{ p: '1em' }}
            >
              {apiDocsTypeDetailedInfo.description}
            </Typography>
          </>
        )}

        {apiDocsTypeDetailedInfo.fields ||
        apiDocsTypeDetailedInfo.inputFields ? (
          <>
            <Divider textAlign="left">
              <Typography variant="caption">Fields</Typography>
            </Divider>
            <ul style={{ listStyle: 'none', padding: '1em', margin: 0 }}>
              {apiDocsTypeDetailedInfo.fields &&
                apiDocsTypeDetailedInfo.fields.map((field) =>
                  renderFieldItem(field),
                )}
              {apiDocsTypeDetailedInfo.inputFields &&
                apiDocsTypeDetailedInfo.inputFields.map((field) =>
                  renderFieldItem(field),
                )}
            </ul>
          </>
        ) : null}

        {apiDocsTypeDetailedInfo.enumValues && (
          <>
            <Divider textAlign="left">
              <Typography variant="caption">Enum Values</Typography>
            </Divider>
            <ul style={{ listStyle: 'none', padding: '1em', margin: 0 }}>
              {apiDocsTypeDetailedInfo.enumValues.map((enumValue) => {
                return (
                  <li key={enumValue.name} style={{ margin: '1em 0' }}>
                    {enumValue.name}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </Box>
    </>
  );
}
