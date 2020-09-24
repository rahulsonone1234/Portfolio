import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
// import experience from '../../shared/experience_data.json';
import "./other.css";
import { Fade } from "react-reveal";
import Button from '../../components/button/Button';

const experience = {
	title: "Extra-Curricular",
	subtitle: "“Happiness is a state of activity.😂”",
	description:
		"I have worked with many clubs in my college as ACSES, PACE, ACM , RED-X and always had been a part of Technical and Non-Technical events conducted by them such as Workshops and various Social Campaigns and Always tried to share my knowledge.",
	header_image_path: "extra_logo.gif",
	sections: [
		{
			title: "Extracirricular",
			experiences: [
				{
					title: "C-workshop",
					company: "ACSES",
					company_url: "https://wceacses.club/",
					logo_path: "acses_logo.png",
					duration: "April 2019 - March 2020",
					location: "Sangli, Maharashtra",
					description:
						"Delivered a 2-day C-WORKSHOP to 100 Students.",
					color: "#4285F4"
				},
				{
					title: "Ruby on Rails-workshop",
					company: "ACSES",
					company_url: "https://wceacses.club/",
					logo_path: "acses_logo.png",
					duration: "April 2019 - March 2020",
					location: "Sangli, Maharashtra",
					description:
						"Delivered a Workshop on Ruby on Rails in TECHUMEN’19 to 100 Students",
					color: "#4285F4"
				},
				{
					title: "SITAC Volunteered",
					company: "ACSES",
					company_url: "https://wceacses.club/",
					logo_path: "acses_logo.png",
					duration: "April 2019 - March 2020",
					location: "Sangli, Maharashtra",
					description:
						"An active member of Social Information Technology Awareness Campaign (SITAC)",
					color: "#4285F4"
				},
				{
					title: "PACE CSR Volunteered",
					company: "PACE",
					company_url: "https://wcepace.org/",
					logo_path: "pace_logo.png",
					duration: "April 2019 - March 2020",
					location: "Sangli, Maharashtra",
					description:
						"Volunteered in PACE Corporate Social Responsibility event -2017",
					color: "#4285F4"
				}
			]
		}
		
	]
};

const experience1 = {
	title: "Strengths",
	subtitle: "“That which does not kill us makes us stronger.”",
	description:
		"I can be too critical of myself. A pattern I’ve noticed throughout my career is that I often feel I could have done more even if, objectively, I’ve done well. Earlier in my career, this led to burnout and negative self-talk. One solution I’ve implemented over the last three years is to actively pause and celebrate my achievements. Not only has this helped my own self-esteem, it has helped me genuinely appreciate and recognise my team and other support systems.",
	header_image_path: "patie_logo.gif",
	sections: [
		{
			title: "Strengths",
			experiences: [
				{
					title: "Patience",
					company: "It makes me happy",
					company_url: "https://wceacses.club/",
					logo_path: "patience_logo.png",
					duration: "",
					location: "",
					description:
						"“Patience is Bitter, but its Fruit is Sweet.”",
					color: "#4285F4"
				},
				{
					title: "Keen Observer",
					company: "Observe the things so that I can remind",
					company_url: "https://wceacses.club/",
					logo_path: "observer_logo.png",
					duration: "",
					location: "",
					description:
						"“Sometimes it is the quiet observer who sees the most.”",
					color: "#4285F4"
				},
				{
					title: "Quick Learner",
					company: "I likely to be",
					company_url: "https://wceacses.club/",
					logo_path: "quicklearner_logo.png",
					duration: "",
					location: "",
					description:
						"“Do what you can, with what you have, where you are.”",
					color: "#4285F4"
				},
				{
					title: "Cool-Headed",
					company: "Helps me a Lot",
					company_url: "https://wceacses.club/",
					logo_path: "coolhead_logo.png",
					duration: "",
					location: "",
					description:
						"“Nothing gives one person so much advantage over another as to remain always cool and unruffled under all circumstances.”",
					color: "#4285F4"
				}
			]
		}
		
	]
};

const experience2 = {
	title: "Interests",
	subtitle: "“Do What You Love”",
	description:
		"I always try to do the things which I Love and I feel Joy in them.Many of the time it happens that you are made to do the things which you don't like so, in that case, I take the things in a positive way and relate it to the things I love.",
	header_image_path: "inter_logo.gif",
	link: "https://portfoliogallery.web.app/",
	sections: [
		{
			title: "Interests😂",
			experiences: [
				{
					title: "Photography",
					company: "45th Love",
					company_url: "https://portfoliogallery.web.app/",
					logo_path: "photography_logo.jpg",
					duration: "",
					location: "",
					description:
						"It Gives me Love and Immense Pleasure to capture the moments which i love. I love to take the Photographs of the nature and Some candid photos of some Dhakkan Friends.",
					color: "#4285F4"
				},
				{
					title: "Video Games,Playstation, Watching WWE",
					company: "Being Indoor",
					company_url: "https://www.wwe.com/",
					logo_path: "wwe_logo.jpg",
					duration: "",
					location: "",
					description:
					"I enjoy Watching WWE, Love Playing Video games the best one contra and WCW and had a great Attraction towards PS games to whom I am Addicted the most.",
					color: "#D83B01"
				},
				{
					title: "Football",
					company: "Die-Hard Messi Fan",
					company_url: "https://www.fcbarcelona.com/en/",
					logo_path: "football_logo.jpg",
					duration: "",
					location: "",
					description:
						"I Like Playing and Watching Football Which makes me feel like Messi the Devastating.",
					color: "#000000"
				},
				{
					title: "Shayari",
					company: "The Latest One",
					company_url: "https://www.amarujala.com/kavya/kavya-charcha/top-sher-of-mirza-ghalib",
					logo_path: "shayari_logo.jpg",
					duration: "",
					location: "",
					description:
						"Some times Few Moments in life Made me do this things which created the Passion of Reading and Writing a shayari of Mohammed Ghalib.",
					color: "#000000"
				},
				{
					title: "Gardening",
					company: "One Of the things I learnt From Mom",
					company_url: "https://www.countryliving.com/gardening/",
					logo_path: "gardening_logo.jpg",
					duration: "",
					location: "",
					description:
						"Love to plant the water and Play with mud and disturb my mom when she is Engrossed in Gardening.",
					color: "#000000"
				},
				{
					title: "Reading Autobiographies(secrets)",
					company: "Coffee Compulsory",
					company_url: "https://www.bookrix.com/books%3Bbiography-autobiography,id:5.html",
					logo_path: "read_logo.jpg",
					duration: "",
					location: "",
					description:
						"Love to Read the book of the people who had a great Imapct on the People.(#HITLER MEIN KAMPF)",
					color: "#000000"
				},
				{
					title: " Collecting Rare Coins",
					company: "Just Love it",
					company_url: "https://www.rarecoins.com/",
					logo_path: "rare_logo.jpg",
					duration: "",
					location: "",
					description:
						"First and the Rare Interest.",
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



				<div className="basic-experience">
					<Fade bottom duration={1000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								<img
									src={require(`../../assests/images/${experience1["header_image_path"]}`)}
								    alt=""
								/>
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">{experience1.title}</h1>
								<h3 className="experience-heading-sub-text">
									{experience1["subtitle"]}
								</h3>
								<p className="experience-header-detail-text subTitle">
									{experience1["description"]}
								</p>
							</div>
						</div>
					</Fade>
				</div>
				<ExperienceAccordion sections={experience1["sections"]} />

				<div className="basic-experience">
					<Fade bottom duration={1000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								<img
									src={require(`../../assests/images/${experience2["header_image_path"]}`)}
								    alt=""
								/>
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">{experience2.title}</h1>
								<h3 className="experience-heading-sub-text">
									{experience2["subtitle"]}
								</h3>
								<p className="experience-header-detail-text subTitle">
									{experience2["description"]}
								</p>
								<div className="blogsite-btn-div">
											<Button
												text="Visit My Photography Site 😎"
												newTab={true}
												href={experience2.link}/>
										</div>
							</div>
							
						</div>
						
					</Fade>
				</div>
				<ExperienceAccordion sections={experience2["sections"]} />


				<Footer />
			</div>
		);
	}
}

export default Experience;
