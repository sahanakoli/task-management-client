import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";

const Faq = () => {
    return (
        <div>
            <h2 className=" text-3xl font-bold underline text-center mt-16">Frequently Asked Questions</h2>
            <div className="mt-16 mb-6">
                <div className="ml-20">
                    <div className="flex gap-2">
                        <HiArrowRightOnRectangle className=" text-2xl mt-2" />
                        <h2 className=" text-2xl font-semibold mb-2">What is TaskVista?</h2>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">TaskVista is a comprehensive task management platform designed to help individuals and teams organize, prioritize, and collaborate on tasks efficiently. It provides a user-friendly interface and powerful features to enhance productivity.</h3>
                    </div>
                </div>
                <div className="mt-10 ml-20">
                    <div className="flex gap-2">
                        <HiArrowRightOnRectangle className=" text-2xl mt-2" />
                        <h2 className=" text-2xl font-semibold mb-2">How do I get started with TaskVista?</h2>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">To get started, visit our website and sign up for an account. Once registered, you can create tasks, set deadlines, collaborate with team members, and explore various features to streamline your workflow.</h3>
                    </div>
                </div>
                <div className="mt-10 ml-20">
                    <div className="flex gap-2">
                        <HiArrowRightOnRectangle className=" text-2xl mt-2" />
                        <h2 className=" text-2xl font-semibold mb-2">How does TaskVista ensure data security?</h2>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">We take data security seriously. TaskVista employs industry-standard encryption protocols to secure user data. Our servers undergo regular security audits to ensure a safe and protected environment for your information.</h3>
                    </div>
                </div>
                <div className="mt-10 ml-20">
                    <div className="flex gap-2">
                        <HiArrowRightOnRectangle className=" text-2xl mt-2" />
                        <h2 className=" text-2xl font-semibold mb-2">Can I use TaskVista on mobile devices?</h2>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Absolutely! TaskVista is accessible on both desktop and mobile devices. You can download our mobile app for iOS and Android to manage your tasks on the go.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;