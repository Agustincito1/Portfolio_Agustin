import PropTypes from 'prop-types'; 

function ImageSkill({url, title}) {
    return (
        <>
            <img className="w-[5vw] h-[5vw]" src={url}  alt={title}/> 
        </>
    )
}

export default ImageSkill