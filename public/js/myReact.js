// Get user's time with react js
var test = 'hello';
 // basic react js render element 
var TimeApplication = React.createClass({
  render: function() {

    // Get current Time and date
    var currentdate = new Date();
    var datetime = currentdate.getDay() + "/"+currentdate.getMonth() 
    + "/" + currentdate.getFullYear() + "  " 
    + currentdate.getHours() + ":" 
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
      return <p>{datetime}</p>;
    }
    });
    setInterval(function() {
    React.render(
      // Renders class we created to the dom
      <TimeApplication/>,
      document.getElementById('example')
      );
    }, 50);

// Create's a Dom element in React js
React.render(
  React.createElement('h1', null, 'Skills'),
  document.getElementById('heading')
);

// using props & states
  var Skill = React.createClass({
    getInitialState: function () {
      // check if receive props
      console.log(this.props)
      //has to return null 
      return null;
    },
    render: function() {

    // React.render(

    //   var title =   his.props.title.toString();
    //   React.createElement('h4', null,title),
    //   document.getElementById('skillsRow')
    // );
      return (
        <div>
          <h4> {this.props.title} </h4>
          <p> {this.props.description} </p>
        </div>
      );
    }
  });
  var SkillList = React.createClass({
    render: function() {
      return (
        <div>

          <Skill
            title="DataBase"
            description="Have an understanding of relational and non-relational Database. Can create application with Lamp or mean stack. Knowledge in Mongo DB and MySQL."
          />
          <Skill
            title="Web Apis"
            description="Has experience with social media api. Can create application with various api. Can create api if needed."
          />
          <Skill
            title="Web Security"
            description="Can create secure application with SSL."
          />
        </div>
      );
    }
  });

  React.render(
    //renders skill list that holds all the information
    <SkillList/>,
    document.getElementById('skillsRow')
  );
