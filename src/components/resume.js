import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';

import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
           

            <h2 style={{paddingTop: '2em'}}>Rishikesh Bhattalwar</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hello, This is Rishikesh .I like to write code and build cool things.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>pune, 411012</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>(+91) 860-5411-792</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Email</h5>
            <p>bhattalwarr@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Web</h5>
            <p>mywebsite.com</p>
           
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2017}
              endYear={2021}
              schoolName="SRM Institute of Science and Technology "
              schoolDescription="Major in Computer Science Engineering .
              Passed with 8.3 gpa."
               />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Skills</h2>
              <Skills
                skill="javascript"
               
                />
                <Skills
                  skill="HTML/CSS"
                 
                  />
                  <Skills
                    skill="NodeJS"
                    
                    />
                    <Skills
                      skill="React"
                     
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;