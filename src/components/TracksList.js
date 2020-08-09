import React, { Fragment } from 'react'
import { CardColumns, Card } from 'react-bootstrap'


const TracksList = ({albums}) => {

  return (
    <Fragment>
      <CardColumns>
        {albums.tracks.items.map((album) => (
          <Card key={album.id}>
              <Card.Title>{album.name}</Card.Title>
              <Card.Text></Card.Text>
              <Card.Footer><audio controls src={album.preview_url}></audio></Card.Footer>
          </Card>
        ))} 
     </CardColumns>
    </Fragment>
  )
}

export default TracksList
