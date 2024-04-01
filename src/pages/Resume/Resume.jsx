import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

function Resume() {
  return (
    <section>
        <header>
            <h2 className='h2 article-title'>Resume</h2>
        </header>
        <div className='timeline'>
            <div className='title-wrapper'>
                <div className='icon-box'>
                <FaBookOpen />
                </div>
                <h3 className='h3'>Education</h3>
            </div>
            <ol className='timeline-list'>
                <TimelineItem title="Govt. Sarvodya Bal Vidyalya"
                date = "2008 - 2018" 
                description = "Class 10th with 85% Subjects = Science, Maths, English, Hindi, Social Science "/>

                <TimelineItem title="School of Excellence"
                date = "2018 - 2020" 
                description = "Class 12th with74.5% Subjects = English, Physics, Chemistry, Maths, Computer Science "/>

                <TimelineItem title="BM Group Of Institution"
                date = "2022-2026" 
                description = "BTECH(CSE) currently Pursuing..."/>
            </ol>
        </div>

        <div className='timeline'>
            <div className='title-wrapper'>
                <div className='icon-box'>
                <MdAccessTimeFilled />
                </div>
                <h3 className='h3'>Experience</h3>
            </div>
            <ol className='timeline-list'>
                <TimelineItem title="Self-Working"
                date = "2023 - Present" 
                description = "Working On Some Projects. You may See them in Portfolio Section.."/>

                <TimelineItem title="Tutor"
                date = "2020 - Present" 
                description = "Teaching Science to Students Which is also my hobby"/>
            </ol>
        </div>

        <div className='skill'>
            <h3 className='h3 skills-title'>My Skills</h3>
            <ul className='skills-list content-card'>
                <SkillItem title="Web Developement"  value={90} />
                <SkillItem title="HTML,CSS,BootStrap,JS"  value={95} />
                <SkillItem title="JAVA"  value={70} />
            </ul>
        </div>
    </section>
  )
}

export default Resume