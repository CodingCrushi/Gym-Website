
const Today = (props) => {
  return (
	<div>
	   <div className='bg-image m-2' style={{width : "100%" , height : "80vh"}}>
      <img src={props.img} className='w-100' alt='MAN' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
			<h1 className='text-white mb-0 display-1 '>{props.message}</h1>
        </div>
      </div>
    </div>
	</div>
  )
}

export default Today
