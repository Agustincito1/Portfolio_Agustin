import PropTypes from 'prop-types'; 

function ImageSkill({url, title, link}) {
    return (
        <>  
            
            <a className="w-fit h-fit rounded-[1vw] hover:scale-110 duration-200 " href={link} target='_blank'><img className="p-[0.5vw] rounded-[1vw] bg-[var(--lv)] w-[5vw] h-[5vw] hover:bg-[var(--bh)]" src={url}  alt={title}/> </a>
           
            
        </>
    )
}

export default ImageSkill