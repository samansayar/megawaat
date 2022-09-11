import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import avatar from '../../public/images/avatar.jpeg';
import useChat from '../../utils/useChat';
// import Picker from 'emoji-picker-react';
import dynamic from 'next/dynamic';
import { Popover, Transition } from '@headlessui/react';
const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false });
export default function Messages() {

    const router = useRouter();
    const { roomId } = router.query; // Gets roomId from URL
    const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
    const [newMessage, setNewMessage] = useState(""); // Message to be sent
    const [toggleEmoji, settoggleEmoji] = useState(false)
    const bottomRef = useRef(null);
    const [toggleListUser, settoggleListUser] = useState(true)
    const [chosenEmoji, setChosenEmoji] = useState(null)
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        setNewMessage(newMessage + emojiObject.emoji);
    };

    useEffect(() => {
        settoggleListUser(localStorage.getItem('togglechat'));
        if (localStorage.getItem('togglechat') === null) {
            localStorage.setItem('togglechat', true)
            settoggleListUser(true)
        } else {
            settoggleListUser(localStorage.getItem('togglechat'))
            settoggleListUser(localStorage.getItem('togglechat'))
        }
    }, [])
    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };
    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage("");
    };
    const enterHandleSendMessage = (event) => {
        if (event.keyCode === 13) {
            console.log('enter press here! ')
            sendMessage(newMessage);
            setNewMessage("");
        }
        console.log(newMessage, typeof newMessage, newMessage.length)
    };
    useEffect(() => {
        console.log(messages);
        // 👇️ scroll to bottom every time messages change
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    return (
        <div className='lg:h-auto h-screen rounded-xl'>
            <Head>
                <title>پیام های من - مگاوات</title>
            </Head>
            <div className="w-full lg:block hidden h-32  bg-primary dark:bg-primary2 z-10"></div>

            <div className="container mx-auto lg:-mt-[128px] z-30 rounded-xl">
                <div className="lg:py-6 h-screen rounded-xl">
                    <div className="flex rounded-xl shadow-lg h-full">
                        {/* <!-- Left --> */}
                        <div className={`${toggleListUser == 'false' && 'hidden'} lg:w-1/3 w-full border dark:border-blacker lg:flex flex-col bg-white rounded-tr-xl`}>

                            {/* <!-- Header --> */}
                            <div className="py-2 px-3 w-full bg-gray-200 dark:bg-brown flex flex-row justify-between items-center rounded-tr-xl">

                                <Image alt='image' className="object-cover rounded-full" width={'44px'} height={'44px'} src={avatar} />

                                <div className="flex items-center space-x-4">
                                    <div></div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className='text-gray-600 dark:text-[#A7A7A7]' viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" fillOpacity=".6" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className='text-gray-600 dark:text-[#A7A7A7]' viewBox="0 0 24 24" width="24" height="24"><path opacity=".55" fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className='text-gray-600 dark:text-[#A7A7A7]' viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" fillOpacity=".6" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Search --> */}
                            <div className="py-2 px-2 bg-grey-lightest dark:bg-brown">
                                <input type="text" className="w-full px-4 placeholder:text-gray-600 sasn-bolish dark:placeholder:text-gray-500 dark:bg-gray-900 dark:text-white py-3 rounded-lg focus:outline-none focus:border-gray-300 text-sm bg-gray-200" placeholder="برای شروع گفتگو جستجو کنید" />
                            </div>

                            {/* <!-- Contacts --> */}
                            <div className="bg-wither dark:bg-brown flex-1 overflow-auto">
                                <div onClick={() => {
                                    localStorage.setItem('togglechat', 'false')
                                    settoggleListUser('false')
                                }}
                                    className="px-2 bg-white dark:bg-gray-900 rounded-lg dark:rounded-none transition duration-200 ease-out hover:bg-primary hover:text-white text-blacker dark:text-gray-600 flex items-center dark:hover:bg-primary2 cursor-pointer">
                                    <div>
                                        <Image alt='image' className="rounded-full object-cover"
                                            src={avatar} width={'44px'} height={'44px'} />
                                    </div>
                                    <div className="px-4 group flex-1 border-b dark:border-none  border-secondery/20 py-4">
                                        <div className="flex items-bottom justify-between">
                                            <p className="text-sm sans-bolish dark:group-hover:text-white">
                                                سامان سیار
                                            </p>
                                            <p className="text-xs text-gray-500 group-hover:text-white">
                                                12 ساعت پیش
                                            </p>
                                        </div>
                                        <p className="text-secondery group-hover:text-white sans- mt-1 text-xs">
                                            سلام من برنامه نویس وب هستم :)‍
                                        </p>
                                    </div>
                                </div>
                                <div onClick={() => {
                                    localStorage.setItem('togglechat', 'false')
                                    settoggleListUser('false')
                                }}
                                    className="px-2 bg-white dark:bg-gray-900 rounded-lg dark:rounded-none transition duration-200 ease-out hover:bg-primary hover:text-white text-blacker dark:text-gray-600 flex items-center dark:hover:bg-primary2 cursor-pointer">
                                    <div>
                                        <Image alt='image' className="rounded-full object-cover"
                                            src={avatar} width={'44px'} height={'44px'} />
                                    </div>
                                    <div className="px-4 group flex-1 border-b dark:border-none  border-secondery/20 py-4">
                                        <div className="flex items-bottom justify-between">
                                            <p className="text-sm sans-bolish dark:group-hover:text-white">
                                                سامان سیار
                                            </p>
                                            <p className="text-xs text-gray-500 group-hover:text-white">
                                                12 ساعت پیش
                                            </p>
                                        </div>
                                        <p className="text-secondery group-hover:text-white sans- mt-1 text-xs">
                                            سلام من برنامه نویس وب هستم :)‍
                                        </p>
                                    </div>
                                </div>
                                <div onClick={() => {
                                    localStorage.setItem('togglechat', 'false')
                                    settoggleListUser('false')
                                }}
                                    className="px-2 bg-white dark:bg-gray-900 rounded-lg dark:rounded-none transition duration-200 ease-out hover:bg-primary hover:text-white text-blacker dark:text-gray-600 flex items-center dark:hover:bg-primary2 cursor-pointer">
                                    <div>
                                        <Image alt='image' className="rounded-full object-cover"
                                            src={avatar} width={'44px'} height={'44px'} />
                                    </div>
                                    <div className="px-4 group flex-1 border-b dark:border-none  border-secondery/20 py-4">
                                        <div className="flex items-bottom justify-between">
                                            <p className="text-sm sans-bolish dark:group-hover:text-white">
                                                سامان سیار
                                            </p>
                                            <p className="text-xs text-gray-500 group-hover:text-white">
                                                12 ساعت پیش
                                            </p>
                                        </div>
                                        <p className="text-secondery group-hover:text-white sans- mt-1 text-xs">
                                            سلام من برنامه نویس وب هستم :)‍
                                        </p>
                                    </div>
                                </div>
                                <div onClick={() => {
                                    localStorage.setItem('togglechat', 'false')
                                    settoggleListUser('false')
                                }}
                                    className="px-2 bg-white dark:bg-gray-900 rounded-lg dark:rounded-none transition duration-200 ease-out hover:bg-primary hover:text-white text-blacker dark:text-gray-600 flex items-center dark:hover:bg-primary2 cursor-pointer">
                                    <div>
                                        <Image alt='image' className="rounded-full object-cover"
                                            src={avatar} width={'44px'} height={'44px'} />
                                    </div>
                                    <div className="px-4 group flex-1 border-b dark:border-none  border-secondery/20 py-4">
                                        <div className="flex items-bottom justify-between">
                                            <p className="text-sm sans-bolish dark:group-hover:text-white">
                                                سامان سیار
                                            </p>
                                            <p className="text-xs text-gray-500 group-hover:text-white">
                                                12 ساعت پیش
                                            </p>
                                        </div>
                                        <p className="text-secondery group-hover:text-white sans- mt-1 text-xs">
                                            سلام من برنامه نویس وب هستم :)‍
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Right --> */}
                        <div className={`lg:flex ${toggleListUser == 'true' ? 'hidden' : 'flex'} lg:w-2/3 w-full dark:border-blacker border  flex-col rounded-tl-xl`}>
                            {/* <!-- Header --> */}
                            <div className="py-2 px-3 bg-gray-200 dark:bg-gray-900 flex flex-row justify-between items-center rounded-tl-xl">
                                <div className="flex items-center">
                                    <div>
                                        <Image alt='image' width={'40px'} height={'40px'} className="rounded-full object-cover" src={avatar} />
                                    </div>
                                    <div className="mx-4">
                                        <p className="sans-bolish text-sm">
                                            سامان سیار
                                        </p>
                                        <p className="text-green-500 sans-bolish text-xs mt-1">
                                            آنلاین
                                        </p>
                                    </div>
                                </div>
                                <div className="flex space-x-4 lg:hidden">
                                    <button onClick={() => {
                                        localStorage.setItem('togglechat', 'true')
                                        settoggleListUser('true')
                                    }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            className='text-gray-600 hover:text-gray-800 transition duration-200 ease'
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M21 6.674a3.674 3.674 0 11-7.348-.001 3.674 3.674 0 017.348 0zM10.347 6.674a3.674 3.674 0 11-7.348 0 3.674 3.674 0 017.348 0zM21 17.262a3.674 3.674 0 11-7.347-.001 3.674 3.674 0 017.347 0zM10.347 17.262a3.673 3.673 0 11-7.346 0 3.673 3.673 0 017.346 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* <!-- Messages --> */}
                            <div className="flex-1 overflow-auto scroll-cu bg-[#DAD3CC]" ref={bottomRef}>
                                <div className="py-2 px-3  flex-col w-full">
                                    {/* Messages to this chat and calls are now secured with end-to-end*/}
                                    {messages?.map((message, index) => {
                                        return (
                                            message.ownedByCurrentUser ? (
                                                <div key={index} className="flex  mb-3">
                                                    <div className=''>
                                                        <div className="rounded-xl py-2 px-3 bg-[#E2F7CB]">
                                                            <p className="text-sm leading-8 mt-1 sans-bolish dark:text-blacker">
                                                                {message.body}
                                                            </p>
                                                            <p className="text-right text-xs dark:text-gray-700 text-grey-dark mt-1">
                                                                12:45 pm
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div key={index} className="flex justify-end  mb-3">
                                                    <div className=''>
                                                        <div className="rounded-xl py-2 px-3 bg-wither">
                                                            <p className="text-xs text-primary font-black">
                                                                سامان سیار
                                                            </p>
                                                            <p className="text-sm leading-8 mt-1 sans-bolish">
                                                                {message.body}
                                                            </p>
                                                            <p className="text-right text-xs text-grey-dark mt-1">
                                                                12:45 pm
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )
                                    })}
                                </div>
                            </div>

                            {/* <!-- Input --> */}
                            <div className="bg-primary2/5 dark:bg-gray-900 lg:px-4 px-2 py-2 flex items-center justify-center relative">

                                <Popover className="relative">
                                    <Popover.Button className="focus:outline-none focus:border-none">
                                        <div className='rounded-full cursor-pointer p-1.5 bg-primary/10 dark:bg-primary/50 w-[40px] h-[40px]'>
                                            {/* <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path opacity="1" fill="currentColor" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path></svg> */}
                                            <Image alt='image' src='/images/smaile.png' width={'40px'} height={'40px'} className='object-cover w-full h-full rounded-full' />
                                        </div>
                                    </Popover.Button>
                                    <Transition
                                        enter="transition ease-out duration-300"
                                        enterFrom="opacity-0 translate-y-3"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-300"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-3"
                                    >
                                        <Popover.Panel className="z-30">
                                            <div className='absolute inset-y-0 right-0 -mt-[400px] h-80'>
                                                <Picker onEmojiClick={onEmojiClick} disableAutoFocus={true} native />
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </Popover>
                                <div className="flex-1 mx-4">
                                    <input
                                        value={newMessage}
                                        onChange={handleNewMessageChange}
                                        onKeyDown={enterHandleSendMessage}
                                        spellCheck={'false'} className="resize-none text-lg placeholder:text-sm overflow-hidden w-full border rounded-lg px-5 py-3 leading-6 border-gray-300 dark:border-none dark:bg-gray-800 focus:outline-none focus:border-none dark:text-textdark" type="text" placeholder='چیزی بنویسید...' />
                                </div>
                                <div>
                                    <button onClick={handleSendMessage} className="bg-transparent flex justify-center w-full items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            className='text-blacker dark:text-textdark'
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path fill="currentColor" d="MM0 0H24V24H0z"></path>
                                            <path
                                                fillRule="evenodd"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M11.493 12.438S-.483 9.961 3.68 7.558C7.19 5.531 19.295 2.045 20.986 2.946c.9 1.69-2.585 13.795-4.613 17.307-2.402 4.162-4.88-7.815-4.88-7.815z"
                                                clipRule="evenodd"
                                            ></path>
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M11.493 12.438l9.493-9.492"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
