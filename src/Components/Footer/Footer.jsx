import React from 'react';
import "./style.css"
const Footer = () => {
  return (
    <div>
      <div className="cont8">
        <hr />
        <div className="container pt-15 pb-20">
          <div className="row">
            <div className="col">
              <div className="font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__ animate__fadeInUp" data-wow-delay="0" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <div className="logo mb-30">
                  <a href="https://healthyfood.am/" className="mb-15">
                    <img src="https://healthyfood.am/v2/wp-content/uploads/2022/11/logo-footer.png" alt="Healthy Food" className="img-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-link-widget col wow animate__ animate__fadeInUp" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
              <h4 className="widget-title">Տեղեկություն</h4>
              <ul id="menu-footer-menu" className="footer-list mb-sm-5 mb-md-0">
                <li id="menu-item-58" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-58">
                  <a href="https://healthyfood.am/" aria-current="page">Գլխավոր</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60">
                  <a href="https://healthyfood.am/%d5%b4%d5%a5%d6%80-%d5%b4%d5%a1%d5%bd%d5%ab%d5%b6/">Մեր Մասին</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59">
                  <a href="https://healthyfood.am/%d5%af%d5%a1%d5%ba/">Կապ</a>
                </li>
              </ul>
            </div>
            <div className="footer-link-widget col wow animate__ animate__fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
              <h4 className="widget-title">Հաշիվ</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li><a href="https://healthyfood.am/%d5%ab%d5%b4-%d5%b0%d5%a1%d5%b7%d5%ab%d5%av%d5%a8/">Մուտք / Գրանցվել</a></li>
                <li><a href="https://healthyfood.am/%d5%a6%d5%a1%d5%b4%d5%a2%d5%b5%d5%b8%d6%82%d5%b2/">Դիտել զամբյուղը</a></li>
              </ul>
            </div>
            <div className="footer-link-widget col wow animate__ animate__fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
              <h4 className="widget-title">Կոնտակտներ</h4>
              <ul className="contact-infor">
                <li style={{ whiteSpace: 'nowrap' }}>
                  <img src="https://healthyfood.am/v2/wp-content/themes/healthyfood/assets/imgs/theme/icons/icon-clock.svg" alt="Clock Icon" />
                  <strong>Աշխատանքային ժամեր՝ </strong> <span>09:00 - 19:00</span>
                </li>
                <li style={{ whiteSpace: 'nowrap' }}>
                  <img src="https://healthyfood.am/v2/wp-content/themes/healthyfood/assets/imgs/theme/icons/icon-contact.svg" alt="Contact Icon" />
                  <strong>Հեռ․ համար`</strong> <span>+(374) 91013443</span> (Viber, WhatsApp)
                </li>
                <li style={{ whiteSpace: 'nowrap' }}>
                  <img src="https://healthyfood.am/v2/wp-content/themes/healthyfood/assets/imgs/theme/icons/icon-location.svg" alt="Location Icon" />
                  <strong>Հասցե՝ </strong> <span>Լենինգրադյան 1/1, Երևան 0034</span>
                </li>
                <li style={{ whiteSpace: 'nowrap' }}>
                  <img src="https://healthyfood.am/v2/wp-content/themes/healthyfood/assets/imgs/theme/icons/icon-email-2.svg" alt="Email Icon" />
                  <strong>Էլ․ փոստ՝</strong> <span>healthyfoodarmenia@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="footer-link-widget widget-install-app col wow animate__ animate__fadeInUp animated" data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
              <hr />
              <p className="mb-20" style={{ textAlign: 'center' }}>Անվտանգ վճարում </p>
              <img className="img-4" src="https://healthyfood.am/v2/wp-content/themes/healthyfood/assets/imgs/theme/payment-method.png" alt="Payment Methods" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
