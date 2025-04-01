import React from "react";
import { Row, Col } from "react-bootstrap";
import ScrollToTop from '../Common/ScrollToTop'
import Section from "../Common/Section"; // Assuming you have a Section component for structure
import "./Privacy.css";
import Footer from "./Footer";

export default function Privacy({ id }) {
  const content = (
    <div className="privacy-container">
      <ScrollToTop/>
      <Row className="justify-content-center privacy-container-row">
        <Col xs={12} sm={10} md={8} lg={6}>
          <h1 className="privacy-heading">Privacy Policy</h1>

          <p>
            At Aqua Bayonne, accessible from aquabayonne.com, one of our main
            priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and recorded
            by Aqua Bayonne and how we use it. If you have additional questions
            or require more information about our Privacy Policy, do not hesitate
            to contact us. This Privacy Policy applies only to our online
            activities and is valid for visitors to our website with regards to
            the information that they shared and/or collect in Aqua Bayonne. This
            policy is not applicable to any information collected offline or via
            channels other than this website.
          </p>

          <h2 className="privacy-section-heading">Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>

          <h2 className="privacy-section-heading">Information We Collect</h2>
          <p>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you at
            the point we ask you to provide your personal information. If you
            contact us directly, we may receive additional information about you
            such as your name, email address, phone number, the contents of the
            message and/or attachments you may send us, and any other information
            you may choose to provide. When you register for an Account, we may
            ask for your contact information, including items such as name,
            company name, address, email address, and telephone number.
          </p>

          <h2 className="privacy-section-heading">How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2 className="privacy-section-heading">Log Files</h2>
          <p>
            Aqua Bayonne follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies do
            this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering the
            site, tracking users' movement on the website, and gathering
            demographic information.
          </p>

          <h2 className="privacy-section-heading">Cookies and Web Beacons</h2>
          <p>
            Like any other website, Aqua Bayonne uses 'cookies'. These cookies
            are used to store information including visitors' preferences, and the
            pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information.
          </p>

          <h2 className="privacy-section-heading">Advertising Partners Privacy Policies</h2>
          <p>
            Third-party ad servers or ad networks uses technologies like cookies,
            JavaScript, or Web Beacons that are used in their respective
            advertisements and links that appear on Aqua Bayonne, which are sent
            directly to users' browser. They automatically receive your IP address
            when this occurs. These technologies are used to measure the
            effectiveness of their advertising campaigns and/or to personalize the
            advertising content that you see on websites that you visit. Note that
            Aqua Bayonne has no access to or control over these cookies that are
            used by third-party advertisers.
          </p>

          <h2 className="privacy-section-heading">Third Party Privacy Policies</h2>
          <p>
            Aqua Bayonne's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective Privacy
            Policies of these third-party ad servers for more detailed information.
            It may include their practices and instructions about how to opt-out of
            certain options. You can choose to disable cookies through your
            individual browser options. To know more detailed information about
            cookie management with specific web browsers, it can be found at the
            browsers' respective websites.
          </p>

          <h2 className="privacy-section-heading">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p>
            Under the CCPA, among other rights, California consumers have the
            right to: Request that a business that collects a consumer's personal
            data disclose the categories and specific pieces of personal data that
            a business has collected about consumers. Request that a business delete
            any personal data about the consumer that a business has collected.
            Request that a business that sells a consumer's personal data, not sell
            the consumer's personal data. If you make a request, we have one month
            to respond to you. If you would like to exercise any of these rights,
            please contact us.
          </p>

          <h2 className="privacy-section-heading">GDPR Data Protection Rights</h2>
          <p>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>
          <ul>
            <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
            <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
            <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
            <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
            <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          </ul>

          <p>
            If you make a request, we have one month to respond to you. If you would
            like to exercise any of these rights, please contact us.
          </p>

          <h2 className="privacy-section-heading">Children's Information</h2>
          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity. Aqua
            Bayonne does not knowingly collect any Personal Identifiable Information
            from children under the age of 13. If you think that your child provided
            this kind of information on our website, we strongly encourage you to
            contact us immediately and we will do our best efforts to promptly remove
            such information from our records.
          </p>
        </Col>
      </Row>
      <Footer />
    </div>
  );

  // Conditionally wrap with Section if `id` is passed in
  return id ? <Section id={id}>{content}</Section> : content;
}
