import React, { Fragment, memo} from 'react'
import { useGetAxios } from '../hooks/useGetAxios'

const SearchCard = memo(({ types, searchText }) => {

  if(searchText){
    const {data, loading , err } = useGetAxios(`https://api.spotify.com/v1/search?q=${searchText}&type=${types}`)

    console.log(data);

  }


  return (
    <Fragment>
      
    </Fragment>
  )
})

export default SearchCard
