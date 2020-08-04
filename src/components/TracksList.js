import React, { Fragment } from 'react'
import { CardColumns, Card } from 'react-bootstrap'

const TracksList = ({albums}) => {

  console.log(albums)

  return (
    <Fragment>
      <CardColumns>
        {/* {albums.items.map((album, index) => (
          <Card>
            <Card.Img variant="top" src={album.images[0]}/>
              <Card.Title>{}</Card.Title>
              <Card.Text></Card.Text>
              <Card.Footer></Card.Footer><audio controls src=""></audio>
          </Card>
        ))} */}
     </CardColumns>
    </Fragment>
  )
}

export default TracksList
