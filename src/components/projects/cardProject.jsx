import PropTypes from 'prop-types'; 
function CardProject({ text, title, img, arrayLeng }) {
  return (
        <div className='bg-red-100 min-h-[100px] grid'>
            <section>
                <img src={img} alt="" />
            </section>
            <section>
                <article className='Text'>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </article>
                <article>
                    {
                        arrayLeng.map((image, index) => (
                            <img key={index} src={image} />
                        ))
                    } 
                </article>
            </section>
        </div>
    
  )
}


export default CardProject