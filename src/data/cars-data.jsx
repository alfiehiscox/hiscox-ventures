// Image imports
// Interceptor:
import Interceptor from '../images/car-images/interceptor.jpg';
import Interceptor1 from '../images/car-images/interceptor1.jpg';
import Interceptor2 from '../images/car-images/interceptor2.jpg';
import Interceptor3 from '../images/car-images/interceptor3.jpg';
import InterceptorHistory from '../images/car-images/intercepter-history.jpeg';
import HarryFerg from '../images/car-images/harryFerguson.jpg';
import JensenMotors from '../images/car-images/jensen_motors.jpg';
import SaintJensen from '../images/car-images/saintJensen.jpg';
import ClassicInterceptor from '../images/car-images/classic-interceptor.jpg';

// Stingray
import Stingray from '../images/car-images/stingray.jpeg';
import Stingray1 from '../images/car-images/stingray1.jpeg';
import Stingray2 from '../images/car-images/stingray2.jpeg';
import Stingray3 from '../images/car-images/stingray3.jpeg';
import StingrayHistory from '../images/car-images/stingrayHistory.jpg';
import CorvetteRed from '../images/car-images/corvette-red.jpg';
import CorvetteBlack from '../images/car-images/corvette-black.jpg';
import MakoShark from '../images/car-images/mako-shark.jpg';
import C4 from '../images/car-images/corvette-c4.jpg';

// Porsche
import Porsche from '../images/car-images/Porsche1.jpg';
import Porsche1 from '../images/car-images/Porsche2.jpg';
import Porsche2 from '../images/car-images/Porsche3.jpg';
import Porsche3 from '../images/car-images/Porsche4.jpg';
import PorscheHistory from '../images/car-images/PorscheHistory.jpeg';
import PorscheTurbo from '../images/car-images/PorscheTurbo.jpg';
import PorscheWhaleTale from '../images/car-images/PorscheWhaleTale.webp';
import Porsche911 from '../images/car-images/Porsche911.png';
import PorscheOldNew from '../images/car-images/PorscheOldNew.jpg';

// Jaguar MK II
import JaguarMKII from '../images/car-images/JaguarMKII.jpg';
import JaguarMKII1 from '../images/car-images/JaguarMKII1.jpg';
import JaguarMKII2 from '../images/car-images/JaguarMKII2.jpg';
import JaguarMKII3 from '../images/car-images/JaguarMKII3.jpg';
import JaguarMKIIHistory from '../images/car-images/JaguarMKIIHistory.jpg';
import JaguarMKIIJAG from '../images/car-images/JaguarMKIIJAG.jpg';
import JAGMrWyatt from '../images/car-images/JAGMrWyatt.jpg';
import JaguarEngine from '../images/car-images/JaguarEngine.jpg';
import JaguarModern from '../images/car-images/JagModern.webp';

// Bentley
import Bentley from '../images/car-images/Bentley.jpg';
import Bentley1 from '../images/car-images/Bentley1.jpg';
import Bentley2 from '../images/car-images/Bentley2.jpg';
import Bentley3 from '../images/car-images/Bentley3.jpg';


const carsData = [
  {
    label: "Corvette Stingray C3",
    gridImage: Stingray,
    date: "1968",
    images: [
      {label: "Stingray", image: Stingray },
      {label: "Stingray1", image: Stingray1 },
      {label: "Stingray2", image: Stingray2 },
      {label: "Stingray3", image: Stingray3 },
    ],
    carHistory: {
      title: "All American Muscle",
      image: StingrayHistory,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed at ligula non nunc laoreet dapibus eu vitae justo. 
                  Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
                  interdum tincidunt tellus eleifend id. Aenean volutpat
                  ipsum porta justo finibus vehicula.

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed at ligula non nunc laoreet dapibus eu vitae justo. 
                  Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
                  interdum tincidunt tellus eleifend id. Aenean volutpat 
                  ipsum porta justo finibus this is a change.`
    }, 
    brandHistory: 
      [
        {
          label: "The Vette",
          image: CorvetteRed,
          content: {
            title: "The Vette",
            description: `The Chevrolet Corvette is a two-door, two-passenger 
                          sports car manufactured and marketed by Chevrolet across 
                          more than 60 years of production and eight design generations. 
                          From 1953 to 2019, it was front-engined, and since 2020, 
                          it has been mid-engined. With its generations noted sequentially 
                          from C1 to C8, the Corvette serves as Chevrolet's 
                          halo vehicle and is widely noted for its performance 
                          and distinctive plastic—either fiberglass or composite—bodywork.`
          }
        },
        {
          label: "A 3rd Generation Sweetheart",
          image: CorvetteBlack,
          content: {
            title: "A 3rd Generation Sweetheart",
            description: `The C3 is the third generation of the Chevrolet Corvette, 
                          and marks the second time the Corvette would carry the 
                          Stingray name, though only for the 1969 - 1976 model years. 
                          This time it was a single word as opposed to Sting Ray as 
                          used for the 1963 - 1967 C2 generation. 
                          The name would then be retired until 2014 when 
                          it returned with the release of the C7.`,
          }
        },
        {
          label: "Mako Shark",
          image: MakoShark,
          content: {
            title: "The Mako Shark II",
            description: `The C3 was modeled after the Mako Shark II concept car
                          designed by Larry Shinoda. The concept car's name was 
                          later changed to Manta Ray. Chevrolet created two of them 
                          - only one of which was fully functional. In 2016 General 
                          Motors filed a trademark on the name "Manta Ray", 
                          leading to much speculation on how (or if) the name would be used.`,
          }
        },
        {
          label: "The Next Generation",
          image: C4,
          content: {
            title: "The Next Generation",
            description: `In the late ’70’s Corvettes there were huge sales success with the Stingray
                          for GM, but the C3 was going on 12 years of production without 
                          a major refresh. Because of this, the last piece of the
                          C3 Corvette puzzle was put in place by the final 1982 
                          C3 Collector Edition before the next-generation 
                          C4 Corvette would start the next chapter. We think that the C4 looses the
                          curvy playfulness of the C3 and haven't yet seen it return in subsequent generations.
                          Well, we'll always have C3.`,
          }
        },
      ],
  },
  {
    label: "Jensen Interceptor FF",
    gridImage: Interceptor,
    date: "1969",
    images: [
      { label: "Interceptor", image: Interceptor }, 
      { label: "Interceptor1", image: Interceptor1 }, 
      { label: "Interceptor2", image: Interceptor2 }, 
      { label: "Interceptor3", image: Interceptor3 }
    ],
    carHistory: {
      title: "An English Gem",
      image: InterceptorHistory,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed at ligula non nunc laoreet dapibus eu vitae justo. 
                  Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
                  interdum tincidunt tellus eleifend id. Aenean volutpat
                  ipsum porta justo finibus vehicula.

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed at ligula non nunc laoreet dapibus eu vitae justo. 
                  Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
                  interdum tincidunt tellus eleifend id. Aenean volutpat 
                  ipsum porta justo finibus vehicula.`
    },
    brandHistory: 
      [
        {
          label: "Jensen Motors", 
          image: JensenMotors, 
          content: {
              title: "Jensen Motors",
              description: `Operating out of West Bromwich in England Jensen Motors
                            were a for-most manufacturer of British sports cars.
                            Founded in 1922 by two brothers Alan and Richard Jensen, Jensen 
                            motors operated for over 50 years until 1976, with a breif 
                            resuming of trading from 1998-2011. Throughout the war they focused
                            on producing comonents for miliatry vehicles, and after focused on 
                            selling their sports cars like the wonderful FF above.`
          }
        },
        {
          label: "Harry Ferguson", 
          image: HarryFerg, 
          content: {
              title: "Harry Ferguson",
              description: `The letters FF stand for Ferguson Formula, a four-wheel drive system
                            that was devloped at Ferguson Research Ltd. The company was lead
                            by Harry Ferguson who was mostly known as 
                            "the father of the modern farm tractor". He was a pioneer aviator, 
                            becoming one of the first to build and fly his own aeroplane in Ireland, 
                            and also went on to develop other four-wheel drive systems for cars 
                            including pioneering their use in Formula One.`
          }
        },
        {
          label: "The Saint", 
          image: SaintJensen, 
          content: {
              title: "The Saint",
              description: `Driven by Simon Dutton, a 1976 Jensen Interceptor Series 3 Saloon in Brienz Blue 
                            appeared on The Saint in 1989. 
                            The car was supplied directly by Jensen and upgraded with a new radiator grille, 
                            wheels, and accessories to make it look like the latest Series 4 Saloon. The presence 
                            of the Interceptor in The Saint goes some way in illustrating the marketing strategy of
                            Jensen in the 1960s and 1970s. Jensen used product placement to foster the reputation of
                             the interceptor as a cool slice of luxury!`
          }
        },
        {
          label: "A Classic", 
          image: ClassicInterceptor, 
          content: {
              title: "A Classic",
              description: `The Interceptor has become a classic of British engineering, with Italian styling and 
                            good old fashioned power under the hood! Labeled a pioneer of its time, it has won countless
                            awards for its efforts. A first adopter of ABS as well as an interior that supposedly took
                            seven hides of leather to upholster, with every single body panel being 
                            hand fettled. It's no wonder that the Interceptor became known as 'the car for the stars' 
                            eventually being described as 'supersonic velvet'!`
          }
        }
    ]
  },
  {
    label: "Porsche 930 Turbo",
    gridImage: Porsche,
    date: "1970s",
    images: [
      { label: "Porsche", image: Porsche }, 
      { label: "Porsche1", image: Porsche1 }, 
      { label: "Porsche2", image: Porsche2 }, 
      { label: "Porsche3", image: Porsche3 }
    ],
    carHistory: {
      title: "Absolute Power",
      image: PorscheHistory,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed at ligula non nunc laoreet dapibus eu vitae justo. 
                  Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
                  interdum tincidunt tellus eleifend id. Aenean volutpat
                  ipsum porta justo finibus vehicula.

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed at ligula non nunc laoreet dapibus eu vitae justo. 
                  Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
                  interdum tincidunt tellus eleifend id. Aenean volutpat 
                  ipsum porta justo finibus vehicula!`
    },
    brandHistory: 
      [
        {
          label: "Turbo Charged!", 
          image: PorscheTurbo, 
          content: {
              title: "Turbo Charged!",
              description: `Porsche began experimenting with turbocharging technology 
                            on their race cars during the late 1960s, and in 1972 
                            began development on a turbocharged version of the 911.
                            Ernst Fuhrmann adapted the turbo-technology originally 
                            developed for the race track and applied it to the 
                            3.0 litre flat-six used in Carrera RS 3.0, thus creating 
                            what Porsche internally dubbed as the 930.`
          }
        },
        {
          label: "The Whale Tail", 
          image: PorscheWhaleTale, 
          content: {
              title: "The Whale Tail",
              description: `Porsche badged the vehicle simply as "Turbo", however because
                            of the 930 oversized rear spoiler it affectionately gained the
                            nickname 'The Whale Tail'! The spoiler was installed to help vent 
                            more air to the engine and to create more downforce at the rear of the vehicle.`
          }
        },
        {
          label: "The 911 Range", 
          image: Porsche911, 
          content: {
              title: "The 911 Range",
              description: `The first iteration of the 911, then named the 901, took Porsche's pedigree from the race
                            track and brought it to the production line. Rumour has it that Porsche renamed the
                            car the 911 because France car makers claimed to have copyrighted any car name with 
                            3 digits and a 0 in the middle. Hence, the 911 was born.`
          }
        },
        {
          label: "Embodiment of Tradition", 
          image: PorscheOldNew, 
          content: {
              title: "Embodiment of Tradition",
              description: `Although obviously the 911 range has seen adapted with the technologies of the time
                            and has continued to grow over the years, the desgin of the car as well as the internal
                            strategy has remained impressively stable from the original in 1963 to current day. 
                            Continuous improvement on a tried and tested system at its finest!`
          }
        }
    ]
  },
  {
    label: "Jaguar MKII",
    gridImage: JaguarMKII,
    date: "1970s",
    images: [
      { label: "JaguarMKII", image: JaguarMKII }, 
      { label: "JaguarMKII1", image: JaguarMKII1 }, 
      { label: "JaguarMKII2", image: JaguarMKII2 }, 
      { label: "JaguarMKII3", image: JaguarMKII3 }
    ],
    carHistory: {
      title: "Grace . . . Space . . . Pace",
      image: JaguarMKIIHistory,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed at ligula non nunc laoreet dapibus eu vitae justo. 
                  Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
                  interdum tincidunt tellus eleifend id. Aenean volutpat
                  ipsum porta justo finibus vehicula.

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed at ligula non nunc laoreet dapibus eu vitae justo. 
                  Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
                  interdum tincidunt tellus eleifend id. Aenean volutpat 
                  ipsum porta justo finibus vehicula!`
    },
    brandHistory: 
      [
        {
          label: "The Jag!", 
          image: JaguarMKIIJAG, 
          content: {
              title: "The Jag!",
              description: `Back in the 60s, the mark 2, known more widely as
                            simply 'The Jag', was the cool, sexy and fast kid on
                            the block. Driven by racing drivers, bank robbers and 
                            celebrities alike. It was a symbol of a golden classy age, 
                            and it remains so today.`
          }
        },
        {
          label: "Mr Wyatt", 
          image: JAGMrWyatt, 
          content: {
              title: "Back to the good ol' days",
              description: `Way before Jaguar was bought by Ford and then subsequently by
                           Tata Motors in 2008, they specialised in the sports saloon. The 
                           car pictured was one from this era, an SS 2.5 Litre belonging to 
                           a Mr Wyatt.`
          }
        },
        {
          label: "An engine to last", 
          image: JaguarEngine, 
          content: {
              title: "An engine to last",
              description: `A mainstay powerplant for Jaguar, the XK engine was conceived by
                            Bill Lyons and designed by William 'Bill' Heynes and Walter 'Wally'
                            Hassan. The result was a twin-cam straight six engine that was at
                            the heart of many of Jaguar's classics, inlcuding the original Mk2. 
                            Few engine types have demonstrated such ubiquity and longevity.`
          }
        },
        {
          label: "The Modern Jag", 
          image: JaguarModern, 
          content: {
              title: "The Modern Jag!",
              description: `Jaguar have come some way from their sports saloons and older XK engines. 
                            Recently Jaguar has unveiled the F-TYPE Heritage 60 Edition, a design that 
                            is meant to honour the sixty year heritage of the Jaguar E-type. The car will 
                            have a 5.0 litre V8 575PS engine and a max speed of 186mph.`
          }
        }
    ]
  },
  {
    label: "Bentley",
    gridImage: Bentley,
    date: "1950s",
    images: [
      { label: "Bentley", image: Bentley }, 
      { label: "Bentley1", image: Bentley1 }, 
      { label: "Bentley2", image: Bentley2 }, 
      { label: "Bentley3", image: Bentley3 }
    ],
    carHistory: {
      title: "",
      image: "",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed at ligula non nunc laoreet dapibus eu vitae justo. 
                  Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
                  interdum tincidunt tellus eleifend id. Aenean volutpat
                  ipsum porta justo finibus vehicula.

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed at ligula non nunc laoreet dapibus eu vitae justo. 
                  Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
                  interdum tincidunt tellus eleifend id. Aenean volutpat 
                  ipsum porta justo finibus vehicula!`
    },
    brandHistory: 
      [
        {
          label: "Turbo Charged!", 
          image: "", 
          content: {
              title: "",
              description: ``
          }
        },
        {
          label: "The Whale Tail", 
          image: "", 
          content: {
              title: "",
              description: ``
          }
        },
        {
          label: "The 911 Range", 
          image: "", 
          content: {
              title: "",
              description: ``
          }
        },
        {
          label: "Embodiment of Tradition", 
          image: "", 
          content: {
              title: "",
              description: ``
          }
        }
    ]
  }
]

export default carsData;
