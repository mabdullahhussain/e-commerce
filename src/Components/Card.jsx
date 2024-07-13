
function Card(props) {

    return(
      <>
      <div className="card bg-base-100 w-96 shadow-xl mt-5 mb-5">
  <figure><img className='h-72' src={props.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <p className="text-3xl">${props.price}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-blue-600 text-white">Buy Now</button>
    </div>
  </div>
</div>
      </>
    )
  }
  
  
  export default Card
  