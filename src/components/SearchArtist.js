/** @jsx jsx */
import React, {Fragment, useState} from 'react'
import { Form, FormControl, Container  } from 'react-bootstrap'
import  SearchCard  from './SearchCard'
import { css, jsx } from '@emotion/core'

const formStyles = css`
  margin-bottom: 30px;
`

const SearchArtist = () => {
  const [valuesChange, setValuesChange] = useState({searchChange: ''})
  const { searchChange } = valuesChange
  const [search, setsearch] = useState('')

  const handleChange = ({target}) => {
    setValuesChange({
      ...valuesChange,
      [target.name]: target.value
    })
  }

  const handleSearch = (evt) => {
    evt.preventDefault();
    setsearch(searchChange)
  }

  return (
    <Fragment>
      <Container>
        <Form onSubmit={ handleSearch } css={formStyles}>
          <Form.Label>Buscar</Form.Label>
          <FormControl
            name="searchChange"
            onChange={ handleChange } 
            autoFocus 
            type="text"
            value= { searchChange }
            autoComplete="off"
            placeholder={`Buscar Artistas`}
          />
        </Form>
        <SearchCard types={'artist'} searchText={ search }/>
      </Container>
    </Fragment>
  )
}

export default SearchArtist
