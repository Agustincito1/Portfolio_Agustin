import PropTypes from 'prop-types'; 

function ImageSkill({url, title, link}) {
    return (
        <>  
            
            <a className="bg-red-100 w-fit h-fit rounded-[1vw]" href={link} target='_blank'><img className="p-[0.5vw] rounded-[1vw] bg-[var(--lv)] w-[5vw] h-[5vw]" src={url}  alt={title}/> </a>
           
            
        </>
    )
}

export default ImageSkill