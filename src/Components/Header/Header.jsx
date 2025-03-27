import React from 'react';
import './style.css'

const Header = () => {
  return (
    <div className="main">
      <div className="header">
        <header>
          <div className="cont1">
            <div className="cont2">
              <div className="health-img">
                <img
                  src="https://healthyfood.am/v2/wp-content/themes/healthyfood/assets/imgs/theme/logo.png"
                  alt="Logo"
                />
              </div>
              <div>
                <form action="https://healthyfood.am/">
                  <select
                    name="product_cat"
                    className="select-active select2-hidden-accessible"
                    data-select2-id="1"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <option value="0" data-select2-id="3">
                      Բոլոր Կատեգորիաներ
                    </option>
                    <option
                      value="%d6%84%d5%a1%d5%b7%d5%ab-%d5%b6%d5%be%d5%a1%d5%aaz%d5%a5%d6%81%d5%b8%d6%82%d5%b4"
                      data-select2-id="11"
                    >
                      Քաշի նվազեցում
                    </option>
                    <option
                      value="%d5%a1%d5%b6%d5%b0%d5%a1%d5%bf%d5%a1%d5%af%d5%a1%d5%b6-%d5%ae%d6%80%d5%a1%d5%a3%d6%80%d5%a5%d6%80"
                      data-select2-id="12"
                    >
                      Անհատական ծրագրեր
                    </option>
                    <option value="%d5%a4%d5%a5%d5%bf%d5%b8%d6%84%d5%bd" data-select2-id="13">
                      Դետոքս
                    </option>
                  </select>
                </form>
              </div>
            </div>
            <div className="inp-cont">
              <input type="text" name="s" className="inp" placeholder="Որոնել" value="" />
            </div>
            <div className="cont3">
              <p className="p1">Մեր Մասին</p>
              <p className="p1">Ծրագրեր</p>
              <a className="p1" href="file:///Users/admin/Desktop/healthyfood/HTML/blog.html">
                Բլոգ
              </a>
              <p className="p1">Առողջացում</p>
              <p className="p1">Կապ</p>
            </div>
          </div>
        </header>
        <hr />
      </div>
    </div>
  );
};

export default Header;
