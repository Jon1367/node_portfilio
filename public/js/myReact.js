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


  /** @jsx React.DOM */

/** @jsx React.DOM */

 var Flux = new McFly();

        /** Store */

  _skills = [];

  function addSkill(text){
    _skills.push(text);
  }

        var SkillStore = Flux.createStore({
            getSkills: function(){
               return _skills;
            }
        }, function(payload){
            if(payload.actionType === "ADD_SKILL") {
                addSkill(payload.text);
                SkillStore.emitChange();
            }
        });

        /** Actions */

        var SkillActions = Flux.createActions({
            addSkill: function(text){
               return {
                  actionType: "ADD_SKILL",
                  text: text
               }
            }
        });

        function getSkills(){
           return {
               skills: SkillStore.getSkills()
           }
        }

        /** Controller View */

        var SkillsController = React.createClass({
            mixins: [SkillStore.mixin],
            getInitialState: function(){
                return getSkills();
            },
            storeDidChange: function() {
                this.setState(getSkills());
            },
            render: function() {
                return <Skills skills={this.state.skills} />;
            }
        });

        /** Component */

        var Skills = React.createClass({
            addSkill: function(){
                SkillActions.addSkill({_id: Math.floor(Math.random()*1000000)});

            },
            render: function() {
                return (
                <div className="recipes_app">
                    <ul className="recipes">
                        { this.props.skills.map(function(skill, index){
                            return <li key={index}>skill {index} : {skill._id}</li>
                        })}
                    </ul>
                    <button onClick={this.addSkill}> Skill</button>
                </div>
                )
            }
        });

  window.SkillsData = [
    {title: "DataBase", instructions: "Have an understanding of relational and non-relational Database. Can create application with Lamp or mean stack. Knowledge in Mongo DB and MySQL."},
    {title: "Eggplant and Polenta", instructions: "Put the eggplant in the oven..."}
  ];
        React.render(<SkillsController />,
          document.getElementById('skillsRow')
           );
