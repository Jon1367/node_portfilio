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




/** FLUX */

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
                SkillActions.addSkill({_id: "Have an understanding of relational and non-relational Database. Can create application with Lamp or mean stack. Knowledge in Mongo DB and MySQL."});

            },
            render: function() {
                return (
                <div >
                    <ul>
                        { this.props.skills.map(function(skill, index){
                            return <li key={index}>skill {index} : {skill._id}</li>
                        })}
                    </ul>
                    <button onClick={this.addSkill}> Skill</button>
                </div>
                )
            }
        });

var skillsData = [
    {title: "DataBase", instructions: "Have an understanding of relational and non-relational Database. Can create application with Lamp or mean stack. Knowledge in Mongo DB and MySQL."},
    {title: "Web Apis", instructions: "Has experience with social media api. Can create application with various api. Can create api if needed"}
  ];
        React.render(<SkillsController data={window.skillsData} />,
          document.getElementById('skillsRow')
           );
