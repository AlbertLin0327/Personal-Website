// Navigation Bar SECTION
const navBar = {
    show: true,
};

// Main Body SECTION
const mainBody = {
    gradientColors: "#4484ce, #a7cc7b, #E0BB78, #9b59b6, #CC95CC, #ecf0f1",
    firstName: "Albert",
    middleName: "Hsin-Kai",
    lastName: "Lin",
    message: " Enthusiastic Undergraduate who strive for greatness. ",
    icons: [
        {
            image: "fa-github",
            url: "https://github.com/AlbertLin0327",
        },
        {
            image: "fa-facebook",
            url: "https://www.facebook.com/hsinkai.lin.327",
        },
        {
            image: "fa-instagram",
            url: "https://www.instagram.com/hsinkai_lin/",
        },
        {
            image: "fa-linkedin",
            url: "https://www.linkedin.com/in/albert-hk-lin/",
        },
    ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
    show: true,
    heading: "About Me",
    imageLink: require("../editable-stuff/Albert_Lin.jpg"),
    imageSize: 375,
    message:
        "Hello, I am Albert Lin and I am currently studying National Taiwan Univesity. I major in Computer Science, double major in Finance and minor in Mathematics. I also participate in Creativity and Entrepreneurship Program. Last but not the least, I am a member of Computational Learning Lab directed by professor Hsuan-Tein Lin.",
    resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "AlbertLin0327", //i.e."johnDoe12Gh"
    reposLength: 0,
    specificRepos: [
        "QEF-Backtesting-System",
        "Least-Square-Monte-Carlo",
        "ItC_Python_Crawler",
        "Black-Scholes-Option",
        "Personal-Website",
    ],
};

// Leadership SECTION
const leadership = {
    show: false,
    // heading: "Leadership",
    // message:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
    // images: [
    //     {
    //         img: require("../editable-stuff/Albert_Lin.jpg"),
    //         label: "First slide label",
    //         paragraph:
    //             "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    //     },
    //     {
    //         img: require("../editable-stuff/Albert_Lin.jpg"),
    //         label: "Second slide label",
    //         paragraph:
    //             "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    //     },
    // ],
    // imageSize: {
    //     width: "615",
    //     height: "450",
    // },
};

// SKILLS SECTION
const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
        { name: "C/C++", value: 85 },
        { name: "Data Structures", value: 82 },
        { name: "Python", value: 80 },
        { name: "Pytorch", value: 72 },
        { name: "Algorithm", value: 72 },
        { name: "JavaScript", value: 65 },
        { name: "React", value: 63 },
        { name: "HTML/CSS", value: 60 },
    ],
    softSkills: [
        { name: "Creativity", value: 90 },
        { name: "Goal-Oriented", value: 88 },
        { name: "Adaptability", value: 87 },
        { name: "Problem Solving", value: 85 },
        { name: "Motivation", value: 80 },
        { name: "Critical Thinking", value: 80 },
        { name: "Empathy", value: 75 },
        { name: "Organization", value: 70 },
    ],
};

// GET IN TOUCH SECTION
const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message:
        "Please contact me with the provided email address if you have any questions about me",
    email: "linhsinkai@gmail.com",
};

const experiences = {
    show: false,
    heading: "Experiences",
    data: [
        {
            role: "Director/ Officer of Academics and Curation", // Here Add Company Name
            companylogo: require("../assets/img/GIS.jpeg"),
            date: "June 2019 – Present",
        },
    ],
};

// Blog SECTION
const blog = {
    show: false,
};

export {
    navBar,
    mainBody,
    about,
    repos,
    skills,
    blog,
    leadership,
    getInTouch,
    experiences,
};
