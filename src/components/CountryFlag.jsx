import React from 'react'
import Flag from 'react-world-flags';

const CountryFlag = ({ countryCode, style = {width: '40px', margin: 'auto'} }) => {
    return <Flag code={countryCode} style={{ height: 'auto', ...style }} />;
}

export default CountryFlag