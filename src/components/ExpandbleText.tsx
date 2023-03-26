import React, { useState } from 'react'

function ExpandbleText({ maxlimit }) {
    const [maxSize, setMaxSize] = useState(maxlimit)
    const mytext = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eum ratione amet dolorem nostrum consequuntur atque doloribus sit necessitatibus nulla? Unde molestiae culpa, dicta quas architecto aliquam ea praesentium aliquid."
    const cutLimit = maxlimit >= mytext.length ? mytext.length : maxlimit
    function handleClick(length: number) {
        setMaxSize(length)
    }

    const moreButton = <button onClick={handleClick.bind(this, mytext.length)}>show more</button>
    const lessButton = <button onClick={handleClick.bind(this, maxlimit)}>show less</button>

    return (
        <div><p>{mytext.substring(0, maxSize)}...{maxSize < mytext.length ? moreButton : lessButton}</p></div>)

}

export default ExpandbleText