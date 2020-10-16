export default [
    {
        id: 'entrance',
        title: 'Dungeon Entrance',
        map: {
            top: '70%',
            left: '30%'
        },
        image: '../assets/entrance.jpg',
        description: `
            You have descended down a deep stairwell in a forgotten ruins of a city, the air is dank with the smell
            of rot, mold and decay. In front of you is what looks like a ruined fountain made of stone. as you enter the room
            a sconce on the wall alights and you hear a deep crackling voice "WHOOO DARES ENTER MY DOMAIN?"
    `,
        choices: [{
            id: 'brave',
            description: 'bravery',
            result: `
            you bravely stand and yell to the unknown voice " I DO! I Shall vanquish you" 
        `,
            hp: 0,
            gold: 10
        }, {
            id: 'run',
            description: 'run!',
            result: `
            upon hearing the haunting voice you imediatley run for the passage behind you!, however you trip in your
            cowardice slamming the ancient door. You stand up and try to open the door however it has become jammed and will not open! 
        `,
            hp: -5,
            gold: 0
        }]
    },
    {
        id: 'room1',
        title: 'room1',
        map: {
            top: '50%',
            left: '45%'
        },
        image: '../assets/skeleton.jpg',
        description: `
        You walk further into the dungeon and in to next room. in front of you you see a shambling 
        skeleton holding a rusty sword.
    `,
        choices: [{
            id: 'run',
            description: 'RUN!!',
            result: `
            your cowardice knows no bounds you attempt to beat a hasty
            retreat back to the main entrance. the skeleton is too fast,
            it swings its sword at you and scores a devistating blow.  
        `,
            hp: -35,
            gold: 0
        }, {
            id: 'fight',
            description: 'Fiiiiiggghhhttt!',
            result: `
            "Die Evil Fiend" you yell as you raise your weapon and charge, you dispatch 
            this lowly mninion with ease!
        `,
            hp: -5,
            gold: 50
        }] 
    },
    {
        id: 'treasure',
        title: 'A Golden Treasure',
        map: {
            top: '50%',
            left: '73%'
        },
        image: '../assets/tresure.jpg',
        description: ' you walk into the room to see an ancient treasure chest!'
        ,
        choices: [{
            id: 'wooden',
            description: 'An Ancient Chest',
            result: 'You grab 100 gold pieces!',
            hp: 0,
            gold: 100
        }]
    },
    { 
        id: 'room2',
        title: 'room2',
        image: '../assets/rest.jpg',
        description: 'you walk into a room that looks like a barracks! its ancient but it looks safe, ',
        map: {
            top: '70%',
            left: '65%'
        },
        choices: [{
            id: 'rest',
            result: 'you regain your strength and feel revitalized',
            hp: 30,
            gold: 10
        },
        {
            id: 'search room',
            result: ' you find a potion of greater vitality hidden under a cot',
            hp: 100,
            gold: 100
        }
            
        ]

    },
   
    { 
        id: 'room5',
        title: 'room5',
        map: {
            top: '27%',
            left: '44%'
        },
        image: '../assets/lich.jpg',
        description: 'as you walk into the room your hackles rise as a sense of dread and danger overwhelms you ahead in the center of the room floating a foot off the ground is a litch it screams at you and attacks',
        choices: [
            {
                id: 'attack',
                description: 'you leap into mortal combat with the lich and vanquish it',
                hp: -20,
                gold: 4000,
            },
            {
                id: 'run',
                description: 'you attempt to flee, however the litch casts a spell at you and traps your soul',
                hp: -10000,
                gold: -10000
                
            }
        ]

    }

];