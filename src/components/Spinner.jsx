import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";

const override = {
    display: "block",
    margin: "100px auto"
}

const Spinner = ({ loading }) => {
  return (
    <MoonLoader
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        className='text-red'
    />
  )
}

export default Spinner