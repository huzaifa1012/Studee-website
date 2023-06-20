import React from "react";
import "../../component/css storation/Login.css";
import { Link } from "react-router-dom";

const Register = () => {
    const countries = [
        { code: "AF", name: "Afghanistan" },
        { code: "AL", name: "Albania" },
        { code: "DZ", name: "Algeria" },
        { code: "AD", name: "Andorra" },
        { code: "AO", name: "Angola" },
        { code: "AI", name: "Anguilla" },
        { code: "AG", name: "Antigua and Barbuda" },
        { code: "AR", name: "Argentina" },
        { code: "AM", name: "Armenia" },
        { code: "AW", name: "Aruba" },
        { code: "AU", name: "Australia" },
        { code: "AT", name: "Austria" },
        { code: "AZ", name: "Azerbaijan" },
        { code: "BS", name: "Bahamas" },
        { code: "BH", name: "Bahrain" },
        { code: "BD", name: "Bangladesh" },
        { code: "BB", name: "Barbados" },
        { code: "BY", name: "Belarus" },
        { code: "BE", name: "Belgium" },
        { code: "BZ", name: "Belize" },
        { code: "BJ", name: "Benin" },
        { code: "BM", name: "Bermuda" },
        { code: "BT", name: "Bhutan" },
        { code: "BO", name: "Bolivia" },
        { code: "BA", name: "Bosnia and Herzegovina" },
        { code: "BW", name: "Botswana" },
        { code: "BR", name: "Brazil" },
        { code: "BN", name: "Brunei Darussalam" },
        { code: "BG", name: "Bulgaria" },
        { code: "BF", name: "Burkina Faso" },
        { code: "BI", name: "Burundi" },
        { code: "KH", name: "Cambodia" },
        { code: "CM", name: "Cameroon" },
        { code: "CA", name: "Canada" },
        { code: "CV", name: "Cape Verde" },
        { code: "KY", name: "Cayman Islands" },
        { code: "CF", name: "Central African Republic" },
        { code: "TD", name: "Chad" },
        { code: "CL", name: "Chile" },
        { code: "CN", name: "China" },
        { code: "CO", name: "Colombia" },
        { code: "KM", name: "Comoros" },
        { code: "CG", name: "Congo" },
        { code: "CD", name: "Congo, Democratic Republic of" },
        { code: "CR", name: "Costa Rica" },
        { code: "CI", name: "Cote d'Ivoire" },
        { code: "HR", name: "Croatia" },
        { code: "CU", name: "Cuba" },
        { code: "CW", name: "Curacao" },
        { code: "CY", name: "Cyprus" },
        { code: "CZ", name: "Czech Republic" },
        { code: "DK", name: "Denmark" },
        { code: "DJ", name: "Djibouti" },
        { code: "DM", name: "Dominica" },
        { code: "DO", name: "Dominican Republic" },
        { code: "EC", name: "Ecuador" },
        { code: "EG", name: "Egypt" },
        { code: "SV", name: "El Salvador" },
        { code: "GQ", name: "Equatorial Guinea" },
        { code: "ER", name: "Eritrea" },
        { code: "EE", name: "Estonia" },
        { code: "ET", name: "Ethiopia" },
        { code: "FK", name: "Falkland Islands (Malvinas)" },
        { code: "FO", name: "Faroe Islands" },
        { code: "FJ", name: "Fiji" },
        { code: "FI", name: "Finland" },
        { code: "FR", name: "France" },
        { code: "GF", name: "French Guiana" },
        { code: "PF", name: "French Polynesia" },
        { code: "GA", name: "Gabon" },
        { code: "GM", name: "Gambia" },
        { code: "GE", name: "Georgia" },
        { code: "DE", name: "Germany" },
        { code: "GH", name: "Ghana" },
        { code: "GI", name: "Gibraltar" },
        { code: "GR", name: "Greece" },
        { code: "GL", name: "Greenland" },
        { code: "GD", name: "Grenada" },
        { code: "GP", name: "Guadeloupe" },
        { code: "GT", name: "Guatemala" },
        { code: "GN", name: "Guinea" },
        { code: "GW", name: "Guinea-Bissau" },
        { code: "GY", name: "Guyana" },
        { code: "HT", name: "Haiti" },
        { code: "VA", name: "Holy See (Vatican City State)" },
        { code: "HN", name: "Honduras" },
        { code: "HK", name: "Hong Kong" },
        { code: "HU", name: "Hungary" },
        { code: "IS", name: "Iceland" },
        { code: "IN", name: "India" },
        { code: "ID", name: "Indonesia" },
        { code: "IR", name: "Iran, Islamic Republic of" },
        { code: "IQ", name: "Iraq" },
        { code: "IE", name: "Ireland" },
        { code: "IM", name: "Isle of Man" },
        { code: "IL", name: "Israel" },
        { code: "IT", name: "Italy" },
        { code: "JM", name: "Jamaica" },
        { code: "JP", name: "Japan" },
        { code: "JO", name: "Jordan" },
        { code: "KZ", name: "Kazakhstan" },
        { code: "KE", name: "Kenya" },
        { code: "KI", name: "Kiribati" },
        { code: "KP", name: "Korea, Democratic People's Republic of" },
        { code: "KR", name: "Korea, Republic of" },
        { code: "KW", name: "Kuwait" },
        { code: "KG", name: "Kyrgyzstan" },
        { code: "LA", name: "Lao People's Democratic Republic" },
        { code: "LV", name: "Latvia" },
        { code: "LB", name: "Lebanon" },
        { code: "LS", name: "Lesotho" },
        { code: "LR", name: "Liberia" },
        { code: "LY", name: "Libya" },
        { code: "LI", name: "Liechtenstein" },
        { code: "LT", name: "Lithuania" },
        { code: "LU", name: "Luxembourg" },
        { code: "MO", name: "Macao" },
        { code: "MK", name: "Macedonia, the Former Yugoslav Republic of" },
        { code: "MG", name: "Madagascar" },
        { code: "MW", name: "Malawi" },
        { code: "MY", name: "Malaysia" },
        { code: "MV", name: "Maldives" },
        { code: "ML", name: "Mali" },
        { code: "MT", name: "Malta" },
        { code: "MH", name: "Marshall Islands" },
        { code: "MQ", name: "Martinique" },
        { code: "MR", name: "Mauritania" },
        { code: "MU", name: "Mauritius" },
        { code: "YT", name: "Mayotte" },
        { code: "MX", name: "Mexico" },
        { code: "FM", name: "Micronesia, Federated States of" },
        { code: "MD", name: "Moldova, Republic of" },
        { code: "MC", name: "Monaco" },
        { code: "MN", name: "Mongolia" },
        { code: "ME", name: "Montenegro" },
        { code: "MS", name: "Montserrat" },
        { code: "MA", name: "Morocco" },
        { code: "MZ", name: "Mozambique" },
        { code: "MM", name: "Myanmar" },
        { code: "NA", name: "Namibia" },
        { code: "NR", name: "Nauru" },
        { code: "NP", name: "Nepal" },
        { code: "NL", name: "Netherlands" },
        { code: "NC", name: "New Caledonia" },
        { code: "NZ", name: "New Zealand" },
        { code: "NI", name: "Nicaragua" },
        { code: "NE", name: "Niger" },
        { code: "NG", name: "Nigeria" },
        { code: "NU", name: "Niue" },
        { code: "NF", name: "Norfolk Island" },
        { code: "NO", name: "Norway" },
        { code: "OM", name: "Oman" },
        { code: "PK", name: "Pakistan" },
        { code: "PW", name: "Palau" },
        { code: "PS", name: "Palestinian Territory, Occupied" },
        { code: "PA", name: "Panama" },
        { code: "PG", name: "Papua New Guinea" },
        { code: "PY", name: "Paraguay" },
        { code: "PE", name: "Peru" },
        { code: "PH", name: "Philippines" },
        { code: "PN", name: "Pitcairn" },
        { code: "PL", name: "Poland" },
        { code: "PT", name: "Portugal" },
        { code: "QA", name: "Qatar" },
        { code: "RE", name: "Réunion" },
        { code: "RO", name: "Romania" },
        { code: "RU", name: "Russian Federation" },
        { code: "RW", name: "Rwanda" },
        { code: "BL", name: "Saint Barthélemy" },
        { code: "SH", name: "Saint Helena, Ascension and Tristan da Cunha" },
        { code: "KN", name: "Saint Kitts and Nevis" },
        { code: "LC", name: "Saint Lucia" },
        { code: "MF", name: "Saint Martin (French part)" },
        { code: "PM", name: "Saint Pierre and Miquelon" },
        { code: "VC", name: "Saint Vincent and the Grenadines" },
        { code: "WS", name: "Samoa" },
        { code: "SM", name: "San Marino" },
        { code: "ST", name: "Sao Tome and Principe" },
        { code: "SA", name: "Saudi Arabia" },
        { code: "SN", name: "Senegal" },
        { code: "RS", name: "Serbia" },
        { code: "SC", name: "Seychelles" },
        { code: "SL", name: "Sierra Leone" },
        { code: "SG", name: "Singapore" },
        { code: "SX", name: "Sint Maarten (Dutch part)" },
        { code: "SK", name: "Slovakia" },
        { code: "SI", name: "Slovenia" },
        { code: "SB", name: "Solomon Islands" },
        { code: "SO", name: "Somalia" },
        { code: "ZA", name: "South Africa" },
        { code: "GS", name: "South Georgia and the South Sandwich Islands" },
        { code: "SS", name: "South Sudan" },
        { code: "ES", name: "Spain" },
        { code: "LK", name: "Sri Lanka" },
        { code: "SD", name: "Sudan" },
        { code: "SR", name: "Suriname" },
        { code: "SJ", name: "Svalbard and Jan Mayen" },
        { code: "SZ", name: "Eswatini" },
        { code: "SE", name: "Sweden" },
        { code: "CH", name: "Switzerland" },
        { code: "SY", name: "Syrian Arab Republic" },
        { code: "TW", name: "Taiwan, Province of China" },
        { code: "TJ", name: "Tajikistan" },
        { code: "TZ", name: "Tanzania, United Republic of" },
        { code: "TH", name: "Thailand" },
        { code: "TL", name: "Timor-Leste" },
        { code: "TG", name: "Togo" },
        { code: "TK", name: "Tokelau" },
        { code: "TO", name: "Tonga" },
        { code: "TT", name: "Trinidad and Tobago" },
        { code: "TN", name: "Tunisia" },
        { code: "TR", name: "Turkey" },
        { code: "TM", name: "Turkmenistan" },
        { code: "TC", name: "Turks and Caicos Islands" },
        { code: "TV", name: "Tuvalu" },
        { code: "UG", name: "Uganda" },
        { code: "UA", name: "Ukraine" },
        { code: "AE", name: "United Arab Emirates" },
        { code: "GB", name: "United Kingdom" },
        { code: "US", name: "United States" },
        { code: "UM", name: "United States Minor Outlying Islands" },
        { code: "UY", name: "Uruguay" },
        { code: "UZ", name: "Uzbekistan" },
        { code: "VU", name: "Vanuatu" },
        { code: "VE", name: "Venezuela, Bolivarian Republic of" },
        { code: "VN", name: "Viet Nam" },
        { code: "VG", name: "Virgin Islands, British" },
        { code: "VI", name: "Virgin Islands, U.S." },
        { code: "WF", name: "Wallis and Futuna" },
        { code: "EH", name: "Western Sahara" },
        { code: "YE", name: "Yemen" },
        { code: "ZM", name: "Zambia" },
        { code: "ZW", name: "Zimbabwe" }
      ];
      
  return (
    <div className="login_container_wrap">
      <div className="login_container">
        <div className="login_form">
          <h2>Create your free account</h2>
          <p>
            Just enter a few details and we'll create your free Studee account.
            We'll also send you regular expert tips on applying, visas,
            scholarships and more, straight to your inbox.
          </p>
          <i>
            <p className="ltc">*required information</p>
          </i>
          <form>
            <div className="login_input_group">
              <label htmlFor="username" className="lable_in_signup_screen">
                First name *
              </label>
              <input type="text" id="username" className="login_input" />
            </div>
            {/* <br /> */}

            <div className="login_input_group">
              <label htmlFor="password" className="lable_in_signup_screen">
                Last name *
              </label>
              <input type="password" id="password" className="login_input" />
            </div>
            {/* <br /> */}
            <div className="login_input_group">
              <label htmlFor="password" className="lable_in_signup_screen">
                Email address *
              </label>
              <input type="password" id="password" className="login_input" />
              <br />
              <span className="ltc">
                We'll send you an activation code to your email.
              </span>
            </div>
            <div className="login_input_group">
              <label htmlFor="password" className="lable_in_signup_screen">
                Create a password *
              </label>
              <input type="password" id="password" className="login_input" />
            </div>
            {/* <br /> */}
            <div className="login_input_group">
              <label htmlFor="country" className="lable_in_signup_screen">
                Country of nationality *
              </label>
              <span className="ltc country_of_nationality_p">
                For dual nationality, enter the most relevant country of
                nationality for the program you want to apply for
              </span>
              <select id="country" className="login_input signup_countries_dropdown"> 
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="login_card_bottom">
              <Link to="/forget-password">
                <p>Forgot your password</p>
              </Link>

              <button type="submit" className="login_button">
                Create your account
              </button>
            </div>
          </form>
        </div>
        <div className="login_register_box">
          <div className="login_register_box_main">
            <h3>Already have an account?</h3>
            <p>Sign in and continue your study abroad journey</p>
            <Link to="/login">
              <button className="login_register_button">Sign in</button>
            </Link>
          </div>
          <div className="login_register_box_main border-t-2 ">
            <h3>
              When you apply via Studee, we can maximize your chance of getting
              admitted
            </h3>
            <div className="Register_side_box_wrap">
              <div className="Register_individual_side_box">
                <img
                  src="https://images.studee.com/illustrations/illustration__spot--advice-center.png?ixlib=js-2.3.2&auto=format&w=640&crop=fit&q=30"
                  alt=""
                />
                <div>
                  <h3 className="mtc">Your own dedicated advisor</h3>
                  <p className="ltc">
                    Sign in and continue your study abroad journey
                  </p>
                </div>
              </div>
              <div className="Register_individual_side_box">
                <img
                  src="https://images.studee.com/illustrations/illustration__spot--save-details.png?ixlib=js-2.3.2&auto=format&w=640&crop=fit&q=30"
                  alt=""
                />
                <div>
                  <h3 className="mtc">In-depth review of your application</h3>
                  <p className="ltc">
                    We ensure your application has the best chance of being
                    accepted
                  </p>
                </div>
              </div>
              <div className="Register_individual_side_box">
                <img
                  src="https://images.studee.com/illustrations/illustration__spot--email.png?ixlib=js-2.3.2&auto=format&w=640&crop=fit&q=30"
                  alt=""
                />
                <div>
                  <h3 className="mtc">Essential guidance & reminders</h3>
                  <p className="ltc">
                    Get clarity on exactly what needs to be done and when
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
