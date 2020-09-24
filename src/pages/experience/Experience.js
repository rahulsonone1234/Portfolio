import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
// import experience from '../../shared/experience_data.json';
import "./Experience.css";
import { Fade } from "react-reveal";

const experience = {
	title: "Experience",
	subtitle: "Work, Internships, Responsiblities and Achievements",
	description:
		"I have worked with many evolving startups as Fullstack-Developer, Designer and Software Architect.I have also worked with some well established companies mostly as Developer. I love organising and participating in the events and that is why I am also involved with many of Opensource Communities as a Representative.",
	header_image_path: "experience.jpg",
	sections: [
		{
			title: "Works",
			experiences: [
				{
					title: "Web and Android Developer",
					company: "Creed Services",
					company_url: "https://creed-44709.web.app/",
					logo_path: "creed_logo.jpg",
					duration: "May 2018 - Oct 2018",
					location: "Sangli, Maharashtra",
					description:
						"We have Build the Attendance App and the Website for the JK Academy which help the Teachers to take the daily Attendance and also upload the Homework and Assignmnets for the Students.",
					color: "#9b1578"
				}
			]
		},
		{
			title: "Internships",
			experiences: [
				{
					title: "Software Engineering Virtual Experience intern",
					company: "JPMorgan Chase & Co.",
					company_url: "https://drive.google.com/file/d/1NgnLEu6yMjUCc719vWdz8PUqBVVQHbw6/view?usp=sharing",
					logo_path: "jpmc_logo.png",
					duration: "May 2020",
					location: "",
					description:
						"I have worked on project Establishing Financial Data Feeds Front-End Web-Development and Data-Visualization with a Perspective using React, Python and Git. We were trained about how the business works and how our business can be the powerfull or dominating and also we were trained about how the analysis should be done of our project using latest Tools and Technologies." ,
					color: "#ee3c26"
				}
			]
		},
		{
			title: "Responsiblities",
			experiences: [
				{
					title: "Developer at ACSES",
					company: "ACSES",
					company_url: "https://wceacses.club/",
					logo_path: "acses_logo.png",
					duration: "April 2019 - March 2020",
					location: "Sangli, Maharashtra",
					description:
						"ACSES (Association of Computer Science and Engineering Students) is Deparmental club of Walchand College of Engineering, Sangli and was established in 1995. It aims at grooming the students technically, professionally and Logically along with inculcating social values and principles of personal excellence in friendly environment. It is a platform of the students, by the students and for the students and strongly believes in growing Together.",
					color: "#4285F4"
				},
				{
					title: "Assistant Digital Publicity Head at ACSES",
					company: "ACSES",
					company_url: "https://wceacses.club/",
					logo_path: "acses_logo.png",
					duration: "July 2018 - March 2019",
					location: "Sangli, Maharashtra",
					description:
					"ACSES (Association of Computer Science and Engineering Students) is Deparmental club of Walchand College of Engineering, Sangli and was established in 1995. It aims at grooming the students technically, professionally and Logically along with inculcating social values and principles of personal excellence in friendly environment. It is a platform of the students, by the students and for the students and strongly believes in growing Together.",
					color: "#D83B01"
				},
				{
					title: "Member at RED-X",
					company: "RED-X",
					company_url: "https://www.mitaoe.ac.in/club-redx.php",
					logo_path: "redx_logo.jpg",
					duration: "August 2018 - August 2019",
					location: "Sangli, Maharashtra",
					description:
						"To brings together Technical Experts, Innovators, Researching Institutions, Implementation Partners and Corporate-Partners that will allow us to solve the most pressing challenges within our communities. RED-X is an AI (artificial intelligence) Club initiated by MIT, USA Professor Dr. Ramesh Raskar in India.",
					color: "#000000"
				}
			]
		},
		{
			title: "Achievements",
			experiences: [
				{
					title: "Research Paper at ICCSP",
					company: "ICCSP",
					company_url: "https://www.iccsp-apec.com/",
					logo_path: "iccsp_logo.png",
					duration: "April 2019 - March 2020",
					location: "Sangli, Maharashtra",
					description:
						"ICCSP 2020 Research Paper on Parallel Programming.",
					color: "#4285F4"
				},
				{
					title: "SIH 2020",
					company: "SIH",
					company_url: "https://www.sih.gov.in/",
					logo_path: "sih_logo.png",
					duration: "July 2018 - March 2019",
					location: "Sangli, Maharashtra",
					description:
					"SIH 2020 Internal Hackathon Winner.",
					color: "#D83B01"
				},
				{
					title: "ACSES Website",
					company: "ACSES",
					company_url: "https://wceacses.club/",
					logo_path: "acses_logo.png",
					duration: "August 2018 - August 2019",
					location: "Sangli, Maharashtra",
					description:
						"Developed a Website for the ACSES Club also Website for a National Level Symposium TECHUMEN’19 conducted by the ACSES club.",
					color: "#000000"
				},
				{
					title: "Coursera Certification",
					company: "Coursera",
					company_url: "https://www.coursera.org/",
					logo_path: "coursera_logo.jpg",
					duration: "August 2018 - August 2019",
					location: "Sangli, Maharashtra",
					description:
						"Cleared the COURSERA Certification on Fundamentals of Parallelism on Intel Architecture.",
					color: "#3396FF"
				},
				{
					title: "Creed Website",
					company: "Coursera",
					company_url: "https://creed-44709.web.app/",
					logo_path: "creed_logo.jpg",
					duration: "August 2018 - August 2019",
					location: "Sangli, Maharashtra",
					description:
						"Won Cash price for Attendance Web app",
					color: "#000000"
				},
				{
					title: "C Project",
					company: "ACSES",
					company_url: "https://wceacses.club/",
					logo_path: "acses_logo.png",
					duration: "August 2018 - August 2019",
					location: "Sangli, Maharashtra",
					description:
						"Winner- C project Competition Genesis (Runner up)-2018",
					color: "#000000"
				},
				{
					title: "Hackerank",
					company: "Hackerrank",
					company_url: "https://www.hackerrank.com/",
					logo_path: "hackerrank_logo.png",
					duration: "August 2018 - August 2019",
					location: "Sangli, Maharashtra",
					description:
						"Hackerrank 6* Star Rating (Gold Badge)",
					color: "#000000"
				}
			]
		}
	]
};

class Experience extends Component {
	render() {
		return (
			<div className="experience-main">
				<Header />
				<div className="basic-experience">
					<Fade bottom duration={1000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								<img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
								    alt=""
								/>
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">{experience.title}</h1>
								<h3 className="experience-heading-sub-text">
									{experience["subtitle"]}
								</h3>
								<p className="experience-header-detail-text subTitle">
									{experience["description"]}
								</p>
							</div>
						</div>
					</Fade>
				</div>
				<ExperienceAccordion sections={experience["sections"]} />
				<Footer />
			</div>
		);
	}
}

export default Experience;
