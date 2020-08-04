/** @jsx jsx */
import React, { Fragment, useState } from 'react'
import { css, jsx } from '@emotion/core'
import { Container } from 'react-bootstrap'
import TrackList from '../components/TracksList'
import { Redirect } from 'react-router-dom'
import { useGetAxios } from '../hooks/useGetAxios'

const containerStyles = css`
  align-items: center;
  margin-top: 25px;
  margin: 0px auto;
`

const titleStyle = css`
  color: #eee;
  text-align: center;
  border-radius: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const trackStyles = css`
  background-color: red;
`


const AlbumsArtists = ({history}) => {
  const [albumsId, setAlbumsId] = useState(localStorage.getItem('id_album'))

  const { data, loading , err } = useGetAxios(`https://api.spotify.com/v1/albums/${albumsId}`)

  if(!albumsId){
    return <Redirect to={'/'}/>
  } 

  return (
    <Fragment>
      <Container css={ containerStyles }>
        <h2 css={titleStyle}>{data.name}</h2>
        <div css={ trackStyles }>
          <TrackList albums={data}/>
        </div>
      </Container>
    </Fragment>
  )
}

export default AlbumsArtists
