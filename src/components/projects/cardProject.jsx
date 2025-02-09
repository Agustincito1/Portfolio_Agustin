import PropTypes from 'prop-types'; 
function CardProject({ text, title, img, arrayLeng, linkGit }) {
  return (
        <div className='shadowProjects bg-[var(--bh)] min-h-[40px] rounded-[0.4vw] grid grid-rows-[40%_50%] h-[25vw] p-[1%]  hover:scale-110 duration-100'>
            <section>
                <img className=' h-full rounded-[0.4vw] p-[1%]' src={img} alt="" />
            </section>
            <section className='grid grid-rows-[55%_35%_10%] p-[1%] gap-[0%]'>
                <article className='' >
                    <h3 className='Text'>{title}</h3>
                    <p  className='Textproject'>{text}</p>
                </article>
                <article className="flex m-auto justify-center w-full ">
                    {
                        arrayLeng.map((image, index) => (
                            <img className="w-[4vw]" key={index} src={image} />
                        ))
                    } 
                </article>
                <article className="flex justify-center w-full ">
                    <a href={linkGit} className="w-fit" target='_blank'><img className="w-[3vw] m-auto" src="./imgs/github.png" alt="" /></a>
                </article>
            </section>
        </div>
    
  )
}


export default CardProject