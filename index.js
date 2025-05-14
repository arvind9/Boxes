const Box = props => {
  //  Write your code here.
  const {boxText, className} = props
  return (
    <div className={`box ${className}`}>
      <p>{boxText}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1>Boxes</h1>
    <div className='box-container'>
      <Box className='box-small' boxText='Small' />
      <Box className='box-medium' boxText='Medium' />
      <Box className='box-large' boxText='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
