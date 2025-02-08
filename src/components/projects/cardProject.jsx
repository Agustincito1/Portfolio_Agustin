import PropTypes from 'prop-types'; 
function CardProject({ text, title, img, arrayLeng }) {
  return (
        <div className='bg-[var(--bh)] min-h-[40px]  grid grid-rows-[50%_50%] h-[30vw] p-[1%]'>
            <section>
                <img className='h-full' src={img} alt="" />
            </section>
            <section className='grid grid-rows-[1fr_1fr_1fr] p-[3%] gap-[8%]'>
                <article >
                    <h3 className='Text'>{title}</h3>
                    <p  className='Textp'>{text}</p>
                </article>
                <article className="grid grid-cols-6 items-center w-full ">
                    {
                        arrayLeng.map((image, index) => (
                            <img className="" key={index} src={image} />
                        ))
                    } 
                </article>
                <article className="grid grid-cols-2 items-center w-full ">
                    <img className="w-[3vw] m-auto" src="./imgs/github.png" alt="" />
                </article>
            </section>
        </div>
    
  )
}


export default CardProject