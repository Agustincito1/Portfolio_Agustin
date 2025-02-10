import PropTypes from 'prop-types'; 

function ImageLinks({url, title, link}) {
    return (
        <>  
            <a className="hover:scale-110 duration-200 w-fit h-fit rounded-[1vw]" href={link} target='_blank'><img className="p-[0.5vw] rounded-[1vw] bg-[var(--lv)] w-[5vw] h-[5vw] hover:bg-[var(--bh)] " src={url}  alt={title}/> </a> 
        </>
    )
}

export default ImageLinks