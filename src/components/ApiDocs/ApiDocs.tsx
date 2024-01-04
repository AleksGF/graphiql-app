import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { ApiDocsTypeField, fetchApiDocs } from '@/store/reducers/apiDocsSlice';
import { Box, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

//TODO: Refactor all render functions
//TODO: Add styles. Wrap descriptions. Remove dots and visited links styles

export default function ApiDocs() {
  const { apiDocs } = useAppSelector((state) => state.apiDocs);

  const dispatch = useAppDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(
      fetchApiDocs(
        'https://swapi-graphql.netlify.app/.netlify/functions/index', // TODO: Get URL from endpoint slice
      ),
    );
  }, [dispatch]);

  const renderDocs = () => {
    const selectedTypeName = location.state?.apiDocsSelectedTypeName;
    const selectedType = apiDocs?.types.filter(
      (type) => type.name === selectedTypeName,
    )[0];

    const renderFieldItem = (field: ApiDocsTypeField) => {
      const { name, description, type, args } = field;

      const getFieldSigneture = () => {
        if (type.name && args.length == 0) {
          return (
            <>
              {`${name}: `}
              <Link to="" state={{ apiDocsSelectedTypeName: type.name }}>
                {type.name}
              </Link>
            </>
          );
        }

        if (type.name && args.length > 0) {
          return (
            <>
              {`${name}(`}
              {args.map((arg) => {
                return (
                  <Typography key={arg.name} whiteSpace={'pre-wrap'}>
                    {`  ${arg.name}: `}
                    <Link
                      to=""
                      state={{ apiDocsSelectedTypeName: arg.type.name }}
                    >
                      {arg.type.name}
                    </Link>
                  </Typography>
                );
              })}
              {'): '}
              <Link to="" state={{ apiDocsSelectedTypeName: type.name }}>
                {type.name}
              </Link>
            </>
          );
        }

        if (type.kind === 'LIST') {
          return (
            <>
              {`${name}: `}[
              <Link
                to=""
                state={{ apiDocsSelectedTypeName: type.ofType?.name }}
              >
                {type.ofType?.name}
              </Link>
              ]
            </>
          );
        }

        if (type.kind === 'NON_NULL') {
          return (
            <>
              {`${name}: `}
              <Link
                to=""
                state={{ apiDocsSelectedTypeName: type.ofType?.name }}
              >
                {type.ofType?.name}
              </Link>
              !
            </>
          );
        }
      };

      return (
        <li key={field.name}>
          <Typography variant="body1">{getFieldSigneture()}</Typography>
          <Typography variant="body2" gutterBottom noWrap={false}>
            {description}
          </Typography>
        </li>
      );
    };

    const backToDocsIndexLink = () => {
      return (
        <Link to={''} state={{ apiDocsSelectedTypeName: null }}>
          <Typography gutterBottom variant="h5" component="div">
            {'< Docs'}
          </Typography>
        </Link>
      );
    };

    if (!selectedTypeName || !selectedType) {
      return (
        <>
          <Typography gutterBottom variant="h4" component="h4">
            API Docs
          </Typography>
          {backToDocsIndexLink()}
          {apiDocs && (
            <ul>
              {apiDocs.types.map((value) => {
                return (
                  <li key={value.name}>
                    <Link
                      to={''}
                      state={{ apiDocsSelectedTypeName: value.name }}
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
          {selectedTypeName}
        </Typography>
        {backToDocsIndexLink()}
        <Box>
          {selectedType.description && (
            <>
              <Divider textAlign="left">
                <Typography variant="caption">Description</Typography>
              </Divider>
              <Typography gutterBottom variant="body1" component="p">
                {selectedType.description}
              </Typography>
            </>
          )}

          {selectedType.fields && (
            <>
              <Divider textAlign="left">
                <Typography variant="caption">Fields</Typography>
              </Divider>
              <ul>
                {selectedType.fields.map((field) => renderFieldItem(field))}
              </ul>
            </>
          )}
        </Box>
      </>
    );
  };

  return renderDocs();
}
