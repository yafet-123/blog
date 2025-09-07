import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaTripadvisor,
} from 'react-icons/fa';

const Map = () => {
  const socialMediaLinks = [
    {
      id: 1,
      icon: <FaFacebook size={20} color="white" />,
      path: '#',
    },
    {
      id: 2,
      icon: <FaLinkedin size={20} color="white" />,
      path: '#',
    },
    {
      id: 3,
      icon: <FaInstagram size={20} color="white" />,
      path: '#',
    },
    {
      id: 4,
      icon: <FaTelegram size={20} color="white" />,
      path: '#',
    },
    {
      id: 5,
      icon: <FaTiktok size={20} color="white" />,
      path: '#',
    },
    {
      id: 6,
      icon: <FaTripadvisor size={20} color="white" />,
      path: '#',
    },
  ];
  let position = [9.02175, 38.83958];
  let zoom = 13;
  useEffect(() => {
    import('leaflet').then((L) => {
      const DefaultIcon = L.icon({
        iconUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
      L.Marker.prototype.options.icon = DefaultIcon;
    });
  }, []);

  const MapContainer = dynamic(
    () => import('react-leaflet').then((mod) => mod.MapContainer),
    { ssr: false }
  );
  const TileLayer = dynamic(
    () => import('react-leaflet').then((mod) => mod.TileLayer),
    { ssr: false }
  );
  const Marker = dynamic(
    () => import('react-leaflet').then((mod) => mod.Marker),
    { ssr: false }
  );
  const Popup = dynamic(
    () => import('react-leaflet').then((mod) => mod.Popup),
    { ssr: false }
  );

  return (
    <div className="flex flex-col w-full lg:w-1/2 lg:px-0">
      <div className="h-[500px] w-full rounded-lg overflow-hidden py-5">
        <MapContainer center={position} zoom={zoom} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>We are here!</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="flex gap-5 mb-5">
        { socialMediaLinks.map((data,index)=>(
          <div key={index} className={`${index %  2 == 0 ? "bg-[#c74c4a]" : "bg-black"} w-1/4 flex justify-center items-center w-10 h-10 border rounded-full `}>
            <p className="">{data.icon}</p>
          </div>
        ))}
        </div>
    </div>
  );
};

export default Map;
