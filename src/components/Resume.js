import '../assets/resume.css'

function Resume() {
    return (
        <div className="container-resume">
            <h1>Hunter D Mayo </h1>
            <h2 className='subheading'>Summary</h2>
            <div>I am an early-career software engineer in Austin, Texas. Before switching to a career in software engineering, I spent six years working as a patent attorney helping companies obtain patents on a wide range of software-related inventions.
            </div> <br />

            <h2 className='subheading'>Technical Experience</h2>
            <div><b>Programming Languages:</b> Java, JavaScript, Python</div>
            <div><b>Web:</b> HTML, CSS, TypeScript, React.js</div>
            <div><b>CRM Platforms:</b> Salesforce</div> <br />

            <h2 className='subheading'>Education</h2>
            <div><b>Boston University</b> - Boston, MA</div>
            <div className='degree'>Master of Science in Software Development</div> <br />

            <div><b>Baylor University School of Law</b> - Waco, TX</div>
            <div className='degree'>Juris Doctor</div> <br />

            <div><b>Texas A&M University</b> - College Station, TX</div>
            <div className='degree'>Bachelor of Science in Electrical Engineering</div>

            <h2 className='subheading'>Work Experience</h2>
            <div><b>The Cigna Group</b> - Software Engineer</div>
            <ul>
                <li className='job-duties'>Perform configuration and development work to customize the Salesforce instance used by internal salespeople</li>
            </ul>

            <div><b>Kowert, Hood, Munyon, Rankin & Goetzel, P.C.</b> - Patent Attorney</div>
            <ul>
                <li className='job-duties'>Prepare and prosecute patent applications in a variety of software fields, including machine learning, user authentication, risk detection, database systems, geophysical surveying and imaging, and financial services systems</li>
                <li className='job-duties'>Conduct invention disclosure calls with software development teams to discuss the technical details of their inventions</li>
                <li className='job-duties'>Prepare patent applications with technical write-ups that highlight the novel features of the inventions</li>
            </ul>

      </div>
    );
}

export default Resume;