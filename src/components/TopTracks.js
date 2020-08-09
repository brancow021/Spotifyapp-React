/** @jsx jsx */

import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card, Table } from 'react-bootstrap';
import { useGetAxios } from '../hooks/useGetAxios';
import { css, jsx } from '@emotion/core'

const cardStyle = css`
  background-color: rgba(20, 19, 19 , 0.46);
`

const cardBody = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`

const container = css`
  color: white;
`

const imgStyle = css`
  border-radius: 50px;
`

const tableStyle = css`
  margin-top: 20px;
  color: white;
`

const loadingStyle = css`
  margin-top: 180px;
`;

const TopTracks = () => {

  const {id} = useParams()
  const {data, loading , err} = useGetAxios(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=CO`)
  console.log(data)

  return (
    <Fragment>
      <Container css={container}>
        {!loading ?  
        <Card css={cardStyle}>
          <Card.Body  css={cardBody}>
          <h3>Canciones Top de { data.tracks[0].artists[0].name }</h3>
          </Card.Body>

          <Table css={tableStyle} responsive="sm">
            <thead>
              <tr>
                <th>logo</th>
                <th>Nombre</th>
                <th>Previews</th>
              </tr>
            </thead>
            <tbody>
            {data.tracks.map(track => (
              <tr key={track.id}>
                <td><img css={imgStyle} src={track.album.images[2].url} alt={track.name}/></td>
                <td>{ track.name }</td>
                <td><audio controls src={track.preview_url}></audio></td>
              </tr>
              ))}
            </tbody>
          </Table>
        </Card>
        :

        <div css={loadingStyle}>
            <div className="sk-folding-cube">
              <div className="sk-cube1 sk-cube"></div>
              <div className="sk-cube2 sk-cube"></div>
              <div className="sk-cube4 sk-cube"></div>
              <div className="sk-cube3 sk-cube"></div>
            </div>
          </div>
        }
        

      </Container>
    </Fragment>
  )
}

export default TopTracks
