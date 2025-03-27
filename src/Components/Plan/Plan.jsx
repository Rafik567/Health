import React from 'react';
import "./style.css"
const Plan = () => {
  return (
    <div>
      <div className="advantage">
        <h1>Մեր ծրագրերը</h1>
      </div>
      <div className="cont7">
        <div className="plan-item">
          <img
            className="img-2"
            src="https://healthyfood.am/v2/wp-content/uploads/2023/01/meal-detox-web-1-400x400.jpg"
            alt="Detox with meals"
          />
          <p>ՈՒՏԵՍՏՆԵՐՈՎ ԴԵՏՈՔՍ</p>
          <p className="prize">29,900 դրամ</p>
          <div className="button-1">
            <button className="butt">Պատվեր</button>
          </div>
        </div>

        <div className="plan-item">
          <img
            className="img-2"
            src="https://healthyfood.am/v2/wp-content/uploads/2023/01/1300-standard-web-400x400.jpg"
            alt="1300 kcal standard meal"
          />
          <p>1300 ԿԿԱԼ ՍՏԱՆԴԱՐՏ</p>
          <p className="prize">36,000 դրամ–285,000 դրամ</p>
          <div className="button-1">
            <button className="butt">Պատվեր</button>
          </div>
        </div>

        <div className="plan-item">
          <img
            className="img-2"
            src="https://healthyfood.am/v2/wp-content/uploads/2023/01/matcha-detox-web-400x400.jpg"
            alt="Matcha Detox 1 day"
          />
          <p>ՄԱՏՉԱ ԴԵՏՈՔՍ 1 ՕՐ</p>
          <p className="prize">14,900 դրամ–34,000 դրամ</p>
          <div className="button-1">
            <button className="butt">Պատվեր</button>
          </div>
        </div>

        <div className="plan-item">
          <img
            className="img-2"
            src="https://healthyfood.am/v2/wp-content/uploads/2023/01/850-express-web-400x400.jpg"
            alt="850 kcal express meal"
          />
          <p>850 ԿԿԱԼ ԷՔՍՊՐԵՍ</p>
          <p className="prize">30,000 դրամ–255,000 դրամ</p>
          <div className="button-1">
            <button className="butt">Պատվեր</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
