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
        id: 'dragon',
        title: 'room1',
        map: {
            top: '50%',
            left: '45%'
        },
        image: 'dragon.jpg',
        audio: 'dragon.wav',
        action: 'dragon-growl.aiff',
        description: `
        You travel to a nearby village you have heard is being
        terrorized by a dragon. Sure enough as you rent a room
        in a local inn, you go outside and see the dragon about
        to lay seige! What do you do?
    `,
        choices: [{
            id: 'run',
            description: 'Get the hell out of the village',
            result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
            hp: -35,
            gold: 35
        }, {
            id: 'fight',
            description: 'Fiiiiiggghhhttt!',
            result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
            hp: -45,
            gold: 0
        }, {
            id: 'archer',
            description: 'Emulate that guy from LOR who shot an arrow',
            result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
            hp: 0,
            gold: 90
        }]
    },
    {
        id: 'treasure',
        title: 'A Golden Treasure',
        map: {
            top: '50%',
            left: '73%'
        },
        prerequisites: ['dragon', 'monsters'],
        image: 'treasure-chests.png',
        audio: 'treasure-chests.wav',
        action: 'chest-opening.wav',
        description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
        choices: [{
            id: 'wooden',
            description: 'A Wooden Chest',
            result: 'You grab 40 gold pieces!',
            hp: 0,
            gold: 40
        }, {
            id: 'golden',
            description: 'A Golden Chest',
            result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
            hp: -50,
            gold: 0
        }, {
            id: 'jeweled',
            description: 'A Jeweled Chest',
            result: 'A warm light engulfs you and you gain 35 hp',
            hp: 35,
            gold: 0
        }]
    },
    { 
        id: 'room3',
        title: 'room3',
        map: {
            top: '70%',
            left: '65%'
        },

    },
    { 
        id: 'room4',
        title: 'room4',
        map: {
            top: '60%',
            left: '55%'
        },

    },
    { 
        id: 'room5',
        title: 'room5',
        map: {
            top: '27%',
            left: '44%'
        },

    }

];