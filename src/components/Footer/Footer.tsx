import Image from "next/image";
import AppStoreSVG from "@/app/assets/AppStore.svg";
import GooglePlaySVG from "@/app/assets/GooglePlay.svg";
import YoutubeSVG from "@/app/assets/Youtube.svg";
import FacebookSVG from "@/app/assets/Facebook.svg";
import TwitterSVG from "@/app/assets/Twitter.svg";
import InstagramSVG from "@/app/assets/Instagram.svg";
import LinkedInSVG from "@/app/assets/Linkedin.svg";
import WorldMiniSVG from "@/app/assets/WorldMini.svg";

export default function Footer() {
  return (
    <footer className="bg-dark-90 text-gray-30 px-20 ">
      <div className="flex flex-col lg:flex-row lg:space-x-12 py-12 border-y-[1px] border-dark-50 space-y-16 lg:space-y-0">
        <div className="flex-1">
          <ul className="text-center lg:text-left child:py-3 child-child:cursor-pointer">
            <li className="!text-white font-medium">Product</li>
            <li>
              <span>Pricing</span>
            </li>
            <li>
              <span>Overview</span>
            </li>
            <li>
              <span>Browse</span>
            </li>
            <li>
              <span>Accessibility</span>
            </li>
            <li>
              <span>Five</span>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <ul className="text-center lg:text-left child:py-3 child-child:cursor-pointer">
            <li className="!text-white font-medium">Solutions</li>
            <li>
              <span>Brainstorming</span>
            </li>
            <li>
              <span>Ideation</span>
            </li>
            <li>
              <span>Wireframing</span>
            </li>
            <li>
              <span>Research</span>
            </li>
            <li>
              <span>Design</span>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <ul className="text-center lg:text-left child:py-3 child-child:cursor-pointer">
            <li className="!text-white font-medium">Support</li>
            <li>
              <span>Contact Us</span>
            </li>
            <li>
              <span>Developers</span>
            </li>
            <li>
              <span>Documentation</span>
            </li>
            <li>
              <span>Integrations</span>
            </li>
            <li>
              <span>Reports</span>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="!text-white font-medium py-3 text-center lg:text-left">Get the App</div>
          <div className="mt-2 space-y-2">
            <div className="flex flex-col space-y-2 items-center lg:items-start">
              <button className="py-[3px]">
                <Image priority src={AppStoreSVG} alt="App Store button" width={120} height={40} />
              </button>
              <button className="py-[3px]">
                <Image priority src={GooglePlaySVG} alt="Google Play button" width={135} height={40} />
              </button>
            </div>
            <div className="space-y-2">
              <div className="pt-12 pb-3 text-center lg:text-left">Follow Us</div>
              <div className="flex space-x-4 justify-center lg:justify-start">
                <button>
                  <Image priority src={YoutubeSVG} alt="Youtube button" width={24} height={24} />
                </button>
                <button>
                  <Image priority src={FacebookSVG} alt="Facebook button" width={24} height={24} />
                </button>
                <button>
                  <Image priority src={TwitterSVG} alt="Twitter button" width={24} height={24} />
                </button>
                <button>
                  <Image priority src={InstagramSVG} alt="Instagram button" width={24} height={24} />
                </button>
                <button>
                  <Image priority src={LinkedInSVG} alt="Linked In button" width={24} height={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:py-6 py-12 space-y-6 lg:space-y-0">
        <div className="text-nowrap">Collers @ 2023. All rights reserved.</div>
        <div className="flex child:py-3 space-x-8 child:cursor-pointer">
          <div>Terms</div>
          <div>Privacy</div>
          <div>Contact</div>
          <div className="flex space-x-2">
            <Image src={WorldMiniSVG} alt="EN icon" />
            <div>EN</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
