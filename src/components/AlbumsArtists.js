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

const loadingStyle = css`
  margin-top: 180px;
`;

const AlbumsArtists = ({history}) => {
  const [albumsId, setAlbumsId] = useState(localStorage.getItem('id_album'))

  const { data, loading , err } = useGetAxios(`https://api.spotify.com/v1/albums/${albumsId}`)

  if(!albumsId || err){
    localStorage.clear('id_album')
    return <Redirect to={'/'}/>
  } 

  console.log(err)

  return (
    <Fragment>
      <Container css={ containerStyles }>
        <h2 css={titleStyle}>{data.name}</h2>
        <div>

        {loading ? (
          <div css={loadingStyle}>
            <div className="sk-folding-cube">
              <div className="sk-cube1 sk-cube"></div>
              <div className="sk-cube2 sk-cube"></div>
              <div className="sk-cube4 sk-cube"></div>
              <div className="sk-cube3 sk-cube"></div>
            </div>
          </div>
          
        ) 
        : <TrackList albums={data}/>
        
        }
        </div>
      </Container>
    </Fragment>
  )
}

export default AlbumsArtists
