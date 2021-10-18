import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="container">
                <hr />
                <footer className="container row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-4 align-items-center my-5" collapseonselect="true" expand="lg">
                    {/* column -1 */}
                    <div className="col text-start mb-3">
                    <p className="border-bottom w-50 border-primary">Contact Information</p>
                        <div><i className="me-2 fas fa-clinic-medical"></i></div>
                        
                        <small>
                            350 Baganbari <br />
                            Brahmanbaria<br />
                            Bangladesh<br />
                            <div className="text-muted">_______________________</div>
                            <i className="me-2  mt-2 fas fa-globe"></i>www.life-care.com<br />
                            <i className="me-2 fas fa-envelope"></i>life-care@mail.com<br />
                            <i className="me-2 fas fa-phone"></i>1-888-333-444-222
                        </small>
                    </div>
                    {/* column -2 */}
                    <div className="col text-start mb-3">
                    <p className="border-bottom w-25 border-primary text-center">Services</p>
                        <small className="text-muted">Clinical Pathology Laboratory Services<br />
                        Health Screening<br/>
                        Radiology and Diagnostic Imaging Tests<br/> 
                        Rehabilitation Services<br/> 
                        Prenatal Diagnostics<br/> 
                        Nutrition & Dietetics<br/> 
                            </small>
                    </div>
                    {/* column -3 */}
                    <div className="col text-start mb-3">
                    <p className="border-bottom w-25 border-primary">Disclaimer</p>
                        <small className="text-muted"> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2021 Life Care Hospital Private ltd<br />
                            All rights reserved.<br/>
                            Company Registration no. 
                            </small>
                    </div>
                    {/* column -4 */}
                    <div className="col text-start">
                    <p className="border-bottom w-25 border-primary text-center">Social</p>
                        <a href="https://www.facebook.com/InceptionAcademicCare" rel="noreferrer" target="_blank"><i className="me-3 fab fa-facebook text-start"></i></a>
                        <a href="https://www.twitter.com" rel="noreferrer" target="_blank"><i className="me-3 fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com" rel="noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
                    </div>

                </footer>
            </div>
        </div>
    );
};

export default Footer;