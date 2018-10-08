import OnePost from './OnePost/OnePost';
import Aside from './Aside/Aside';

@observer export default class BlogPosts extends Component {

  @observable showPost = [];
  @observable aside = [];

  start(){
    if(this.stores.BlogPost && this.stores.BlogPost.blogPosts){
      this.allPosts = this.stores.BlogPost.blogPosts.map(post => {
        return <OnePost heading={post.heading} text={post.text} key={post.key} categories={toJS(post.categories)} />
      });

      this.categories = this.getCategories();
      this.aside = [...this.categories]

      this.asideButtons = this.stores.BlogPost.blogPosts.map(post => {
        return <Aside heading={post.heading} clickMethod={e => this.checkWhat(e)} key={post.key} categories={toJS(post.categories)}/>
      });

    } else {
      this.allPosts = ['poop'];
      this.aside = ['poop2'];
    }
  }

  checkWhat(e){
    this.showPost = this.allPosts.find(x => x.props.heading === e.target.id);
    // check if clicked item is equal to an heading.
  }

  showCategoryButtons(e){
    this.aside = this.categories.filter(categoryButton => categoryButton.props.children === e.target.innerHTML)

    this.aside = [...this.aside, ...this.asideButtons.map(asideButton => {
      if(asideButton.props.categories.includes(e.target.innerHTML)){
        return asideButton;
      }
    })];
    this.aside = [...this.aside, ...this.categories.filter(categoryButton => categoryButton.props.children !== e.target.innerHTML)];
    console.log(this.aside);
  }

  showCategoryPosts(e){
    this.showPost = this.allPosts.filter(x => {
      return x.props.categories.includes(e.target.innerHTML)
    })
  }

  showAll(){
    this.showPost = [...this.allPosts];
  }

  getCategories(){
    let arrayOfCategories = [];

    toJS(this.stores.BlogPost.blogPosts).map(x => x.categories).forEach(x => {
      arrayOfCategories = [...arrayOfCategories, ...x];
    });

    arrayOfCategories = arrayOfCategories.filter((category, i, arr) => {
      return i === arr.indexOf(category);
    })

    return arrayOfCategories.map(x => {
      return (
        <Button className="col-12 my-2" color="primary" onClick={e => this.showCategoryButtons(e)}>{x}</Button>
      )
    })
  }


}