<main className="container">
  <FormGroup>
      <Label for="heading">Rubrik</Label>
      <Input type="text" id="heading" placeholder="Rubrik" onChange={e => this.getInfo(e)}/>
    </FormGroup>
    <FormGroup>
      <Label for="blogpost">Inlägg</Label>
      <Input type="textarea" id="blogpost" placeholder="Bloggtext" onChange={e => this.getInfo(e)}/>
    </FormGroup>

    <FormGroup>
      <Label for="categories">Kategorier</Label>
      <div>
        <CustomInput className="categoriesCheckbox" type="checkbox" id="sadPosts" label="Ledsna inlägg" />
        <CustomInput className="categoriesCheckbox" type="checkbox" id="happyPosts" label="Glada inlägg" />
        <CustomInput className="categoriesCheckbox" type="checkbox" id="drunkPosts" label="Fylleinlägg" />
      </div>
    </FormGroup>
    <Button onClick={e => this.saveInfo()}>Make a post!</Button>
</main>
