import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black pt-10">
      <div className="container place-items-center grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Contact Section */}
        <div>
          <h4 className="font-bold mb-4">E-NEST</h4>
          <p className="text-xs w-22">Empowering Agri and Food technology</p>
          <p className="my-5 font-bold">Contact Us</p>
          <p>Email</p>
          <p>Talk to a Counsellor</p>
          <p>Address</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2">Program</li>
            <li className="mb-2">Test Series</li>
            <li className="mb-2">Skill Connect</li>
            <li className="mb-2">Expert Connect</li>
            <li>Study Abroad</li>
          </ul>
        </div>
        
        {/* Company Links */}
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Why Choose Us</li>
            <li className="mb-2">Policies</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        
        {/* Security Links */}
        <div>
          <h4 className="font-bold mb-4">Security</h4>
          <ul>
            <li className="mb-2">Report</li>
            <li className="mb-2">Trademark Notice</li>
            <li className="mb-2">Advertise with Us</li>
            <li>Help & Support</li>
          </ul>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="w-full px-10 mt-10 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center space-x-4">
          <h4 className="font-bold mb-4">Address</h4>
            <p className="mb-4">Address Link</p>
        </div>
      
          <div className="flex space-x-4">
            <Image 
            src="/images/google-play-badge.png" 
            alt="App Store" 
            width={150}
            height={150}
            />
            <Image
             src="/images/google-play-badge.png" 
             alt="Play Store" 
            width={150}
            height={150}
             />
          </div>
       
          <div className="flex flex-col items-center">
          <h4 className="font-bold my-4">Let's Get Social</h4>
          <div className="flex space-x-3">
          <a href="#" className="text-gray-700 hover:text-blue-500"><IoLogoInstagram style={{width: '1.5rem', height: '1.5rem'}} /></a>
          <a href="#" className="text-gray-700 hover:text-blue-500"><FaLinkedin style={{width: '1.5rem', height: '1.5rem'}} /></a>
          <a href="#" className="text-gray-700 hover:text-blue-500"><FaYoutube style={{width: '1.5rem', height: '1.5rem'}} /></a>

          </div>
        </div>
      </div>
           <div className="mt-6 bg-purple-800 text-white flex items-center justify-center h-20">
          <p>Copyright &copy; AgriVision4U Pvt. Ltd. 2024</p>
        </div> 
    </footer>
  );
};

export default Footer;
