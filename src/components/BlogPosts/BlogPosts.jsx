<main className="container">
  <div className="d-flex flex-nowrap p-0">
    <div className="p-0 col-3">
      {this.aside}
      <Button className="col-12 my-2" onClick={() => this.showAll()}>Visa alla inlägg!</Button>
    </div>
    <div className="ml-4">
      {this.showPost}
    </div>
  </div>
</main>
