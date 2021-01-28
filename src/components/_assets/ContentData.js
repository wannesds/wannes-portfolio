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
                title : "Rick and Morty Index",
                picture : "rick-and-morty.png",
                githubLink : "https://github.com/wannesds/rick-and-morty",
                demoLink : "https://wannesds.github.io/rick-and-morty/",
                info1 : "A Rick and Morty (cartoon series) index site with all characters and some information about them. A random quote appears on every page refresh.",
                info2 : "Made as exercise to learn ReactJS and API usage."
            },
            {
                id : 2,
                title : "Face Recognition",
                picture : "face-recognition.png",
                githubLink : "https://github.com/wannesds/facerecognition",
                demoLink : "https://wannesds.github.io/facerecognition/",
                info1 : "A Face Recognition app with user login and ranking. ",
                info2 : "Made as exercise to learn back-end."
            },
            {
                id : 3,
                title : "Rick and Morty Index",
                picture : "rick-and-morty.png",
                githubLink : "https://github.com/wannesds/rick-and-morty",
                demoLink : "https://wannesds.github.io/rick-and-morty/",
                info1 : "A Rick and Morty (cartoon series) index site with all characters and some information about them. A random quote appears on every page refresh.",
                info2 : "A Rick and Morty (cartoon series) index site with all characters and some information about them. A random quote appears on every page refresh.",
            },
            {
                id : 4,
                title : "Rick and Morty Index",
                picture : "",
                githubLink : "https://github.com/wannesds/rick-and-morty",
                demoLink : "https://wannesds.github.io/rick-and-morty/",
                info1 : "A Rick and Morty (cartoon series) index site with all characters and some information about them. A random quote appears on every page refresh.",
                info2 : ""
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
                title : "Design test example 1",
                picture1 : "rick-and-morty.png",
                githubLink : "githublinktest",
                demoLink : "demo site link",
                info1 : "Info text 1",
                info2 : "info text 2"
            },
            {
                id : 2,
                title : "WDS Logo",
                picture : "rick-and-morty.png",
                info1 : "Info text 1.2",
            }
        ]
    },
    {
        id : 3,
        type : "Art",
        icon : "〔〕",
        info : "Art related work",
        view : true,
        work : [
            {
                id : 1,
                title : "Art test example 1",
                deviantLink : "google.com",
                info1 : "Info text 1",
            },
            {
                id : 2,
                title : "Art test example 2",
                deviantLink : "google.com",
                info1 : "Info text 1.2",
            }
        ]
    }
]


export default Data;

