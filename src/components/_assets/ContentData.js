//possible work atts: 
/*{
    id:
    title:
    picture
    githubLink:
    demoLink:
    deviantLink:
    info1:
    info2:
    info3:
}*/

const Data = [
    {
        id : 1,
        type : "Code",
        icon : "｛｝",
        info : "Code related projects",
        view : false,
        work : [
            {
                id : 1,
                title : "Crowfund DAO",
                picture : "crowfund.png", 
                githubLink : "https://github.com/wannesds/crowfund",
                demoLink : "https://github.com/wannesds/crowfund",
                info1 : "Basic DAO launcher for crowdfunding projects. Has its own   compile and deploy scripts.",
                info2 : "Made during a course to learn Eth/Solidity. Build with NextJS, Web3js, Infura API and Material-ui."
            },
            {
                id : 2,
                title : "Verifiable Credentials",
                picture : "vc-solid-eth.png",
                githubLink : "https://github.com/wannesds/facerecognition",
                blogLink : "https://www.konsolidate.eu/stories/vc-solid-blockchain",
                info1 : "Did an internship on a POC system for verifiable credentials using Solid data-pods and Blockchain technology.",
                info2 : "Consists of 3 apps for Issuers, Users and Validators. Also wrote an article about the project."
            },
            {
                id : 3,
                title : "Rick and Morty Index",
                picture : "rick-and-morty.png",
                githubLink : "https://github.com/wannesds/rick-and-morty",
                demoLink : "https://wannesds.github.io/rick-and-morty/",
                info1 : "A Rick and Morty (cartoon series) index site with all characters and some information about them. A random quote appears on every page refresh.",
                info2 : "Made as exercise to learn ReactJS and API usage."
            },
            {
                id : 4,
                title : "Face Recognition",
                picture : "face-recognition.png",
                githubLink : "https://github.com/wannesds/facerecognition",
                demoLink : "https://wannesds.github.io/facerecognition/",
                info1 : "A Face Recognition app with user login and ranking. ",
                info2 : "Made as exercise to learn back-end."
            }
        ]
    },
    {
        id : 2,
        type : "Design",
        icon : "〈〉",
        info : "Design related examples",
        view : true,
        work : [
            {
                id : 1,
                title : "Brain",
                picture : "brain.jpg",
                info1 : "Cover design for a student her final year paper in Neuroscience.",
            },
            {
                id : 2,
                title : "Improvisation Art",
                picture : "art1.jpg",
                info1 : "Example of my improvisation art style.",
                info2 : "Drawn with ink stift directly on A3."
            }
        ]
    }
]


export default Data;

