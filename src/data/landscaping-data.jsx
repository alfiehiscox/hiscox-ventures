// 9 Images with titles and text
import France from '../images/renovations-images/france.jpg';
import Museum from '../images/renovations-images/museum.jpeg';
import Yosemite from '../images/renovations-images/yosemite.jpeg';
import Garden from '../images/renovations-images/garden.jpeg';
import Beach from '../images/landscaping-images/beach.jpeg';
import Pier from '../images/landscaping-images/pier.jpeg';
import Sea from '../images/landscaping-images/sea.jpeg';
import SunSea from '../images/landscaping-images/sunsea.jpeg';
import Victory from '../images/landscaping-images/victory.jpeg';

const landscapingData = [
  {
    label: "yosemite", 
    image: Yosemite, 
    content: 
    {
      title: "Yosemite",
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
    }
  },
  {
    label: "museum", 
    image: Museum, 
    content: {
      title: "Museum",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed at ligula non nunc laoreet dapibus eu vitae justo. 
                  Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
                  interdum tincidunt tellus eleifend id. Aenean volutpat
                  ipsum porta justo finibus vehicula.

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed at ligula non nunc laoreet dapibus eu vitae justo. 
                  Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
                  interdum tincidunt tellus eleifend id. Aenean volutpat 
                  ipsum porta justo finibus vehicula.`,
      description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed at ligula non nunc laoreet dapibus eu vitae justo. 
                  Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
                  interdum tincidunt tellus eleifend id. Aenean volutpat
                  ipsum porta justo finibus vehicula.`
    }
  },
  {
    label: "france", 
    image: France, 
    content: {
      title: "France",
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
    }
  },
  {
    label: "garden", 
    image: Garden, 
    content: {
      title: "Garden",
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
    }
  },
  {
    label: 'beach',
    image: Beach,
    content: {
      title: "Beach",
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
    }
  },
  {
    label: 'pier',
    image: Pier,
    content: {
      title: "Pier",
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
    }
  },
  {
    label: 'sea',
    image: Sea, 
    content: {
      title: "Sea",
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
    }
  },
  {
    label: 'sunsea',
    image: SunSea,
    content: {
      title: "Sun and Sea",
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
      }
  },
  {
    label: 'vicotry',
    image: Victory,
    content: {
      title: "Victory",
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
      }
  },
];

export default landscapingData;