"use client"
import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs/Simple'
import { useSession } from 'next-auth/react';
import Style from '@/utils/Style';

function page(props) {
    const { data: session } = useSession()
    return (
        <div className={`w-full float-left p-[20px] rounded-lg mt-[${session && session.user ? '0px' : '100px'}] ` + Style.padding}>
            <Breadcrumbs title="Privacy Policy" />
            <div className='w-full float-left mt-[50px] text-justify text-sm document'>
                <ul>
                    <li>
                        <h1>I. Introduction</h1>
                        <ul>
                            <li>
                                <b>A. Overview of PHStartup.org</b>
                                <p>
                                    Welcome to PHStartup.org, a multi-sectoral crowdsourcing platform dedicated to fostering innovation, collaboration, and growth within the Philippine startup ecosystem. Our platform aims to support the development and expansion of the vibrant and promising startup ecosystem in the Philippines. By providing a comprehensive set of services and tools, we enable startups, startup enablers, startup accelerators, incubators, co-working spaces, businesses, investors, government agencies, and other stakeholders to connect, collaborate, and thrive.
                                </p>
                            </li>
                            <li>
                                <b>B. Mission to Grow the Philippine Startup Ecosystem</b>
                                <p>
                                    The startup ecosystem in the Philippines is young, creative, innovative, and full of potential. Startups play a crucial role by introducing innovative products and creating new business models that address evolving societal and market needs. Recognizing the importance of nurturing an entrepreneurial culture, it is essential for the multi-sectoral stakeholders and government to support the development of the startup ecosystem. PHStartup.org is driven by the mission to help grow and strengthen the Philippine startup ecosystem.
                                </p>
                            </li>
                            <li>
                                <b>C. Involvement of Government Agencies</b>
                                <p>
                                    Government agencies, such as the Department of Trade and Industry (DTI), Department of Science and Technology (DOST), and Department of Information and Communications Technology (DICT), are actively involved in the Philippine startup ecosystem. They work collaboratively to foster an environment conducive to the growth and success of startups. By leveraging PHStartup.org, these agencies can streamline the process of accessing government grants, funding opportunities, and other support initiatives.
                                </p>
                            </li>
                            <li>
                                <b>
                                    D. Scope of the Privacy Policy
                                </b>
                                <p>
                                    This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you access and use PHStartup.org. It applies to all users, including startups, investors, businesses, government agencies, and other stakeholders who interact with the platform.
                                </p>
                            </li>
                            <li>
                                <b>
                                    E. Acceptance of the Privacy Policy
                                </b>
                                <p>
                                    By accessing and using PHStartup.org, you acknowledge that you have read, understood, and agreed to the practices described in this Privacy Policy. If you do not agree with the terms outlined herein, please refrain from using our platform. Your continued use of PHStartup.org signifies your acceptance of this Privacy Policy and any updates or modifications that may be made to it in the future.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h1>
                            II. Information Collection
                        </h1>
                        <ol>
                            <li>
                                <b>
                                    1. Types of Personal Information Collected
                                </b>
                                <p>
                                    When you create an account on PHStartup.org, we may collect certain personal information from you, which may include but is not limited to:
                                </p>
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default page;