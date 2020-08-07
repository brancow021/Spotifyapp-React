/** @jsx jsx */

import React, { Fragment, memo, useEffect, useState} from 'react'
import { useGetAxios } from '../hooks/useGetAxios'
import { CardColumns, Card, Badge } from 'react-bootstrap'
import {css, jsx} from '@emotion/core'

const loadingStyle = css`
  margin-top: 180px;
`;


const SearchCard = memo(({ types, searchText }) => {

  const {data, loading , err } = useGetAxios(`https://api.spotify.com/v1/search?q=${searchText}&type=${types}`)


  console.log(data)

  return (
    <Fragment>
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
            <Card key={artist.id}>
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
