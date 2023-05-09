

function Random({ min, max }) {

    function randomNum(min, max) {
        return Math.round(Math.random() * (max - min) + max)
    }


    return (
        <p>{randomNum(min, max)}</p>
    )
}

export default Random