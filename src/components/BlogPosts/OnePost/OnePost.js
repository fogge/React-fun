const OnePost = (props) => {
  return (
    <Fragment>
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
    </Fragment>
  )
}

export default OnePost;