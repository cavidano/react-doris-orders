import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="global-footer">

                <h2 className="sr-only">
                    Page Footer
                </h2>
    
                <div className="bg-dark text-white" id="nyc-foot">
    
                    <div className="container py-3">
    
                        <div className="row">
    
                        <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
    
                            <h2 className="h6 mb-2">Languages</h2>
    
                            <ul className="extensible-list notranslate fs-md">
                                <li><button className="lang-select text-reset no-btn-style" data-lang="ar">عربى</button></li>
                                <li><button className="lang-select text-reset no-btn-style" data-lang="bn">বাঙালি</button></li>
                                <li><button className="lang-select text-reset no-btn-style" data-lang="zh-CN">中文</button></li>
                                <li><button className="lang-select text-reset no-btn-style" data-lang="es">Español</button></li>
                                <li><button className="lang-select text-reset no-btn-style" data-lang="fr">français</button></li>
                                <li><button className="lang-select text-reset no-btn-style" data-lang="ht">Kreyòl Ayisyen</button></li>
                                <li><button className="lang-select text-reset no-btn-style" data-lang="ko">한국어</button></li>
                                <li><button className="lang-select text-reset no-btn-style" data-lang="pl">Polskie</button></li>
                                <li><button className="lang-select text-reset no-btn-style" data-lang="ru">русский</button></li>
                                <li><button className="lang-select text-reset no-btn-style" data-lang="ur">اردو</button></li>
                            </ul>
    
                        </div>
                        
                        <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
    
                            <h2 className="h6 mb-2">Resources</h2>
    
                            <ul className="extensible-list fs-md">
                                <li>
                                    <a className="text-reset" href="http://www1.nyc.gov/home/contact-us.page">
                                        Contact NYC Government
                                    </a>
                                </li>
                                <li>
                                    <a className="text-reset" href="http://www1.nyc.gov/nyc-resources/agencies.page">
                                        City Agency Directory
                                    </a>
                                </li>
                                <li>
                                    <a className="text-reset" href="http://www1.nyc.gov/nyc-resources/resident-toolkit.page">
                                        Resident Toolkit
                                    </a>
                                </li>
                                <li>
                                    <a className="text-reset" href="http://www1.nyc.gov/connect/mobile-applications.page">
                                        NYC Mobile Apps
                                    </a>
                                </li>
                                <li>
                                    <a className="text-reset" href="https://a858-nycnotify.nyc.gov/notifynyc/">
                                        Notify NYC
                                    </a>
                                </li>
                                <li>
                                    <a className="text-reset" href="http://maps.nyc.gov/doitt/nycitymap/">
                                        Maps
                                    </a>
                                </li>
                                <li>
                                    <a className="text-reset"
                                        href="https://a127-ess.nyc.gov/psp/prdess/?cmd=login&languageCd=ENG&">
                                        City Employees
                                    </a>
                                </li>
                                <li>
                                    <a className="text-reset" href="https://a856-citystore.nyc.gov/">
                                        CityStore
                                    </a>
                                </li>
                                <li>
                                    <a className="text-reset" href="http://www1.nyc.gov/connect/social-media.page">
                                        Stay Connected
                                    </a>
                                </li>
                            </ul>
    
                        </div>
    
                        <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
    
                            <h2 className="h6 mb-2">
                                <a className="text-reset" href="https://www1.nyc.gov/">
                                    <span className="sr-only">Visit</span>
                                    <strong>NYC.gov</strong>
                                </a>
                            </h2>
    
                            <ul className="extensible-list fs-sm">
                                <li>
                                    <a className="text-reset" href="http://www1.nyc.gov/home/privacy-policy.page">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a className="text-reset" href="http://www1.nyc.gov/home/terms-of-use.page">
                                        Terms of Use
                                    </a>
                                </li>
                            </ul>
    
                            <a className="text-reset my-2 d-inline-block" href="https://www1.nyc.gov/site/mopd/index.page"
                                title="Mayor's Office for People with Disabilities">
                                <span className="sr-only">Mayor's Office for People with Disabilities</span>
                                <span className="fab fa-accessible-icon"></span>
                            </a>
    
                        </div>
                        
    
                        <div className="col-sm-6 col-lg-3">
    
                            <a  href="https://www1.nyc.gov" title="Go to nyc.gov">
                                <svg className="d-inline-block" xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40" fill="white">
                                    <g>
                                        <polygon points="87.5 0 80 7.5 80 2.5 77.5 0 67.5 0 65 2.5 65 7.5 60 12.5 55 7.5 55 2.5 52.5 0 42.5 0 40 2.5 37.5 0 27.5 0 25 2.5 25 12.5 12.501 0 2.501 0 0 2.5 0 37.5 2.501 40 12.501 40 15 37.5 15 27.5 27.5 40 37.5 40 40 37.5 40 17.5 52.5 30 52.5 37.5 55 40 65 40 67.5 37.5 67.5 30 80 17.5 80 32.5 87.5 40 112.5 40 120 32.5 120 25 117.5 22 105 22 105 25 95 25 95 15 105 15 105 18 117.5 18 120 15 120 7.5 112.5 0 87.5 0" />
                                        <path d="M117.9877,1.8787h.293l.4888.8088h.3522l-.53-.831a.4834.4834,0,0,0,.4927-.517c0-.3837-.2322-.5435-.6895-.5435h-.718V2.6875h.3105Zm0-.8182h.3758c.1867,0,.411.0278.411.2568,0,.2742-.2055.2962-.4385.2962h-.3483Z" />
                                        <path d="M118.3265,3.42A1.6573,1.6573,0,0,0,120,1.71a1.6784,1.6784,0,1,0-3.3563,0A1.6456,1.6456,0,0,0,118.3265,3.42Zm0-3.1218A1.3255,1.3255,0,0,1,119.6342,1.71a1.3157,1.3157,0,1,1-2.6242,0A1.3271,1.3271,0,0,1,118.3265.2977Z" />
                                    </g>
                                </svg>
                            </a>
    
                            <p className="fs-sm mt-2">
                                &#169; City of New York - 2020. All Rights Reserved.
                                NYC is a trademark and service mark of the City of New York.
                            </p>
    
                            <a className="text-reset fs-sm" href="#" id="back-to-top">
                                Back to Top
                            </a>
    
                        </div>
                        
    
                    </div>
                
                    </div>
    
                </div>
            
            </footer>
        )
    }
}

export default Footer;
