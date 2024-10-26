import React from 'react'
import Flag from 'react-world-flags';

const CountryFlag = ({ countryCode }) => {
    return <Flag code={countryCode} style={{ width: '40px', height: 'auto', margin: 'auto' }} />;
}

export default CountryFlag