import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo/logo.png'
import { IoLogoFacebook } from 'react-icons/io5';

const Footer = () => {
    return (
        <div>

<footer className="border-t py-4 bg-white">
    <div className="max-w-[1200px] mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-start">
            <div className="companySlogan w-full justify-self-center md:justify-self-start py-3 md:py-0">
                <div className="logo mx-auto md:mx-0">
                    <img src={logo} alt="Ninish Logo" className='h-[2.90rem] w-fit mx-auto md:mx-0' />
                </div>
                <div className="slogan pt-4">
                    A Co-curricular Edu-Tech Platform
                </div>
            </div>

            <div className="footerNavLinks w-full justify-self-center md:justify-self-start border-t md:border-none py-3 md:py-0">
                <h5 className="text-lg font-bold">প্রয়োজনীয় লিংক</h5>
                <ul className="text-center md:text-start grid gap-2 mt-2">
                    <li><Link to={'englishOlympiad2024'} className="hover:text-[#6d28d9]">English Olympiad 2024</Link></li>
                    <li><Link to={'/about'}  className="hover:text-[#6d28d9]">নিণীষ সম্পর্কে</Link></li>
                    <li>
                        <Link to={'/acount'}  className="hover:text-[#6d28d9]">একাউন্ট এ প্রবেশ করুন</Link>
                    </li>
                </ul>
            </div>

            <div className="footerContact w-full justify-self-center md:justify-self-start border-t md:border-none py-3 md:py-0">
                <h5 className="text-lg font-bold">আমাদের যোগাযোগ মাধ্যম</h5>
                <div className="text-center md:text-start mt-2">
                    <div>
                        <p>কল করুন: <a href="tel:01644042241" className="text-[#6d28d9]">01644042241</a>,
                            <a href="tel:01722842564" className="text-[#6d28d9]">01722842564</a>
                        </p>

                        <p>ইমেইল করুন: <a href="mailto:info@ninish.com" className="text-[#6d28d9]">info@ninish.com</a></p>
                    </div>

                    <div className=" w-fit mx-auto md:mx-0 border-t md:border-0 pt-2 mt-4 md:mt-0 text-4xl hover:text-[#6d28d9]">
                        <Link href="https://www.messenger.com/t/100033293404646" >

                            <IoLogoFacebook/>

                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <p className="text-center md:pt-8">স্বত্ব © ২০২৩ নিণীষ কর্তৃক সর্বস্বত্ব সংরক্ষিত</p>
    </div>
</footer>

        </div>
    );
};

export default Footer;