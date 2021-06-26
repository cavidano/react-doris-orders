import React, { Component, Fragment } from 'react';

import { FaBars } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";

class Header extends Component {

    static defaultProps = {
        title: "Whoa!!!"
    }
    
    render() {
        return (
            <Fragment>

                <header id="global-header">
                    
                    <a className="sr-only sr-only-focusable skip-menu" href="#skip-header-content">Skip Header</a>

                    <div className="bg-dark text-white" id="nyc-top-header">

                        <div className="container-fluid wide">

                            <div className="row py-1 align-items-center justify-content-between">

                                <div className="col-auto">
                                    <p className="d-none d-md-flex fs-md">
                                        <a className="text-reset" href="https://www1.nyc.gov/">
                                            <strong>nyc.gov</strong>
                                        </a>
                                        <span className="mx-1" aria-hidden="true">|</span>
                                        Department of Records
                                    </p>
                                </div>

                                <div className="col-auto">

                                    <ul className="extensible-list horizontal fs-md">
                                        <li>
                                            <a className="text-reset" href="http://www1.nyc.gov/">
                                                <strong>
                                                    311
                                                </strong>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-reset" href="http://www1.nyc.gov/home/search/index.page">
                                                <strong>
                                                    Search all NYC.gov
                                                </strong>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www1.nyc.gov/" title="Go to nyc.gov">
                                                <img className="d-block" src={this.props.title} width="45" alt="NYC Logo" />
                                            </a>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                        </div>

                    </div>

    <div className="wrap-header">

    <div className="container-fluid wide">

        <div className="row align-items-center">

            <div className="col-lg py-2">

                <div className="d-flex justify-content-center justify-content-lg-start">

                    <a className="align-self-center" href="#" title="Home">

                        <svg xmlns="http://www.w3.org/2000/svg" width="280" height="50" viewBox="0 0 280 50">

                            <g className="bubble">
                                <polygon points="146.878 21.841 150 18.756 150 9.378 140.622 0 109.378 0 100 9.378 100 3.134 96.878 0 84.378 0 81.256 3.134 81.256 9.378 75 15.634 68.756 9.378 68.756 3.134 65.622 0 53.122 0 50 3.134 46.878 0 34.378 0 31.256 3.134 31.256 15.634 15.634 0 3.134 0 0 3.134 0 46.878 3.134 50 15.634 50 18.756 46.878 18.756 34.378 34.378 50 46.878 50 50 46.878 50 21.878 65.622 37.5 65.622 46.878 68.756 50 81.256 50 84.378 46.878 84.378 37.5 100 21.878 100 40.622 109.378 50 140.622 50 150 40.622 150 31.256 146.878 28.122 131.256 28.122 131.256 31.256 118.756 31.256 118.756 18.756 131.256 18.756 131.256 21.841 146.878 21.841 146.878 21.841" />
                                <path d="M147.7946,1.7682h.2117c.2366,0,.4359-.0742.4359-.272s-.1246-.2844-.3986-.2844h-.249v.5564Zm0,1.0386h-.4359V.9522a5.0059,5.0059,0,0,1,.71,0,.9894.9894,0,0,1,.6476.1484.456.456,0,0,1,.1868.3956.4714.4714,0,0,1-.4234.4451h0c.1868.0618.2739.21.3238.4575a2.4522,2.4522,0,0,0,.137.4451H148.48a1.3652,1.3652,0,0,1-.15-.4451c0-.1978-.1494-.2844-.3861-.2844h-.1992v.73Zm-1.1583-.9644a1.4512,1.4512,0,0,0,1.4193,1.4832c.0126,0,.0253,0,.0379,0a1.427,1.427,0,0,0,1.4206-1.4333l-.0008-.038a1.4446,1.4446,0,1,0-2.877,0Zm3.3627,0A1.918,1.918,0,1,1,148.02.0011Q148.0565,0,148.0935,0a1.8743,1.8743,0,0,1,1.9055,1.8419Z" />
                            </g>

                            <g className="title">

                                <path d="M170.1092,0h6.0081c2.4948,0,4.3926,1.2822,4.3926,3.6191a3.0071,3.0071,0,0,1-2.1782,3.0389v.0529a2.5156,2.5156,0,0,1,1.8262,2.3017c.2637,1.6512.0883,3.2324.5274,3.39v.1583h-3.0212c-.3342-.1931-.2813-1.6689-.4744-2.9163a1.8428,1.8428,0,0,0-2.0909-1.7919h-1.88v4.7082h-3.1094Zm5.4464,5.5513c1.2292,0,1.8625-.5794,1.8625-1.5283,0-.9136-.598-1.5635-1.7919-1.5635h-2.4076V5.5513Z"/>
                                <path d="M181.5656,8.046a4.5269,4.5269,0,0,1,4.62-4.7435,4.4274,4.4274,0,0,1,3.0751,1.1244,5.7291,5.7291,0,0,1,1.5812,4.3744H184.376a1.984,1.984,0,0,0,2.02,1.9679,1.4943,1.4943,0,0,0,1.4939-.8959h2.7928a3.6608,3.6608,0,0,1-1.5106,2.1257,4.7592,4.7592,0,0,1-2.8114.8258A4.55,4.55,0,0,1,181.5656,8.046Zm6.3766-.9484a1.738,1.738,0,0,0-1.7037-1.7571c-1.089,0-1.6517.6852-1.8448,1.7571Z"/>
                                <path d="M191.6947,8.0813A4.5422,4.5422,0,0,1,196.4029,3.32a3.9537,3.9537,0,0,1,4.2691,3.4436h-2.7585a1.481,1.481,0,0,0-1.4753-1.3356c-1.23,0-1.8449,1.019-1.8449,2.6531,0,1.5988.6147,2.6178,1.8449,2.6178.896,0,1.44-.5274,1.5635-1.5463h2.7409c-.0706,2.0732-1.7224,3.69-4.27,3.69A4.57,4.57,0,0,1,191.6947,8.0813Z"/>
                                <path d="M201.5415,8.0813a4.805,4.805,0,0,1,9.6095,0,4.8049,4.8049,0,0,1-9.6095,0Zm6.7109,0c0-1.6341-.6676-2.7408-1.9154-2.7408S204.44,6.4472,204.44,8.0813s.65,2.7232,1.8969,2.7232S208.2524,9.7149,208.2524,8.0813Z"/>
                                <path d="M212.447,3.5662h2.7408V4.9719h.0529A2.6555,2.6555,0,0,1,217.7,3.4255a1.4937,1.4937,0,0,1,.5617.0706V5.9556h-.0706c-1.7566-.246-2.881.6146-2.881,2.5649v4.0406H212.447Z"/>
                                <path d="M218.955,8.0637c0-2.8109,1.6164-4.7612,3.9347-4.7612a2.8039,2.8039,0,0,1,2.5125,1.2827h.0529V0h2.8634V12.5611h-2.7409V11.349h-.0353a2.9626,2.9626,0,0,1-2.6526,1.4935C220.5881,12.8425,218.955,11.0677,218.955,8.0637Zm6.5707,0c0-1.5111-.6156-2.6-1.8625-2.6-1.142,0-1.81,1.0543-1.81,2.5649,0,1.5635.6676,2.5477,1.7743,2.5477C224.8228,10.5761,225.5257,9.54,225.5257,8.0637Z"/>
                                <path d="M229.5458,9.6448h2.7055A1.4548,1.4548,0,0,0,233.903,10.98c.8607,0,1.4057-.3162,1.4057-.896,0-.8082-1.089-.896-2.284-1.1067-1.5635-.2637-3.2329-.6852-3.2329-2.7933,0-1.8973,1.7566-2.8815,3.8828-2.8815,2.5478,0,3.9182,1.1067,4.0583,2.8815H235.098c-.1059-.8082-.65-1.0543-1.441-1.0543-.7029,0-1.2469.2637-1.2469.8259,0,.6323,1.0185.72,2.1605.9308,1.5812.2637,3.4437.668,3.4437,2.9692,0,1.9679-1.74,2.9869-4.0936,2.9869C231.2857,12.8425,229.634,11.63,229.5458,9.6448Z"/>
                                
                                <path d="M169.6348,27.6528c0-1.9149,1.23-2.9515,2.7761-3.6715a3.6387,3.6387,0,0,1-.9666-2.4247c0-1.739,1.3528-3.057,3.5319-3.057,2.0547,0,3.5486,1.16,3.5486,3.0217,0,1.564-1.0371,2.3894-2.3193,3.0045l1.5106,1.8973a7.1049,7.1049,0,0,0,.4744-1.5812h2.4772a7.7183,7.7183,0,0,1-1.37,3.5839l2.1614,2.7055h-3.4966l-.6146-.7906a5.9626,5.9626,0,0,1-3.2506,1.0014C171.1806,31.3421,169.6348,29.7433,169.6348,27.6528Zm6.2894.8431-2.1253-2.758a2.051,2.051,0,0,0-1.1949,1.8449,1.4762,1.4762,0,0,0,1.6165,1.4581A2.9755,2.9755,0,0,0,175.9242,28.4959Zm.0529-6.957a.9235.9235,0,0,0-.9313-.966.9085.9085,0,0,0-.9489.966,2.1756,2.1756,0,0,0,.8793,1.5111A1.7058,1.7058,0,0,0,175.9771,21.5389Z"/>
                                
                                <path d="M185.9228,18.57h3.1094V31.1313h-3.1094Z"/>
                                <path d="M190.94,22.1364h2.7585v1.23h.0519a3.1544,3.1544,0,0,1,2.7761-1.4934c1.9674,0,3.1271,1.4057,3.1271,3.4084v5.85H196.79v-5.27c0-.9489-.4744-1.5988-1.4057-1.5988-.9489,0-1.5812.7906-1.5812,1.8973v4.9719H190.94Z"/>
                                <path d="M201.7462,23.9636h-1.16V22.1364h1.16v-.65a2.8246,2.8246,0,0,1,.7382-2.0909c.7724-.7553,2.2664-.9308,3.8122-.773v2.02c-1.089-.0348-1.687.0529-1.687,1.0542v.4392h1.687v1.8272H204.61v7.1677h-2.8634Z"/>
                                <path d="M206.7956,26.6515a4.805,4.805,0,0,1,9.61,0,4.805,4.805,0,0,1-9.61,0Zm6.7109,0c0-1.6341-.6675-2.7408-1.9154-2.7408s-1.8968,1.1067-1.8968,2.7408.65,2.7232,1.8968,2.7232S213.5065,28.2851,213.5065,26.6515Z"/>
                                <path d="M217.7,22.1364h2.7408v1.4057h.053a2.6553,2.6553,0,0,1,2.4594-1.5464,1.4933,1.4933,0,0,1,.5617.0706v2.46h-.07c-1.7567-.2461-2.881.6146-2.881,2.5649v4.0406H217.7Z"/>
                                <path d="M224.5335,22.1364h2.7409v1.2827h.0529a2.9979,2.9979,0,0,1,2.7222-1.5464,2.6943,2.6943,0,0,1,2.53,1.5812h.0353a3.2005,3.2005,0,0,1,2.828-1.5812c2.038,0,3.0575,1.3881,3.0575,3.4084v5.85H235.637v-5.34c0-.9665-.4048-1.5287-1.2655-1.5287-.9136,0-1.4224.7553-1.4224,1.8272v5.042h-2.8643v-5.34c0-.9665-.4039-1.5287-1.2646-1.5287-.8959,0-1.4233.7553-1.4233,1.8272v5.042h-2.8634Z"/>
                                <path d="M239.74,28.6189c0-1.985,1.5812-2.5825,3.4437-2.8281,1.6861-.2112,2.283-.3867,2.283-1.0018,0-.5793-.3685-.9661-1.2292-.9661-.9136,0-1.37.4039-1.4586,1.16h-2.635c.0706-1.6689,1.3528-3.0923,4.0759-3.0923a4.68,4.68,0,0,1,2.9163.7382,2.9778,2.9778,0,0,1,1.1421,2.5649v4.5322c0,.7205.07,1.1244.3156,1.2827v.123h-2.7751a2.5012,2.5012,0,0,1-.299-1.0013h-.0353a2.9559,2.9559,0,0,1-2.67,1.23C241.0226,31.36,239.74,30.3937,239.74,28.6189Zm5.7973-.7024V26.8446a6.9622,6.9622,0,0,1-1.4753.4745c-1.1067.246-1.5635.5269-1.5635,1.2121,0,.7205.5264,1.0013,1.2293,1.0013A1.6347,1.6347,0,0,0,245.5377,27.9165Z"/>
                                <path d="M250.4293,28.76V23.9283h-1.195V22.1364h1.195V19.29h2.7927v2.8462h1.6341v1.7919H253.222v4.2166c0,.7024.3872.8784,1.0019.8784.246,0,.5274-.0177.6322-.0177v2.09a6.5807,6.5807,0,0,1-1.5635.1407C251.6242,31.2367,250.4293,30.6922,250.4293,28.76Z"/>
                                <path d="M256.2471,18.57h2.8634V20.889h-2.8634Zm0,3.5662h2.8634v8.9949h-2.8634Z"/>
                                <path d="M260.3809,26.6515a4.805,4.805,0,0,1,9.61,0,4.805,4.805,0,0,1-9.61,0Zm6.7109,0c0-1.6341-.6675-2.7408-1.9154-2.7408s-1.8968,1.1067-1.8968,2.7408.65,2.7232,1.8968,2.7232S267.0918,28.2851,267.0918,26.6515Z"/>
                                <path d="M271.2864,22.1364h2.7585v1.23h.0519a3.1544,3.1544,0,0,1,2.7761-1.4934c1.9674,0,3.1271,1.4057,3.1271,3.4084v5.85h-2.8634v-5.27c0-.9489-.4744-1.5988-1.4057-1.5988-.9489,0-1.5811.7906-1.5811,1.8973v4.9719h-2.8634Z"/>
                                
                                <path d="M170.2651,45.7486h3.127c.14,1.265.9666,1.7919,2.4595,1.7919,1.0185,0,2.02-.3691,2.02-1.3175,0-1.0013-1.0185-1.2121-2.7409-1.6341-2.1781-.5092-4.48-1.1768-4.48-3.8122,0-2.6879,2.1782-3.8647,4.99-3.8647,2.7231,0,4.8307,1.23,4.9542,3.8647h-3.04c-.1225-.9661-.8606-1.5106-2.02-1.5106-1.0891,0-1.81.4744-1.81,1.1768,0,.8788.9666,1.09,2.8467,1.5111,2.336.5445,4.4445,1.265,4.4445,3.9529,0,2.635-2.2487,4.0931-5.1473,4.0931C172.5315,50,170.3357,48.5242,170.2651,45.7486Z"/>
                                <path d="M181.97,45.1864a4.5269,4.5269,0,0,1,4.62-4.7435,4.4276,4.4276,0,0,1,3.0751,1.1244,5.7285,5.7285,0,0,1,1.5811,4.3744H184.78A1.9839,1.9839,0,0,0,186.8,47.91a1.4942,1.4942,0,0,0,1.494-.896h2.7927a3.6605,3.6605,0,0,1-1.5106,2.1257,4.759,4.759,0,0,1-2.8114.8259A4.55,4.55,0,0,1,181.97,45.1864Zm6.3766-.9484a1.738,1.738,0,0,0-1.7037-1.7571c-1.0891,0-1.6517.6852-1.8449,1.7571Z"/>
                                <path d="M192.52,40.7066h2.7408v1.4057h.0529a2.6555,2.6555,0,0,1,2.46-1.5464,1.4937,1.4937,0,0,1,.5617.0706V43.096h-.0705c-1.7567-.2461-2.8811.6146-2.8811,2.5648v4.0407H192.52Z"/>
                                <path d="M198.9957,40.7066h2.9516l1.23,4.0583c.2628.8959.4912,1.81.4912,1.81h.0353s.2284-.9137.492-1.81l1.2479-4.0583h2.8634l-3.1094,8.9949h-3.0928Z"/>
                                <path d="M209.1954,37.14h2.8634v2.3188h-2.8634Zm0,3.5662h2.8634v8.9949h-2.8634Z"/>
                                <path d="M213.3547,45.2217a4.5423,4.5423,0,0,1,4.7082-4.7612,3.9537,3.9537,0,0,1,4.2691,3.4437h-2.7585a1.481,1.481,0,0,0-1.4753-1.3356c-1.23,0-1.8449,1.019-1.8449,2.6531,0,1.5988.6147,2.6178,1.8449,2.6178.896,0,1.44-.5274,1.5635-1.5464h2.7409c-.0706,2.0733-1.7224,3.69-4.27,3.69A4.57,4.57,0,0,1,213.3547,45.2217Z"/>
                                <path d="M223.2024,45.1864a4.5269,4.5269,0,0,1,4.62-4.7435,4.4256,4.4256,0,0,1,3.0751,1.1244,5.724,5.724,0,0,1,1.58,4.3744h-6.4648a1.9844,1.9844,0,0,0,2.02,1.9679,1.494,1.494,0,0,0,1.4939-.896H232.32a3.6605,3.6605,0,0,1-1.5106,2.1257,4.7592,4.7592,0,0,1-2.8114.8259A4.55,4.55,0,0,1,223.2024,45.1864Zm6.3767-.9484a1.7381,1.7381,0,0,0-1.7037-1.7571c-1.0891,0-1.6518.6852-1.8449,1.7571Z"/>
                                <path d="M233.1845,46.7852H235.89a1.4548,1.4548,0,0,0,1.6518,1.3351c.8607,0,1.4057-.3161,1.4057-.8959,0-.8083-1.0891-.896-2.284-1.1067-1.5635-.2637-3.2329-.6853-3.2329-2.7933,0-1.8973,1.7566-2.8815,3.8828-2.8815,2.5477,0,3.9181,1.1067,4.0583,2.8815h-2.635c-.1058-.8083-.65-1.0543-1.4409-1.0543-.7029,0-1.2469.2637-1.2469.8259,0,.6323,1.0184.72,2.16.9307,1.5811.2637,3.4436.6681,3.4436,2.9693,0,1.9679-1.74,2.9868-4.0936,2.9868C234.9245,49.9828,233.2727,48.77,233.1845,46.7852Z"/>
                            </g>
                        
                        </svg>

                    </a>

                </div>

            </div>

            <div className="col-lg-auto border-top border-lg-0">

                <div className="row no-gutters justify-content-between py-2">

                    <div className="col-auto d-flex d-lg-none">

                        <button className="no-btn-style" type="button" data-toggle="collapse"
                            data-target="#nav-primary" aria-controls="nav-primary" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="fas fa-bars fa-lg" role="img"></span>
                        </button>

                    </div>

                    <div className="col-auto">

                        <ul className="extensible-list horizontal">
                            <li>
                                <button className="no-btn-style" type="button" title="Language"
                                    data-toggle="collapse" data-target="#global-language"
                                    aria-controls="global-language" aria-expanded="false">
                                    <FaLanguage />

                                </button>
                            </li>
                        </ul>

                    </div>

                </div>

            </div>

        </div>

    </div>

</div>

<div className="d-none" id="nav-primary"></div>

<div className="container-fluid border-top collapse" id="global-language">
    <div className="narrow py-2">
        <div id="google_translate_element"></div>
    </div>
</div>

</header>
                
            </Fragment>
        )
    }
}

export default Header;
