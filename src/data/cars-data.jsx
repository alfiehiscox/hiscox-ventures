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
                  ipsum porta justo finibus vehicula.`
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
  }
]

export default carsData;
