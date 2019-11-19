import React from 'react'

const Gud = (props) => {
    return (
        <section className='guder'>
            <h3>{props.navn}</h3>
            <p>{props.besk}</p>
        </section>
    )
}

export default Gud