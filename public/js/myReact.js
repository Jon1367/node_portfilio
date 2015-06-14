// Get user's time with react js

 // basic react js render element 
var TimeApplication = React.createClass({
  render: function() {
    var time = new Date().getTimezoneOffset();
      return <p>{time}</p>;
    }
    });
    var start = new Date().getTime();
    setInterval(function() {
    React.render(
      <TimeApplication/>,
      document.getElementById('example')
      );
    }, 50);

    
// Create element in React js
React.render(
  React.createElement('h1', null, 'Hello, world!'),
  document.getElementById('createClass')
);

// Example


  var Recipe = React.createClass({
    getInitialState: function () {
      /* remember, we really invoked a function and passed in args. */
      console.log(this.props)
      /* Recipe.getInitialState(): must return an object or null */
      return null;
    },
    render: function() {
      return (
        <div>
          <h2> {this.props.title} </h2>
          <p> {this.props.instructions} </p>
        </div>
      );
    }
  });
  var RecipeList = React.createClass({
    render: function() {
      return (
        <div>
          RecipeList component text
          <Recipe
            title="Stuffed Chard"
            instructions="Stuff the chard..."
          />
          <Recipe
            title="Eggplant and Polenta"
            instructions="Put the eggplant in the oven..."
          />
        </div>
      );
    }
  });
  var RecipeForm = React.createClass({
    render: function() {
      return (
        <div >
          RecipeForm component text
        </div>
      );
    }
  });
  var RecipeBook = React.createClass({
    render: function() {
      return (
        <div>
          Hello, world! I am a RecipeBook.
          <RecipeList/>
          <RecipeForm/>
        </div>
      );
    }
  });
  React.render(
    <RecipeBook />,
    document.getElementById('app-container')
  );
  </script>