@observer export default class BlogPost extends Component {

  async start(){
    this.createStoreConnectedProperties({
      blogPosts : []
    });
  }

  heading = '';
  text = '';
  key = '';
  categories = [];

  getInfo(e){
    if (e.currentTarget.id === 'heading') {
      this.heading = e.currentTarget.value;
    } else {
      this.text = e.currentTarget.value;
    }
  }

  getCategories(){
    this.categories = $('.categoriesCheckbox input[type=checkbox]:checked').map(function(){
      return this.id;
    }).get();
  }

  saveInfo(){
    this.getCategories();
    this.blogPosts.push({categories: this.categories, heading : this.heading, text : this.text, key : Math.random()})
  }
  
}