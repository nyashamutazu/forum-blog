import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TermsAndConditions extends Component {

    render() {
        const style = {
            'text-align': 'left'
        }
        return (
            <main className="main">
            <div className="container" style={style}>
              <h1 className="heading__primary">Privacy and Terms</h1>
              <h2 className="heading__secondary">Cookie / Privacy Policy</h2>
              <p className="paragraph__text">
                This Statement of Privacy applies to the website (the
                Website) and governs data collection, processing and usage. By using
                the Website, you consent to {this.props.appName} data practices described in this
                statement. If you do not agree to any part of this Statement of
                Privacy, then you should stop accessing the Website.
              </p>
              <p className="heading__secondary">Definitions</p>
              <p className="paragraph__text">
                Capitalised terms in this Policy have the following meanings:
                <br />
                “Customer” means a prospective, current or former customer of {this.props.appName}.
                The term shall also include any individual agent, employee,
                representative, customer or client of {this.props.appName} where {this.props.appName} has obtained
                his or her Personal Data from such Customer as part of its business
                relationship with the Customer.
                <br />
                “Data Subject” means an identified or identifiable natural living
                person about whom Personal Data is being processed.
                <br />
                “Employee” means an employee (whether temporary, permanent, part-time
                or contract) of {this.props.appName} An employee may be a resident of a country
                within the European Economic area.
                <br />
                “Europe” or “European” refers to a country in the European Economic
                Area.
                <br />
                “Personal Data” as defined under the European Union Directive
                95/46/EC, Personal Data means data that personally identifies or may
                be used to personally identify a person, including an individual’s
                name in combination with country of birth, marital status, emergency
                contact, salary information, terms of employment, job qualifications
                (such as educational degrees earned), address, phone number, e-mail
                address and password. Personal Data does not include data that is
                de-identified, anonymous, or publicly available. For Switzerland, the
                term “person” includes a natural person and a legal entity, regardless
                of the form of the legal entity.
                <br />
                “Sensitive Data” means Personal Data that discloses a Data Subject’s
                medical or health condition, race or ethnicity, political, religious
                affiliations, sexual orientation, or trade union membership. <br />
                “Third Party” means any individual or entity that is neither {this.props.appName}
                nor a {this.props.appName} employee, agent, contractor or representative. <br />
              </p>
      
              <p className="heading__secondary">Collection Of Your Personal Data</p>
              <p className="paragraph__text">
                {this.props.appName} may collect and process Personal Data, such as your e-mail
                address, name, home or work address or telephone number. If you
                purchase {this.props.appName} products and services, we may collect and store
                billing and credit card information. {this.props.appName} may also collect anonymous
                demographic information which is not unique to you, such as your
                postal code, age, gender, preferences, interests and favourites.
                Information about your computer hardware and software also may be
                automatically collected by the Website. This information can include
                your IP address, browser type, domain names, access times and
                referring website addresses. This information is used by {this.props.appName} for
                the operation of the service, to maintain quality of the service and
                to provide general statistics regarding use of the Website. Please
                keep in mind that if you directly disclose Personal Data or Sensitive
                Data through the Website’s public message boards, this information may
                be collected and used by others. {this.props.appName} encourages you to review the
                privacy statements of websites you choose to link to from the Website,
                so that you can understand how those websites collect, use and share
                your information. {this.props.appName} is not responsible for the privacy statements
                or other content on websites outside of the {this.props.appName} family of websites.
              </p>
              <p className="heading__secondary">Use Of Your Personal Data</p>
              <p className="paragraph__text">
                {this.props.appName} collects and uses your Personal Data to operate the Website and
                deliver the services. {this.props.appName} will send one welcome email following
                registration to all registered users. We will also periodically send
                service updates to registered users. {this.props.appName} may also use your Personal
                Data to inform you of other products or services available from {this.props.appName}
                and its affiliates, where you have consented to be contacted for such
                purposes. {this.props.appName} may also contact you via surveys to conduct research
                about your opinion of current services or of potential new services
                that may be offered, although you do not have to respond to such
                surveys.
              </p>
              <p className="heading__secondary">Storage Of Personal Data</p>
              <p className="paragraph__text">
                As part of the services offered to you through the Website, the
                information you provide to us may be transferred to and stored in
                countries outside of the European Economic Area (EEA). It may also be
                processed by Employees operating outside the EEA who work for us or
                one of our suppliers. By way of example, a transfer of your
                information may happen if any of our servers are located in a country
                outside of the EEA or one of our service providers is located in a
                country outside of the EEA. If we transfer or store your information
                outside the EEA in this way, we will take all steps reasonably
                necessary to ensure that your privacy rights continue to be protected
                and treated securely as outlined in this Statement. If you use our
                service while you are outside the EEA, your information may be
                transferred outside the EEA in order to provide you with these
                services. By submitting your Personal Data, you agree to this
                transfer, storing or processing by us. Unfortunately, the transmission
                of information via the internet is not completely secure. Although we
                will do our best to protect your Personal Data, we cannot guarantee
                the security of your data transmitted to our site; any transmission is
                at your own risk. Once we have received your information, we will use
                strict procedures and security features to try to prevent unauthorised
                access. {this.props.appName} keeps track of the websites and pages our customers
                visit within the Website, in order to determine what website services
                are the most popular. This data is used to deliver customised content
                and advertising within the Website to customers whose behaviour
                indicates that they are interested in a particular subject area. NM
                Ltd will disclose or share your personal information, without notice,
                only if required to do so by law or in the good faith belief that such
                action is necessary to: (a) comply with any legal requirements or
                comply with legal process served on the Website; (b) protect and
                defend the rights or property of {this.props.appName}; and, (c) act under exigent
                circumstances to protect the personal safety of users of the Website,
                or the general public. {this.props.appName} may disclose your Personal Data to any
                member of our group, which means our subsidiaries, our ultimate
                holding company and its subsidiaries.
              </p>
              <p className="heading__secondary">
                Discolsures/ Onward Transfers Of Personal Data
              </p>
              <p className="paragraph__text">
                {this.props.appName} does not sell, rent or lease its customer lists to Third
                Parties. {this.props.appName} may, from time to time, contact you on behalf of
                external business partners about a particular offering that may be of
                interest to you. In those cases, your Personal Data is not transferred
                to the Third Party without your express consent. In addition, {this.props.appName}
                may share data with trusted partners to help us perform statistical
                analysis, send you email or postal mail, provide customer support, or
                arrange for deliveries. {this.props.appName} may share your information with Third
                Parties who perform tasks required to complete a purchase transaction.
                All such Third Parties are prohibited from using your Personal Data
                except to provide these services to the Website, and they are required
                to maintain the confidentiality of your information by agreeing to
                provide adequate protections for the Personal Data that are no less
                protective than those set out in this Statement. We may disclose your
                Personal Data to Third Parties: (a) in the event that we sell or buy
                any business or assets, in which case we may disclose your Personal
                Data to the prospective seller or buyer of such business or assets;
                and (b) if the Website or substantially all of its assets are acquired
                by a Third Party, in which case, Personal Data held by it about its
                Customers will be one of the transferred assets.
              </p>
      
              <p className="heading__secondary">Sensitive Data</p>
              <p className="paragraph__text">
                Sensitive Data is any sensitive data relating to you, including
                information about your political opinion, religious beliefs or any
                other beliefs of a similar nature. {this.props.appName} will not process Sensitive
                Data about you without your express consent.
              </p>
      
              <p className="heading__secondary">Use of cookies</p>
              <p className="paragraph__text">
                The Website uses “cookies” to help you personalise your online
                experience. A cookie is a text file that is placed on your hard drive
                by a web page server. Cookies cannot be used to run programs or
                deliver viruses to your computer. Cookies are uniquely assigned to
                you, and can only be read by a web server in the domain that issued
                the cookie to you. One of the primary purposes of cookies is to
                provide a convenience feature to save you time. The purpose of a
                cookie is to tell the server that you have returned to a specific
                page. For example, if you personalise the Website pages, or register
                with the Website site or services, a cookie helps the Website to
                recall your specific information on subsequent visits. This simplifies
                the process of recording your personal information, such as billing
                addresses, shipping addresses, and so on. When you return to the same
                the Website, the information you previously provided can be retrieved,
                so you can easily use the Website features that you customised. We may
                use any of the following cookies:
              </p>
              <ul>
                <li>
                  <p className="paragraph__text">
                    Strictly necessary cookies. These are cookies that are required
                    for the operation of the Website. They include, for example,
                    cookies that enable you to log into secure areas of our website,
                    use a shopping cart or make use of e-billing services.
                  </p>
                </li>
                <li>
                  <p className="paragraph__text">
                    Analytical/performance cookies. They allow us to recognise and
                    count the number of visitors and to see how visitors move around
                    the Website when they are using it. This helps us to improve the
                    way our website works, for example, by ensuring that users are
                    finding what they are looking for easily.
                  </p>
                </li>
                <li>
                  <p className="paragraph__text">
                    Functionality cookies. These are used to recognise you when you
                    return to the Website. This enables us to personalise our content
                    for you, greet you by name and remember your preferences (for
                    example, your choice of language or region).
                  </p>
                </li>
                <li>
                  <p className="paragraph__text">
                    Targeting cookies. These cookies record your visit to the Website,
                    the pages you have visited and the links you have followed. We
                    will use this information to make our website and the advertising
                    displayed on it more relevant to your interests. We may also share
                    this information with third parties for this purpose.
                  </p>
                </li>
              </ul>
              <p className="paragraph__text">
                Please note that third parties (including, for example, advertising
                networks and providers of external services like web traffic analysis
                services) may also use cookies, over which we have no control. These
                cookies are likely to be analytical/performance cookies or targeting
                cookies. Most web browsers automatically accept cookies, but you can
                usually modify your browser setting to decline cookies if you prefer.
                If you choose to decline cookies, you may not be able to access all or
                parts of our site or to fully experience the interactive features of
                the {this.props.appName} services or websites you visit.
              </p>
              <p className="heading__secondary">Data Security &amp; Integrity</p>
              <p className="paragraph__text">
                Any and all personal information that we may collect will be
                collected, used and held in accordance with the provisions of General
                Data Protection Regulation (EU 2016/679) and your rights and Our
                obligations under that Act. The Website secures your Personal Data
                from unauthorised access, use or disclosure. The Website secures the
                Personal Data you provide on computer servers in a controlled, secure
                environment, protected from unauthorised access, use or disclosure.
                When personal information (such as a credit card number) is
                transmitted to other websites, it is protected through the use of
                encryption, such as the Secure Socket Layer (SSL) protocol. Where we
                have given you (or where you have chosen) a password which enables you
                to access certain parts of our site, you are responsible for keeping
                this password confidential. We ask you not to share a password with
                anyone.
              </p>
              <p className="heading__secondary">Your Rights</p>
              <p className="paragraph__text">
                You have the right to ask us not to process your Personal Data for
                marketing purposes. We will usually inform you (before collecting your
                data) if we intend to use your data for such purposes or if we intend
                to disclose your information to any third party for such purposes. You
                can exercise your right to prevent such processing by checking certain
                boxes on the forms we use to collect your data. You can also exercise
                the right at any time by contacting us at privacy@nm-ltd.co.uk .
              </p>
      
              <p className="heading__secondary">
                Right To Access, Change or Delete Personal Data
              </p>
              <p className="paragraph__text">
                Right to access: the Act gives Data Subjects the right to access
                information held about them, to ensure that such Personal Data is
                accurate and relevant for the purposes for which the Website collected
                the data. You may review your Personal Data stored in the Website
                databases and correct, erase or block any data that is incorrect, as
                permitted by applicable law. Your right of access can be exercised in
                accordance with the Act. You may edit your Personal Data by logging
                into your account or by contacting us by phone or email. In making
                modifications to your Personal Data, you must provide only truthful,
                complete and accurate information. Satisfying Requests for Access,
                Modifications, and Corrections: we will endeavour to respond in a
                timely manner to all reasonable written requests to view, modify, or
                inactivate Personal Data. Employees: {this.props.appName} Employees may access and
                use Personal Data only if they are authorised to do so and only for
                the purpose for which they are authorised.
              </p>
              <p className="heading__secondary">Changes To This Statement</p>
              <p className="paragraph__text">
                {this.props.appName} will occasionally update this Statement of Privacy to reflect
                company and customer feedback. {this.props.appName} encourages you to periodically
                review this Statement to be informed of how {this.props.appName} is protecting your
                information.
              </p>
              <p className="heading__secondary">Contact Information</p>
              <p className="paragraph__text">
                {this.props.appName} welcomes your comments regarding this Statement of Privacy. If
                you believe that the Website has not adhered to this Statement of
                Privacy, please contact us at privacy@nm-ltd.co.uk.
              </p>
              <h2 className="heading__secondary">Terms &amp; Conditions</h2>
              <p className="paragraph__text">
                This website is the IPR (Intellectual Property Rights) of {this.props.appName}.
              </p>
              <p className="paragraph__text">
                By using this website, you are agreeing to the following terms and
                conditions and these take effect from the first visit and use of our
                domain/s.
              </p>
              <p className="paragraph__text">
                Any material featured on this site is subject to {this.props.appName}’s copyright
                protection. You cannot reproduce any of this copyrighted material
                without prior consent or written authorisation from a director of NM
                Ltd. When copyrighted items are being republished on any print, online
                or TV/Radio broadcasts you must identify the source of the material
                and the original owner of the copyright. This permission does not
                cover any material on the site which is identified as copyright of a
                third party as you must receive written permission from them to
                reproduce that specific content.
              </p>
              <p className="paragraph__text">
                {this.props.appName} has no control of, or responsibility for, the content of our
                client’s web sites. In no way does the textual or image-based content
                of our client’s web sites constitute {this.props.appName} endorsement, or approval
                of the web site or the material contained within the web site.
              </p>
              <p className="paragraph__text">
                {this.props.appName} has not verified any of the materials, images or information
                contained within our client’s web sites and is not responsible for the
                content or performance of these sites or for the client’s transactions
                with them. {this.props.appName} provides links or references to our client’s
                websites solely for the convenience of prospective customers and
                intends that the links it provides be current and accurate, but we do
                not guarantee or warrant that such links will point to the intended
                client site at all times.
              </p>
              <p className="paragraph__text">
                {this.props.appName} cannot accept any responsibility for loss or damage to your
                data or computer system which may occur whilst using material from our
                website/domains or external links that you have visited from our
                website. {this.props.appName} cannot be held responsible for anything adversely
                affecting the customer or site visitor’s business operation, sales, or
                profitability that they might claim because of accessing any of our
                domains, affiliated links or a service provided by {this.props.appName}
              </p>
              <p className="paragraph__text">
                All products, including interfaces, navigational devices, menus, menu
                structures or arrangements, icons, help, all operational instructions,
                scripts, applications, software, programming/source code, and all
                other components of any source or object computer code that comprises
                this Website. All literal and non-literal expressions of ideas that
                operate, cause, create, direct, manipulate, access, or otherwise
                affect the content and design elements used or developed and all
                software, and our products and results of our services remain the
                property of {this.props.appName} and we retain full ownership rights and all
                intellectual property rights.
              </p>
              <p className="paragraph__text">
                You specifically agree not do anything that may in any way infringe
                upon or undermine {this.props.appName} rights, title, or interest in this website or
                our products and services. This includes, but is not limited to, any
                sale, transfer or gift of the whole or of any part of any item, data
                or anything whatsoever that {this.props.appName} own. You fully understand that NM
                Ltd may reproduce, reuse, develop and use in any other way we choose,
                anything within our ownership.
              </p>
            </div>
          </main>
        );
    }
}

const mapStateToProps = (state) => ({
    appName: state.common.appName
})

const mapDispatchToProps = dipatch => ({
    
})
export default connect(mapStateToProps, mapDispatchToProps)(TermsAndConditions)
