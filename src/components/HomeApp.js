/** @jsx jsx */
import React, { Fragment } from "react";
import { useGetAxios } from "../hooks/useGetAxios";
import { CardColumns, Card, Badge, Container, Button } from "react-bootstrap";
import { css, jsx } from "@emotion/core";
import { Helmet } from 'react-helmet'
let URL = "https://api.spotify.com/v1/browse/new-releases";

const titleStyle = css`
  margin: 0;
  color: #eee;
  text-align: center;
  border-radius: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const cardColumn = css`
  margin-top: 25px;
`;

const containerStyles = css`
  align-items: center;
  margin-top: 25px;
`

const loadingStyle = css`
  margin-top: 180px;
`;

const cardStyles = css`
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
`;


const HomeApp = ({history}) => {
  
  const { data, loading, err } = useGetAxios(URL);
  

  const handleAlbumsView = (evt, album) => {
    evt.preventDefault()
    console.log(album)
    localStorage.setItem('id_album',(album.id));
    history.push('/albums')
  }

  return (
    <Fragment>
      <Helmet>
        <title>Nuevos Lanzamientos | Imusic </title>
        <meta charSet="utf-8" />
        <meta name="description" content="Nuevos lanzamientos musicales"/>
      </Helmet>

      <Container expand="lg" css={containerStyles}>
        <h2 css={titleStyle}>Nuevos Lanzamientos</h2>

        {loading ? (
          <div css={loadingStyle}>
            <div className="sk-folding-cube">
              <div className="sk-cube1 sk-cube"></div>
              <div className="sk-cube2 sk-cube"></div>
              <div className="sk-cube4 sk-cube"></div>
              <div className="sk-cube3 sk-cube"></div>
            </div>
          </div>
        ) : (
          <CardColumns css={cardColumn}>
            {data.albums.items.map((album) => (

              <Card onClick={(evt) => handleAlbumsView(evt, album) } css={cardStyles} key={album.id}>
                <Card.Img variant="top" src={album.images[0].url} />

                <Card.Body>
                  <Card.Title>{album.name}</Card.Title>
                  <Card.Text>{}</Card.Text>
                  <Badge variant="success">
                    {album.artists[0].name}
                  </Badge>

                  <Badge 
                    className="ml-1" 
                    variant="primary">
                    {album.album_type}
                  </Badge>
                </Card.Body>

                <Button
                  onClick={(evt) => handleAlbumsView(evt, album)}
                  className="mt-2"
                  size="lg" 
                  block>
                  ¡Escuchar!
                </Button>
              </Card>

            ))}
          </CardColumns>
        )}
      </Container>
    </Fragment>
  );
};

export default HomeApp;
