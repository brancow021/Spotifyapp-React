/** @jsx jsx */

import { Fragment, memo, useState, useCallback} from 'react'
import { useGetAxios } from '../hooks/useGetAxios'
import { CardColumns, Card, Badge, Button } from 'react-bootstrap'
import {css, jsx} from '@emotion/core'
import { useHistory, Redirect } from 'react-router-dom';

const loadingStyle = css`
  margin-top: 180px;
`;

const cardStyle = css`
  cursor: pointer;
`


const SearchCard = memo(({ types, searchText}) => {
  const history = useHistory()
  const [idArtist, setidArtist] = useState()

  const {data, loading, err } = useGetAxios(`https://api.spotify.com/v1/search?q=${searchText}&type=${types}`)

  const handleTracks = useCallback(
    (evt, id) => {
      history.push(`/top-tracks/${id}`)
      setidArtist(id)
    },[idArtist],
  )

  return (
    <Fragment>
      {
        err 
        ? <Redirect to={'/'}/>
        : ''
      }
      {loading ? 
          <div css={loadingStyle}>
            <div className="sk-folding-cube">
              <div className="sk-cube1 sk-cube"></div>
              <div className="sk-cube2 sk-cube"></div>
              <div className="sk-cube4 sk-cube"></div>
              <div className="sk-cube3 sk-cube"></div>
            </div>
          </div>
         : 
          <CardColumns>
            {data.artists.items.map(artist => (
            <Card css={cardStyle} onClick={(evt) => handleTracks(evt, artist.id)} key={artist.id}>
              <Card.Img 
                variant="top" 
                src={artist.images.length === 0 ? './assets/img/Noimage.png' : artist.images[0].url}
              />

                <Card.Body>
                <Card.Title>{ artist.name }</Card.Title>
                <Card.Text>
                  <Badge 
                    variant="success">
                    {artist.genres[0]}
                  </Badge>
                </Card.Text>
                <Card.Footer>
                  <small 
                    className="text-muted">
                    Total de seguidores: { artist.followers.total }
                  </small>
                  <Button
                    className="mt-2"
                    size="lg" 
                    block>
                    ¡Ver top de canciones!
                  </Button>
                </Card.Footer>
                </Card.Body>
            </Card>
            ))} 
          </CardColumns>
      }
    </Fragment>
  )
})

export default SearchCard
