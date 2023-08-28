"use client"
import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs/Simple'
import { useSession } from 'next-auth/react';
import Style from '@/utils/Style';

function Page(props) {
    const { data: session } = useSession()
    return (
        <div className={`w-full float-left p-[20px] rounded-lg mt-[${session && session.user ? '0px' : '100px'}] ` + Style.padding}>
            <Breadcrumbs title="Privacy Policy" />
            <div className='w-full float-left mt-[50px] text-justify text-sm document'>
                <p>
                    <strong>I. Introduction</strong>
                </p>
                <p>
                    A. Overview of PHStartup.org
                </p>
                <p>
                    Welcome to PHStartup.org, a multi-sectoral crowdsourcing platform dedicated to fostering innovation, collaboration, and growth within the Philippine startup ecosystem. Our platform aims to support the development and expansion of the vibrant and promising startup ecosystem in the Philippines. By providing a comprehensive set of services and tools, we enable startups, startup enablers, startup accelerators, incubators, co-working spaces, businesses, investors, government agencies, and other stakeholders to connect, collaborate, and thrive.
                </p>
                <p>
                    B. Mission to Grow the Philippine Startup Ecosystem
                </p>
                <p>
                    The startup ecosystem in the Philippines is young, creative, innovative, and full of potential. Startups play a crucial role by introducing innovative products and creating new business models that address evolving societal and market needs. Recognizing the importance of nurturing an entrepreneurial culture, it is essential for the multi-sectoral stakeholders and government to support the development of the startup ecosystem. PHStartup.org is driven by the mission to help grow and strengthen the Philippine startup ecosystem.
                </p>
                <p>
                    C. Involvement of Government Agencies
                </p>
                <p>
                    Government agencies, such as the Department of Trade and Industry (DTI), Department of Science and Technology (DOST), and Department of Information and Communications Technology (DICT), are actively involved in the Philippine startup ecosystem. They work collaboratively to foster an environment conducive to the growth and success of startups. By leveraging PHStartup.org, these agencies can streamline the process of accessing government grants, funding opportunities, and other support initiatives.
                </p>
                <p>
                    D. Scope of the Privacy Policy
                </p>
                <p>
                    This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you access and use PHStartup.org. It applies to all users, including startups, investors, businesses, government agencies, and other stakeholders who interact with the platform.
                </p>
                <p>
                    E. Acceptance of the Privacy Policy
                </p>
                <p>
                    By accessing and using PHStartup.org, you acknowledge that you have read, understood, and agreed to the practices described in this Privacy Policy. If you do not agree with the terms outlined herein, please refrain from using our platform. Your continued use of PHStartup.org signifies your acceptance of this Privacy Policy and any updates or modifications that may be made to it in the future.
                </p>
                <p>
                    <strong>II. Information Collection</strong>
                </p>
                <p>
                    A. Personal Information
                </p>
                <p>
                    1. Types of Personal Information Collected
                </p>
                <p>
                    When you create an account on PHStartup.org, we may collect certain personal information from you, which may include but is not limited to:
                </p>
                <p>
                    a. Name
                </p>
                <p>
                    b. Email address
                </p>
                <p>
                    c. Contact details (e.g., phone number, address)
                </p>
                <p>
                    d. Company name (for startups and businesses)
                </p>
                <p>
                    e. Website (for startups and businesses)
                </p>
                <p>
                    f. Industry or sector (for startups and businesses)
                </p>
                <p>
                    g. Pitch deck or pitch video link (for startups seeking funding)
                </p>
                <p>
                    h. Funding requirements and financial information (for startups seeking funding)
                </p>
                <p>
                    i. Other information you voluntarily provide to us
                </p>
                <p>
                    2. Purpose of Collection
                </p>
                <p>
                    We collect personal information to facilitate the use of PHStartup.org, provide our services, and improve our platform's functionalities. Specifically, we use your personal information for the following purposes:
                </p>
                <p>
                    a. To create and manage your account on PHStartup.org.
                </p>
                <p>
                    b. To enable startups to showcase their profiles, pitch decks, and funding requirements to potential investors and government agencies.
                </p>
                <p>
                    c. To provide investors and government agencies with the necessary information to review and assess startup funding applications and grant opportunities.
                </p>
                <p>
                    d. To communicate with you regarding your account, inquiries, and other platform-related matters.
                </p>
                <p>
                    e. To send you promotional and marketing communications, subject to your preferences.
                </p>
                <p>
                    f. To conduct analytics and research to enhance the performance and functionality of PHStartup.org.
                </p>
                <p>
                    g. To comply with legal and regulatory requirements.
                </p>
                <p>
                    3. Legal Basis for Processing
                </p>
                <p>
                    We process your personal information based on the following legal grounds:
                </p>
                <p>
                    a. Performance of a Contract: Processing is necessary for the performance of the contract between you and PHStartup.org for the use of our platform and services.
                </p>
                <p>
                    b. Consent: We may process certain personal information based on your explicit consent, such as sending you marketing communications or using certain cookies and tracking technologies. You have the right to withdraw your consent at any time.
                </p>
                <p>
                    c. Legitimate Interests: We may process personal information for our legitimate interests, such as improving our services, ensuring the security of our platform, and conducting analytics to enhance user experience. We carefully balance our interests against your rights and freedoms.
                </p>
                <p>
                    B. Non-Personal Information
                </p>
                <p>
                    1. Types of Non-Personal Information Collected
                </p>
                <p>
                    When you interact with PHStartup.org, we may automatically collect certain non-personal information from your device and browser, which may include:
                </p>
                <p>
                    a. IP address
                </p>
                <p>
                    b. Device type
                </p>
                <p>
                    c. Browser type and version
                </p>
                <p>
                    d. Operating system
                </p>
                <p>
                    e. Referring website or platform
                </p>
                <p>
                    f. Date and time of access
                </p>
                <p>
                    g. Clickstream data and website usage patterns
                </p>
                <p>
                    2. Purpose of Collection
                </p>
                <p>
                    Non-personal information is collected for analytical purposes and to enhance the performance and functionality of PHStartup.org. This information helps us understand user preferences, improve user experience, and identify and resolve technical issues.
                </p>
                <p>
                    3. Cookies and Tracking Technologies
                </p>
                <p>
                    We use cookies and similar tracking technologies to collect and store non-personal information automatically. Cookies are small data files that are placed on your device when you access our platform. They help us recognize your browser and capture certain information to enhance your user experience. You have the option to modify your browser settings to accept or reject cookies or receive a notification when cookies are being sent. However, please note that disabling cookies may limit certain features or functionalities of PHStartup.org.
                </p>
                <p>
                    <strong>III. Use of Information</strong>
                </p>
                <p>
                    A. Personal Information
                </p>
                <p>
                    1. How We Use Personal Information
                </p>
                <p>
                    PHStartup.org uses your personal information for various purposes to provide and improve our platform's services, enhance user experience, and foster collaboration within the Philippine startup ecosystem. The following are the primary ways we use your personal information:
                </p>
                <p>
                    a. Account Management: We use your personal information to create and manage your account on PHStartup.org. This includes verifying your identity, maintaining your account settings, and facilitating your access to our platform.
                </p>
                <p>
                    b. Startup Profiles: For startups, we use the information provided in your startup profile, such as company name, industry, pitch deck, pitch video link, and funding requirements, to showcase your startup to potential investors and government agencies. This allows startups to gain exposure, find collaborators, and apply for funding opportunities with ease.
                </p>
                <p>
                    c. Investor and Government Agency Review: Investors and government agencies may have access to certain personal information of startups, such as pitch decks and funding requirements, to review and assess funding applications and grant opportunities. This allows investors and government agencies to make informed decisions and foster a collaborative startup ecosystem.
                </p>
                <p>
                    d. Communication: We use your contact information to communicate with you regarding your account, respond to your inquiries, and send important platform-related updates and notifications.
                </p>
                <p>
                    e. Platform Improvements: Your feedback and interactions with PHStartup.org may be used to improve our platform's functionalities, user experience, and services.
                </p>
                <p>
                    2. Marketing and Promotional Communications
                </p>
                <p>
                    With your consent, we may use your personal information to send you marketing and promotional communications about PHStartup.org's features, updates, events, and other relevant information. You have the option to manage your communication preferences and opt-out of marketing communications at any time by following the instructions provided in the communication or by contacting us at feedback@phstartup.org.
                </p>
                <p>
                    B. Non-Personal Information
                </p>
                <p>
                    1. How We Use Non-Personal Information
                </p>
                <p>
                    PHStartup.org uses non-personal information primarily for analytical purposes and to optimize the performance of our platform. The following are the main ways we use non-personal information:
                </p>
                <p>
                    a. Analytics: We analyze non-personal information, such as IP addresses, device types, and website usage patterns, to understand user preferences, track user interactions, and identify areas for improvement.
                </p>
                <p>
                    b. Platform Optimization: Non-personal information helps us optimize our platform's functionalities, troubleshoot technical issues, and ensure smooth navigation for users.
                </p>
                <p>
                    2. Analytics and Platform Improvement
                </p>
                <p>
                    Through analytics, we aim to enhance the overall user experience, customize content, and provide relevant recommendations to startups, businesses, investors, and other users. By analyzing non-personal information, we can continually refine and evolve PHStartup.org to better serve the needs of our users.
                </p>
                <p>
                    <strong>IV. Information Sharing and Disclosure</strong>
                </p>
                <p>
                    A. Sharing with Startups, Investors, and Government Agencies
                </p>
                <p>
                    PHStartup.org may share certain personal information with startups, investors, and government agencies to facilitate collaboration, funding opportunities, and business connections within the Philippine startup ecosystem. The following are the key points regarding information sharing with these stakeholders:
                </p>
                <p>
                    1. Startups: We may share information from startup profiles, including company names, industries, pitch decks, pitch video links, and funding requirements, with potential investors and government agencies. This allows startups to gain exposure and access opportunities for funding and growth.
                </p>
                <p>
                    2. Investors: Investors on our platform may have access to certain personal information of startups to review and assess funding applications. By providing necessary details, investors can make informed decisions on potential investment opportunities.
                </p>
                <p>
                    3. Government Agencies: Certain personal information, especially for government grant applications, may be shared with relevant government agencies to streamline the application process and foster support for startups in the Philippines.
                </p>
                <p>
                    B. Service Providers
                </p>
                <p>
                    PHStartup.org may engage third-party service providers to assist in delivering our services and maintaining our platform's functionality. These service providers have access to personal information solely for the purpose of providing the requested services and are bound by confidentiality agreements. Examples of such service providers include hosting services, IT support, payment processors, and analytics providers.
                </p>
                <p>
                    C. Legal Requirements and Protection
                </p>
                <p>
                    PHStartup.org may disclose personal information when required by law, legal process, or government authorities, including in response to a valid and enforceable request or court order. We may also disclose personal information to protect the rights, property, or safety of PHStartup.org, our users, or others.
                </p>
                <p>
                    D. Business Transfers
                </p>
                <p>
                    In the event of a merger, acquisition, sale, or other transfer of all or part of PHStartup.org's assets, personal information may be transferred to the acquiring entity. We will take reasonable steps to ensure that the receiving party adheres to the terms of this Privacy Policy.
                </p>
                <p>
                    PHStartup.org does not sell, rent, or trade personal information to third parties for their direct marketing purposes.
                </p>
                <p>
                    <strong>V. User Contributions</strong>
                </p>
                <p>
                    A. License to PHStartup.org
                </p>
                <p>
                    When users provide content, information, or materials to PHStartup.org, they grant us a worldwide, royalty-free, perpetual, irrevocable, and non-exclusive license to use, reproduce, modify, adapt, publish, translate, distribute, publicly perform and display, and create derivative works from such user contributions. This license allows PHStartup.org to showcase startup profiles, pitch decks, and other user-generated content to potential investors and government agencies for collaboration and funding opportunities.
                </p>
                <p>
                    By submitting user contributions, users affirm that they have the necessary rights, permissions, and consents to grant this license to PHStartup.org, and that such contributions do not infringe upon the intellectual property rights or violate any applicable laws or regulations.
                </p>
                <p>
                    B. User Representations and Warranties
                </p>
                <p>
                    Users represent and warrant that:
                </p>
                <p>
                    1. All information provided to PHStartup.org is accurate, complete, and up-to-date to the best of their knowledge.
                </p>
                <p>
                    2. They have the legal right to submit the user contributions to PHStartup.org and grant the license as described in Section V.A. The user contributions do not infringe upon any third-party rights, including intellectual property rights, privacy rights, or contractual rights.
                </p>
                <p>
                    3. They will not submit any content that is false, misleading, defamatory, obscene, harmful, or otherwise inappropriate or illegal.
                </p>
                <p>
                    4. They will comply with all applicable laws, regulations, and the terms and conditions of PHStartup.org while using the platform and providing user contributions.
                </p>
                <p>
                    5. They have obtained any necessary consent or authorization from individuals mentioned in their user contributions for the collection, use, and disclosure of their personal information.
                </p>
                <p>
                    6. They will not engage in any unauthorized or unlawful activities while using PHStartup.org, including but not limited to hacking, spamming, or phishing.
                </p>
                <p>
                    PHStartup.org reserves the right to remove any user contributions that violate these representations and warranties or are deemed inappropriate or harmful to the platform or its users.
                </p>
                <p>
                    <strong>VI. Data Security</strong>
                </p>
                <p>
                    A. Security Measures
                </p>
                <p>
                    PHStartup.org takes data security seriously and implements reasonable and appropriate technical, physical, and organizational measures to safeguard the personal information we collect and store. Our security measures aim to protect against unauthorized access, disclosure, alteration, or destruction of your personal information. Some of the security measures we have in place include:
                </p>
                <p>
                    1. Encryption: We use encryption technology to protect the transmission of sensitive data between your device and our servers.
                </p>
                <p>
                    2. Secure Access: Access to personal information is restricted to authorized personnel only, and we employ authentication mechanisms to control access to our systems.
                </p>
                <p>
                    3. Regular Audits: We conduct regular security audits and assessments to identify and address potential vulnerabilities.
                </p>
                <p>
                    4. Secure Data Storage: Personal information is stored on secure servers with restricted access, housed in controlled facilities.
                </p>
                <p>
                    5. Security Training: Our employees and authorized personnel undergo security training to ensure the protection of personal information.
                </p>
                <p>
                    B. User Responsibilities
                </p>
                <p>
                    While PHStartup.org takes measures to ensure data security, users also play a vital role in maintaining the security of their accounts and personal information. We advise users to:
                </p>
                <p>
                    1. Keep Credentials Confidential: Users are responsible for safeguarding their login credentials and not sharing them with others.
                </p>
                <p>
                    2. Use Strong Passwords: Users should create strong and unique passwords for their accounts, combining uppercase and lowercase letters, numbers, and special characters.
                </p>
                <p>
                    3. Regularly Update Information: Users should promptly update their account information if there are changes or corrections needed.
                </p>
                <p>
                    4. Log Out Properly: Users should log out of their accounts and close their browsers when accessing PHStartup.org from shared or public devices.
                </p>
                <p>
                    5. Be Cautious with Links: Users should exercise caution when clicking on links from unknown or suspicious sources, as they may lead to phishing attempts.
                </p>
                <p>
                    C. Limitations of Online Security
                </p>
                <p>
                    While we implement reasonable security measures, it is important to note that no method of data transmission or storage is entirely secure. Despite our efforts to protect personal information, we cannot guarantee the security of information transmitted to or from PHStartup.org, and users do so at their own risk.
                </p>
                <p>
                    If users believe their account security has been compromised or suspect unauthorized access, they should immediately notify us at feedback@phstartup.org.
                </p>
                <p>
                    <strong>VII. Third-Party Links and External Resources</strong>
                </p>
                <p>
                    A. Links to Third-Party Websites
                </p>
                <p>
                    PHStartup.org may contain links to third-party websites, which are provided for your convenience and reference. These third-party websites have their own privacy policies, which may differ from ours. We do not have control over the content, practices, or policies of these external websites, and we are not responsible for their privacy practices.
                </p>
                <p>
                    When you click on a third-party link on PHStartup.org, you may be redirected to the third-party website. We encourage you to review the privacy policy of any website you visit outside of PHStartup.org to understand how your personal information will be collected, used, and disclosed by that website.
                </p>
                <p>
                    B. Third-Party Services and Applications
                </p>
                <p>
                    PHStartup.org may integrate or offer third-party services, applications, or plugins to enhance user experience and platform functionalities. These third-party services may have their own privacy policies and terms of use. Please be aware that interactions with these third-party services are governed by their respective policies and not by PHStartup.org's Privacy Policy.
                </p>
                <p>
                    We strive to partner with reputable and trusted third-party providers. However, we do not endorse, warrant, or guarantee the quality, safety, or reliability of any third-party services or applications. Users are encouraged to exercise caution and review the terms and policies of third-party providers before using their services through PHStartup.org.
                </p>
                <p>
                    Please note that any data you choose to share with third-party services accessed through PHStartup.org is subject to the third-party's privacy practices and policies. We are not responsible for the privacy practices of third-party services or the content provided by them.
                </p>
                <p>
                    If you encounter any issues or concerns related to third-party links or services on PHStartup.org, please contact us at feedback@phstartup.org.
                </p>
                <p>
                    <strong>VIII. Children's Privacy</strong>
                </p>
                <p>
                    A. Age Requirement
                </p>
                <p>
                    PHStartup.org is not intended for use by individuals under the age of 18. We do not knowingly collect or solicit personal information from anyone under the age of 18. If we become aware that we have inadvertently collected personal information from a child under the age of 18, we will take steps to delete the information as soon as possible.
                </p>
                <p>
                    If you are under the age of 18, please do not use PHStartup.org or provide any personal information through the platform. If you believe that a child under the age of 18 has provided personal information to us, please contact us immediately at feedback@phstartup.org, and we will promptly delete the information.
                </p>
                <p>
                    B. Parental Consent
                </p>
                <p>
                    If you are a parent or legal guardian and become aware that your child under the age of 18 has provided personal information to PHStartup.org without your consent, please contact us at feedback@phstartup.org. We will take appropriate measures to verify the information and, if applicable, delete the information promptly.
                </p>
                <p>
                    We encourage parents and guardians to monitor their children's online activities and participate in their online experiences to ensure their safety and privacy.
                </p>
                <p>
                    <strong>IX. Choices and Rights</strong>
                </p>
                <p>
                    A. Accessing and Updating Personal Information
                </p>
                <p>
                    PHStartup.org provides users with the right to access and update their personal information. If you wish to review, correct, or update any of the personal information we have collected about you, you can do so by logging into your account and accessing the relevant settings. If you encounter any difficulties or require further assistance, please contact us at feedback@phstartup.org, and we will promptly assist you with your request.
                </p>
                <p>
                    B. Opt-Out of Marketing Communications
                </p>
                <p>
                    Users have the option to opt-out of receiving marketing and promotional communications from PHStartup.org. If you no longer wish to receive such communications, you can update your communication preferences through your account settings or by following the unsubscribe instructions provided in the communication. Alternatively, you can contact us at feedback@phstartup.org, and we will update your preferences accordingly.
                </p>
                <p>
                    Please note that even if you opt-out of marketing communications, you may still receive important non-marketing messages related to your account and platform updates.
                </p>
                <p>
                    C. Data Portability
                </p>
                <p>
                    Users have the right to request a copy of their personal information in a commonly used and machine-readable format. If you would like to receive a copy of your personal information for data portability purposes, please contact us at feedback@phstartup.org, and we will process your request within a reasonable timeframe.
                </p>
                <p>
                    D. Right to be Forgotten
                </p>
                <p>
                    Users may request the deletion of their personal information from PHStartup.org under certain circumstances. If you wish to exercise your right to be forgotten, please contact us at feedback@phstartup.org, and we will promptly assess your request in accordance with applicable laws and our data retention policies. Please note that certain information may be retained for legal or legitimate business purposes, such as compliance with legal obligations, resolving disputes, or enforcing our terms and conditions.
                </p>
                <p>
                    Please be aware that while we will make reasonable efforts to comply with your request, there may be situations where we are legally or contractually obligated to retain certain personal information, and your request may not be fully granted.
                </p>
                <p>
                    <strong>X. Changes to the Privacy Policy</strong>
                </p>
                <p>
                    A. Notification of Changes
                </p>
                <p>
                    PHStartup.org may update this Privacy Policy from time to time to reflect changes in our practices, services, or applicable laws. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your personal information.
                </p>
                <p>
                    When we make significant changes to this Privacy Policy, we will notify users through prominent notice on the PHStartup.org website or via email to the email address associated with their accounts. By continuing to use PHStartup.org after the updated Privacy Policy becomes effective, you acknowledge and agree to the revised terms.
                </p>
                <p>
                    It is essential to review any updates or modifications to this Privacy Policy to understand how your personal information may be affected. If you disagree with any changes to this Privacy Policy, please refrain from using PHStartup.org and contact us at feedback@phstartup.org to discuss your concerns.
                </p>
                <p>
                    We will always post the most current version of the Privacy Policy on this page, along with the effective date of the latest revision.
                </p>
                <p>
                    <strong>XI. Contact Information</strong>
                </p>
                <p>
                    A. How to Contact Us
                </p>
                <p>
                    If you have any questions, concerns, or feedback regarding our Privacy Policy or the practices of PHStartup.org, please feel free to contact us using the following contact information:
                </p>
                <p>
                    Email: [feedback@phstartup.org]
                </p>
                <p>
                    Phone: [(+63 32) 520-1234]
                </p>
                <p>
                    Mailing Address: [1234 Asiatown IT Park, Cebu City]
                </p>
                <p>
                    Our team is dedicated to addressing your inquiries and providing the necessary support in a timely manner. We value your privacy and are committed to ensuring the protection of your personal information.
                </p>
                <p>
                    B. Reporting Privacy Concerns or Data Breaches
                </p>
                <p>
                    If you believe there has been a breach of your privacy or data security, or if you have any concerns related to the handling of your personal information on PHStartup.org, please contact us immediately using the contact information provided above.
                </p>
                <p>
                    Upon receiving your report, we will promptly investigate the matter and take appropriate actions to address any potential issues. We are committed to handling privacy concerns and data breaches in accordance with applicable laws and regulations.
                </p>
                <p>
                    <strong>XII. Governing Law and Dispute Resolution</strong>
                </p>
                <p>
                    A. Governing Law
                </p>
                <p>
                    The privacy practices outlined in this Privacy Policy and the use of PHStartup.org shall be governed by and construed in accordance with the laws of the Philippines. By accessing and using PHStartup.org, you agree that any dispute, claim, or cause of action arising out of or related to the platform or this Privacy Policy shall be subject to the exclusive jurisdiction of the courts located in the Philippines.
                </p>
                <p>
                    B. Dispute Resolution
                </p>
                <p>
                    In the event of any dispute or disagreement arising from or related to this Privacy Policy or your use of PHStartup.org, we encourage you to contact us at feedback@phstartup.org to attempt to resolve the matter informally. We are committed to addressing your concerns and finding a satisfactory resolution.
                </p>
                <p>
                    If an informal resolution is not possible, any dispute, claim, or cause of action shall be resolved through binding arbitration in accordance with the rules and procedures of a recognized arbitration institution located in the Philippines. The decision of the arbitrator shall be final and binding on both parties.
                </p>
                <p>
                    By using PHStartup.org, you waive any right to participate in a class action lawsuit or class-wide arbitration. You also agree that any claim, dispute, or cause of action shall be brought on an individual basis and not consolidated with any other party's claims, disputes, or causes of action.
                </p>
                <p>
                    Any arbitration or legal proceedings related to this Privacy Policy must be initiated within one (1) year after the cause of action arises. Failure to bring such proceedings within this time frame shall result in the waiver of such claim or cause of action.
                </p>
                <p>
                    <strong>XIII. Miscellaneous</strong>
                </p>
                <p>
                    A. Entire Agreement
                </p>
                <p>
                    This Privacy Policy, together with the Terms and Conditions of PHStartup.org, constitutes the entire agreement between you and PHStartup.org concerning the collection, use, and protection of your personal information. It supersedes any prior agreements, communications, or understandings, whether oral or written, relating to the subject matter herein.
                </p>
                <p>
                    B. Severability
                </p>
                <p>
                    If any provision of this Privacy Policy is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be deemed severed from the Privacy Policy, and the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
                </p>
                <p>
                    C. Waiver
                </p>
                <p>
                    The failure of PHStartup.org to enforce any right or provision of this Privacy Policy shall not constitute a waiver of such right or provision. Any waiver of any provision of this Privacy Policy shall be effective only if it is in writing and signed by an authorized representative of PHStartup.org.
                </p>
                <p>
                    D. Assignment
                </p>
                <p>
                    You may not assign or transfer any of your rights or obligations under this Privacy Policy without the prior written consent of PHStartup.org. PHStartup.org may freely assign or transfer its rights and obligations under this Privacy Policy to any third party without notice or consent.
                </p>
                <p>
                    E. Contact Information
                </p>
                <p>
                    If you have any questions, concerns, or feedback related to this Privacy Policy, the practices of PHStartup.org, or any other aspect of our platform, please feel free to contact us at:
                </p>
                <p>
                    Email: feedback@phstartup.org
                </p>
                <p>
                    Phone: [(+63 32) 520-1234]
                </p>
                <p>
                    Mailing Address: [1234 Asiatown IT Park, Cebu City]
                </p>
                <p>
                    We value your privacy and are committed to addressing your inquiries and providing the necessary support in a timely and efficient manner.
                </p>
            </div>
        </div>
    );
}

export default Page;