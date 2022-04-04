import React, { useRef } from "react"

export const Card = ({ name }) => {
    // useEffect(() => {
    //     console.log('we are here')
    // }, [name])

    const divRef = useRef()

    const changeStyle = () => {
        console.log(divRef.current.style.color = 'red')
    }

    return (
        <div ref={useRef} onClick={changeStyle}>
            This is {name}
        </div>
    )
}
