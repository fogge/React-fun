const Aside = (props) => {
  return (
    <Fragment>
      <Button className="col-12 my-2" onClick={props.clickMethod} id={props.heading}>{props.heading}</Button>
    </Fragment>
  )
}

export default Aside;