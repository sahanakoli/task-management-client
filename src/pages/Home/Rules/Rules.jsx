import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";

const Rules = () => {
    return (
        <div>
            <h2 className=" text-3xl font-bold underline text-center mt-16">Task Management Rules</h2>
            <div className="mt-16 mb-6">
                <div className="ml-20">
                    <div className="flex gap-2">
                        <HiArrowRightOnRectangle className=" text-2xl mt-2" />
                        <h2 className=" text-2xl font-semibold mb-2">Authenticity and Accountability</h2>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Users are responsible for the accuracy and relevance of the tasks they create and manage. Be authentic in your contributions and take ownership of your tasks.</h3>
                    </div>
                </div>
                <div className="mt-10 ml-20">
                    <div className="flex gap-2">
                        <HiArrowRightOnRectangle className=" text-2xl mt-2" />
                        <h2 className=" text-2xl font-semibold mb-2">Privacy Protection</h2>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Respect the privacy of others. Do not share sensitive information without explicit consent from the involved parties.</h3>
                    </div>
                </div>
                <div className="mt-10 ml-20">
                    <div className="flex gap-2">
                        <HiArrowRightOnRectangle className=" text-2xl mt-2" />
                        <h2 className=" text-2xl font-semibold mb-2">Focused Discussions</h2>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Keep conversations and discussions centered around task management and related topics. Avoid off-topic discussions or unrelated content.</h3>
                    </div>
                </div>
                <div className="mt-10 ml-20">
                    <div className="flex gap-2">
                        <HiArrowRightOnRectangle className=" text-2xl mt-2" />
                        <h2 className=" text-2xl font-semibold mb-2">Privacy and Security</h2>
                    </div>
                    <div className="flex gap-2">
                        <GoDotFill className="mt-1 text-base" />
                        <h3 className=" text-base font-medium">Advise users not to share personal information.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rules;