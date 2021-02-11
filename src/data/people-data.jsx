// Martin
import Martin from '../images/people-images/Dad-1.png';
import BluJay from '../images/company-logos/BluJay.jpg';
import ByBox from '../images/company-logos/ByBox.jpeg';
import Dematic from '../images/company-logos/Dematic.png';
import LSRetail from '../images/company-logos/LSRetail.png';

// Alfie
import Alfie from '../images/people-images/alfie_hiscox.jpeg';
import Wagon from '../images/people-company-images/Alfie/le-wagon.jpeg';
import HV from '../images/thumbnail.png';
import UOL from '../images/people-company-images/Alfie/uol.png';

// Heather
import Heather from '../images/people-images/heather_hiscox.jpg';
import Xerox from '../images/people-company-images/Heather/xerox.svg';

// Edward
import Edward from '../images/people-images/edward_hiscox.jpeg';
import TMC from '../images/people-company-images/Edward/TMC.jpeg';
import Passion from '../images/people-company-images/Edward/passion.png';
import Envy from '../images/people-company-images/Edward/envy.png';

// Toby
import Toby from '../images/people-images/toby_hiscox.jpg';
import ActionChallenge from '../images/people-company-images/Toby/action-challenge.jpeg';
import Perkbox from '../images/people-company-images/Toby/perkbox.png';
import TomJames from '../images/people-company-images/Toby/tom_james.png';
import WeWork from '../images/people-company-images/Toby/we-work.jpeg';

// Aaron
import Aaron from '../images/people-images/aaron_hiscox.jpeg';
import TwoK from '../images/people-company-images/Aaron/2K.jpeg';
import Google from '../images/people-company-images/Aaron/google.png';
import PocketGames from '../images/people-company-images/Aaron/pocketGames.jpeg';
import Stanford from '../images/people-company-images/Aaron/stanford.png';

const peopleData = {
  martinHiscox: {
    image: Martin,
    name: "Martin Hiscox",
    title: "CEO and Chairman",
    profileContent1: `The founder of Hiscox Ventures, Martin Hiscox is an experienced Chairman,
                      CEO and Non Executive Director with 25+ years of Private Equity funded 
                      IT start-ups, acquisitions, mergers and disposals.`,
    profileContent2: `Having managed high growth start-ups at one of his career with 
                      3i age 27 to being President of mature a $600m+ global IT business 
                      like RedPrairie at the other. He has good TMT experience and knowledge;
                      an MBA from Brunel and Henley Management College, 
                      a Higher Certificate in Computer Science and is a Chartered IT BCS Engineer.`,
    companyInfo: [
        {
          image: BluJay,
          name: "BluJay",
          description: `Proin quis massa vitae tortor porttitor bibendum eget 
              quis diam. Sed auctor eros nec quam pulvinar, non vehicula 
              eros blandit.`
          }, 
        {
          image: ByBox,
          name: "ByBox",
          description: `Proin quis massa vitae tortor porttitor bibendum eget 
              quis diam. Sed auctor eros nec quam pulvinar, non vehicula 
              eros blandit.`
        }, 
        {
          image: Dematic,
          name: "Dematic",
          description: `Proin quis massa vitae tortor porttitor bibendum eget 
              quis diam. Sed auctor eros nec quam pulvinar, non vehicula 
              eros blandit.`
        }, 
        {
          image: LSRetail,
          name: "LSRetail",
          description: `Proin quis massa vitae tortor porttitor bibendum eget 
              quis diam. Sed auctor eros nec quam pulvinar, non vehicula 
              eros blandit.`
        }
      ],
    historyInfo: [
      {
        image: BluJay,
        name: "Some Company 1 (1/2/20 - 13/02/30)",
        description: `Proin quis massa vitae tortor porttitor bibendum eget 
            quis diam. Sed auctor eros nec quam pulvinar, non vehicula 
            eros blandit.`
      }, 
      {
        image: ByBox,
        name: "Some Company 2 (1/2/20 - 13/02/30)",
        description: `Proin quis massa vitae tortor porttitor bibendum eget 
            quis diam. Sed auctor eros nec quam pulvinar, non vehicula 
            eros blandit.`
      }, 
      {
        image: Dematic,
        name: "Some Company 3 (1/2/20 - 13/02/30)",
        description: `Proin quis massa vitae tortor porttitor bibendum eget 
            quis diam. Sed auctor eros nec quam pulvinar, non vehicula 
            eros blandit.`
      }, 
      {
        image: LSRetail,
        name: "Some Company 4 (1/2/20 - 13/02/30)",
        description: `Proin quis massa vitae tortor porttitor bibendum eget 
            quis diam. Sed auctor eros nec quam pulvinar, non vehicula 
            eros blandit.`
      }
      ]
    },
    heatherHiscox: {
      image: Heather,
      name: "Heather Hiscox",
      title: "Company Secretary",
      profileContent1: `Heather is our Company Secretary and is based in our Sonning office.
                        With a career at Rank Xerox she is well qualified to run the business 
                        on a day to day basis.`,
      profileContent2: `As well as being great at PR and a 
                        renowned speach writer Heather runs 
                        Hiscox Venture on a day to day basis. Ensuring our team executes 
                        like clockwork and is as effective as possible`,
      companyInfo: [
        {
          image: HV,
          name: "Hiscox Ventures",
          description: `Heather is the company secretary of Hiscox Ventures`
        }
      ],
    historyInfo: [
      {
        image: Xerox,
        name: "Rank Xerox",
        description: "Heather previously worked in ... at Rank Xerox for ... years",
      }
    ]
  },
    alfieHiscox: {
      image: Alfie,
      name: "Alfie Hiscox",
      title: "Information System Consultant",
      profileContent1: `Alfie is resident consultant for informational system design at Hiscox Ventures.
                        He specialises in systems architecture, full-stack web enginnering and UI/UX design.`,
      profileContent2: `Alfie was trained in modern web technologies, and holds a first degree from the
                        University of Leeds.`,
      companyInfo: [
        {
          image: Wagon,
          name: "Le Wagon",
          description: `Alfie is a part time teaching-assistant at Le Wagon UK, where he teaches new coders the
                        basics of web-development and design.`
          }, 
        {
          image: HV,
          name: "Hiscox Ventures",
          description: `Alfie is an ongoing consultant for Hiscox Ventures for all things web-development.`
        },
      ],
    historyInfo: [
      {
        image: UOL,
        name: "University of Leeds",
        description: `Alfie was a student at the University of Leeds studying English Literature and Film Studies.
                      He achieved a first-class bachelor of arts in 2020.`
      }
    ]
  },
    tobyHiscox: {
      image: Toby,
      name: "Toby Hiscox",
      title: "Director",
      profileContent1: `Toby has been a director at Hiscox Ventures since the beginning.`,
      profileContent2: `He has lent his expertise toward the company's ventures in real estate and sales. He is a keen
                        sportsman and holds a honours degree in Sports Science from Aberystwyth University.`,
      companyInfo: [
        {
          image: WeWork,
          name: "WeWork",
          description: `Toby is an Associate Director of Portfolio Sales at WeWork where he specialises in real estate sales.`
        }
      ],
    historyInfo: [
      {
        image: Perkbox,
        name: "Perkbox",
        description: `Toby was an Enterprise Development Representative at Perkbox UK. Perkbox is a UK based company
                      that enhances employee experiences through a number of tools and channels.`
      },
      {
        image: ActionChallenge,
        name: "Action Challenge",
        description: `Toby was a Client Relationship Manager at Action Challenge, a company that organises 
                      inspirational challenge events & unforgettable adventures in the UK & Worldwide.`
      },
      {
        image: TomJames,
        name: "Tom James",
        description: `Toby was a graduate sales intern at Tom James, a London based-company that is the 
                      world’s largest manufacturer and retailer of custom clothing.`
      }
    ]
  },
    aaronHiscox: {
      image: Aaron,
      name: "Aaron Hiscox",
      title: "Director",
      profileContent1: `Educated at St Andrews and with a Masters in English Literature Aaron is based in California working,
                        at Google Play as a Business Development Manager.`,
      profileContent2: ``,
      companyInfo: [
        {
          image: Google,
          name: "Google",
          description: `Aaron is a Business Development Manager at Google Play in Mountain View, California.`
        }
      ],
      historyInfo: [
        {
          image: PocketGames,
          name: "Pocket Gems",
          description: `Pocket Games is California based games company that seeks to build the 
                        greatest games and most compelling interactive entertainment in the world.
                        Aaron was previous an Acounts Manager at Pocket Games.`
        },
        {
          image: TwoK,
          name: "2K",
          description: `2K is a game developer in San Franscico that includes some of the 
                        most talented game development studios in the world today.`
        },
        {
          image: Stanford,
          name: "Stanford University",
          description: "Aaron worked as a Marketing Project Coordinator at Stanford University in 2014."
        }
      ],
  },
    edwardHiscox: {
      image: Edward,
      name: "Edward Hiscox",
      title: "Director",
      profileContent1: `Edward is our media expert at HV. He consults on our marketing and design challenges.`,
      profileContent2: `As a qualified and experienced Director of Photography and Cinematographer, Edward is 
                        our first port of call when it comes to design and media.`,
      companyInfo: [
        {
          image: TMC,
          name: 'The Midnight Clud',
          description: `Edward is a Cinematographer and Photography for The Midnight Club, a marketing and advertising
                        compnay based in London.`
        }
      ],
    historyInfo: [
      {
        image: Envy,
        name: "Envy Post Production",
        description: `Envy is an Award winning Post Production House providing 
                      full Post for Broadcast & Advertising from offline to VFX 
                      and Dolby Atmos.`
      }, 
      {
        image: Passion,
        name: "Passion Pictures",
        description: `Passion Pictures is an independent production company that seeks to connect and inspire
                      through the moving image.
                      Edward was a lighting technician in 2016.`
      }
    ],
  },
};


export default peopleData;