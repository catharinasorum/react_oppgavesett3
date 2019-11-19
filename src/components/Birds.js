import React from 'react'

const birds = ["seagull", "hummingbird", "blackbird", "parakeet"]

const Birds = () => {
    return (
        <div class="birds">
            <ul>
                { 
                    birds.map(
                        <li>{bird}</li>
                    ) 
                }
            </ul>
        </div>
    )
}

export default Birds