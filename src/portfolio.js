/* Change this file to get your personal Porfolio */

const theme = {
  //primaryTheme: "#6C63FF",
  //secondaryTheme: "#55198b",
  primaryTheme: "#056782",
  secondaryTheme: "#00baed",
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
};

const greeting = {
	/* Your Summary And Greeting Section */
	//title: "Hi all 👋 I'm Saad",
	title: "Rahul Sonone",
	nickname: "LEARNER",
	// subTitle:
	//   "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks",
	subTitle:
		"A messianic individual loves to solve the problems by Developing Sustainable, Scalable, Social, and Technical Applications to engender Influence and relishes to avail the people by sharing my knowledge to the best of my reach.",
	resumeLink:
		"https://drive.google.com/file/d/1NeYcn-K7PlFJdzwY1dHa56NNXs7J-2lB/view?usp=sharing"
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/rahulsonone1234",
	linkedin: "https://www.linkedin.com/in/rahul-sonone/",
	gmail: "rahulsonone1234@gmail.com",
	gitlab: "",
	facebook: "https://www.facebook.com/rahul.sonone.7505/",
	twitter: "https://twitter.com/RahulSo75888532",
	instagram: "https://www.instagram.com/rahulsonone1234/"
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      imagePath: "fullstack1.svg",
      skills: [
        " 👨🏻‍💻Building Responsive Websites Front-End using React-Redux",
        " 👨🏻‍💻Developing Mobile Applications using Flutter, React Native and Android Apps using Kotlin",
        " 👨🏻‍💻Creating Application Backend in Node, Express & Flask"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837"
          }
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#F7DF1E"
          }
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399"
          }
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B"
          }
        }
      ]
    },
    
    {
      title: "Programming Skills ",
      imagePath: "programmer.svg",
      skills: [
        "⚡ Writing an Optimized Code for the Problems",
        "⚡ Writing a Simpler Codes",
        "⚡ Making Code Efficient and Modular"
      ],
      softwareSkills: [
        {
          skillName: "C Programming",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "Cplusplus",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#CC6699"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#61DAFB"
          }
        }
      ]
    },
    
    {
      title: "Cloud Infra-Architecture",
      imagePath: "cloud_infrastructure.svg",
      skills: [
        "⚡ Experience working on multiple Cloud Platforms",
        "⚡ Hosting and Maintaining Websites on virtual machine instances along with integration of databases",
        "⚡ Deploying Deep-learning models on Cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS"
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4"
          }
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900"
          }
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6"
          }
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28"
          }
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791"
          }
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248"
          }
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6"
          }
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5"
          }
        }
      ]
    },
    {
      title: "Data Science & AI",
      imagePath: "data_science.svg",
      skills: [
        " 👨🏻‍💻  Developing highly scalable production ready models for various Deep-Learning and Statistical use cases",
        " 👨🏻‍💻  Experience of working with Computer Vision and NLP projects",
        " 👨🏻‍💻  Complex Quantitative modelling for Dynamic Forecasting and time series Analysis"
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        }
      ]
    },
    {
      title: "UI/UX Design",
      imagePath: "ui_ux_design.gif",
      skills: [
        "⚡ Designing Highly Attractive user interface for mobile and Web Applications",
        "⚡ Customizing Logo designs and Building logos from scratch",
        "⚡ Creating the flow of Application functionalities to optimize user experience"
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2"
          }
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E"
          }
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00"
          }
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000"
          }
        }
      ]
    }
  ]
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866"
      },
      profileLink: "https://www.hackerrank.com/rahulsonone1234"
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638"
      },
      profileLink: "https://www.codechef.com/users/rahulsonone"
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB"
      },
      profileLink: "https://codeforces.com/profile/be_rude"
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754"
      },
      profileLink: "https://www.hackerearth.com/@rahulsonone1234"
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF"
      },
      profileLink: "https://www.kaggle.com/rahulsonone"
    }
  ]
}

const degrees = {
  degrees : [
    {
      title: "Walchand College of Engineering, Sangli",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "wce_logo.png",
      alt_name: "WCE Sangli",
      duration: "2017 - Present",
      descriptions: [
        "⚡ I have studied basic Software Engineering subjects like DS, Algorithms, DBMS, OS, CA etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I have Completed various Projects along with Good Performance in Academics."
      ],
      website_link: "http://www.walchandsangli.ac.in/"
    },
    {
      title: "Narayana Junior College, Hyderabad",
      subtitle: "Intermediate 10+2",
      logo_path: "narayana_logo.jpg",
      alt_name: "Narayan Hyderabad",
      duration: "2015 - 2017",
      descriptions: [
        "⚡ I have Completed my 10+2 with 9.45 CGPA.",
        "⚡ Apart from this, I have cleared JEE Mains and JEE Advanced with good marks.",
        "⚡ Our College Team had won the Inter-College Football match."
      ],
      website_link: "https://www.narayanagroup.com/"
    },
    {
      title: "ST. Aloysius English Medium High School, Yavatmal",
      subtitle: "10 th Grade",
      logo_path: "school_logo.jpg",
      alt_name: "WCE Sangli",
      duration: "2014-2015",
      descriptions: [
        "⚡ I have studied all the General and Basic Subjects.",
        "⚡ I have Completed my 10th Board Education with 87%.",
        "⚡ My Science Model has won the First-Prize in State-level Science Exhibition."
      ],
      website_link: "https://www.facebook.com/pages/category/Community/St-Aloysius-High-School-Yavatmal-137762889607236/"
    }
  ]
}

const certifications = {
	certifications: [
		{
			title: "Machine Learning",
			subtitle: "- Andrew Ng",
			logo_path: "stanford_logo.png",
			certificate_link:
				"",
			alt_name: "Stanford University",
			color_code: "#8C151599"
		},
		{
      title: "Parallel Programming",
			subtitle: "- Andrey Vladimirov",
			logo_path: "intel_logo.jpg",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/records/3JYU6PAXY6A4",
			alt_name: "COURSERA",
			color_code: "#000000"
		
		},
		{
      title: "Digital Marketing",
			subtitle: "- Digital Marketing ",
			logo_path: "google_logo.png",
			certificate_link:
				"https://drive.google.com/file/d/1VJeVTgjuNOtOWTe2xa0c8u0yKwWPKhbI/view?usp=sharing",
			alt_name: "Coursera",
			color_code: "#2A73CC"
		
		},
		{
			title: "Data Science",
			subtitle: "- Alex Aklson",
			logo_path: "ibm_logo.png",
			certificate_link:
				"",
			alt_name: "IBM",
			color_code: "#1F70C199"
		},
		{
			title: "Advanced ML on GCP",
			subtitle: "- GCP Training",
			logo_path: "google_logo.png",
			certificate_link:
				"",
			alt_name: "Google",
			color_code: "#0C9D5899"
		},
		{
			title: "DL on Tensorflow",
			subtitle: "- Laurence Moroney",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"",
			alt_name: "deeplearning.ai",
			color_code: "#00000099"
		},
		{
			title: "ML on GCP",
			subtitle: "- GCP Training",
			logo_path: "google_logo.png",
			certificate_link:
				"",
			alt_name: "Google",
			color_code: "#0C9D5899"
		},
		{
      title: "Deep Learning",
			subtitle: "- Andrew Ng",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"",
			alt_name: "deeplearning.ai",
			color_code: "#00000099"
		},
		{
			title: "Cloud Architecture",
			subtitle: "- Qwiklabs",
			logo_path: "gcp_logo.png",
			certificate_link:
				"",
			alt_name: "GCP",
			color_code: "#4285F499"
		}
	]
};


const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */

  githubConvertedToken: "d2da1abd9d4402dd3e5248f3ed4e679f21118e4b",
  githubUserName: "rahulsonone1234"
};

const bigProjects = {
  /* Some Big Projects You have worked with your company */
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/"
    },
    {
      image: "http://nextu.se/wp-content/themes/nextu/images/og_img.jpg",
      link: "http://nextu.se/"
    }
  ]
};

const achievementSection = {
  /* Your Achievement Section Include Your Certification Talks and More */

  title: "Achievements And Certifications 🏆 ",
  subtitle:
    "Achievements, Certifications Award Letters and Some Cool Stuff that i have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      description:
        "First Pakistani to be selected as Google Google-in Finalist from 4000 students from 77 diffrent countries",
      image:
        "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      description:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      description:
        "Completed Certifcation from SMIT for PWA Web App Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ]
};

const blogSection = {
  /* Blogs Section */

  title: "Blogs",
  subtitle:
    "With love for individual fundamental empowerment, I like to write powerful lessons that create impact on Reader Individually to change the core of their Character.",
  link: "",
  avatar_image_path: "blogs_image.svg"

  
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section
const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ]
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "+91-7083106482",
  email_address: "rahulsonone1234@gmail.com"
};

export {
	theme,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
  contactInfo
};
