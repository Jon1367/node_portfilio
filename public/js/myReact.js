// Get user's time with react js

 // basic react js render element 
var TimeApplication = React.createClass({
  render: function() {

    var currentdate = new Date();
    // Get Timezone data
    var datetime = currentdate.getDay() + "/"+currentdate.getMonth() 
    + "/" + currentdate.getFullYear() + " @ " 
    + currentdate.getHours() + ":" 
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
      return <p>{datetime}</p>;
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

// using props & states
  var Skill = React.createClass({
    getInitialState: function () {

      console.log(this.props)

      return null;
    },
    render: function() {
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
  // uesless
  var Skillbook = React.createClass({
    render: function() {
      return (
        <div>
          <SkillList/>
        </div>
      );
    }
  });
  React.render(
    <SkillList/>,
    document.getElementById('skillsRow')
  );
