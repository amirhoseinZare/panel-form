import './App.scss'
import { Pie } from 'react-chartjs-2';
import logo from "./assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faClock, faTable, faFolder, faArchive, faTimesCircle, faHome, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [12, 3],
      backgroundColor: [
        'rgb(29, 53, 87)',
        'rgba(29, 53, 87, .3)',
      ],
      borderColor: [
        'rgb(255, 255, 255)',
      ],
      borderWidth: 1,
    },
  ],
};

const data2 = {
  datasets: [
    {
      label: '# of Votes',
      data: [12, 3],
      backgroundColor: [
        'rgb(255, 200, 87)',
        'rgba(255, 200, 87, .3)',
      ],
      borderColor: [
        'rgb(255, 255, 255)',
      ],
      borderWidth: 1,
    },
  ],
};


const data3 = {
  datasets: [
    {
      label: '# of Votes',
      data: [12, 3],
      backgroundColor: [
        'rgb(69, 123, 157)',
        'rgba(69, 123, 157, .3)',
      ],
      borderColor: [
        'rgb(255, 255, 255)',
      ],
      borderWidth: 1,
    },
  ],
};

const data5 = {
  datasets: [
    {
      label: '# of Votes',
      data: [12, 3],
      backgroundColor: [
        'rgb(168, 218, 220)',
        'rgba(168, 218, 220, .3)',
      ],
      borderColor: [
        'rgb(255, 255, 255)',
      ],
      borderWidth: 1,
    },
  ],
};


const data6 = {
  datasets: [
    {
      label: '# of Votes',
      data: [12, 3],
      backgroundColor: [
        'rgb(230, 57, 70)',
        'rgba(230, 57, 70, .3)',
      ],
      borderColor: [
        'rgb(255, 255, 255)',
      ],
      borderWidth: 1,
    },
  ],
};


const data7 = {
  datasets: [
    {
      label: '# of Votes',
      data: [12, 3],
      backgroundColor: [
        'rgb(23, 126, 137)',
        'rgba(23, 126, 137, .3)',
      ],
      borderColor: [
        'rgb(255, 255, 255)',
      ],
      borderWidth: 1,
    },
  ],
};


const data8 = {
  datasets: [
    {
      label: '# of Votes',
      data: [35, 15, 20, 30],
      backgroundColor: [
        'rgb(230, 57, 70)',
        'rgb(23, 126, 137)',
        'rgb(167,217,219)',
        'rgba(255, 201, 87)',
      ],
      borderColor: [
        'rgb(255, 255, 220)',
      ],
      borderWidth: 1,
    },
  ],
};

function App() {
  return (
    <>
      <header className="header">
        <div className="header__profile">
          <h4 className="header__profile--name"><span><FontAwesomeIcon icon={faTimesCircle} /></span> ناصر برايی</h4>
          <div className="header__profile--buttons">
            <button>آمار هفتگی</button>
            <button>آمار روزانه</button>
          </div>
        </div>
        <div className="header__info">
            <h1>صفحه اصلی</h1>
            <ul className="header__list">
              <li>
                <p><FontAwesomeIcon icon={faClock} /></p>
                <div>1400/02/04</div>
              </li>
              <li>
                <FontAwesomeIcon icon={faTable} />
                <div>5:30 ب.ظ</div>
              </li>
            </ul>
        </div>
      </header>
      <main className="main">
        <aside className="aside">

          <div className="aside__logo">
            <div><img width="64px" src={logo}/></div>
          </div>

          <div className="aside__item">
            <div className="aside__item--icon"><FontAwesomeIcon className="aside__item-home" icon={faHome} /></div>
            <p className="aside__item--footer aside__item-footer-text">صفحه اصلی</p>
          </div>

          <div className="aside__item">
            <div className="aside__item--icon"><FontAwesomeIcon icon={faFolder} /></div>
            <p className="aside__item--footer">جدید دریافتی</p>
          </div>
          
          <div className="aside__item">
            <div className="aside__item--icon"><FontAwesomeIcon icon={faArchive} /></div>
            <p className="aside__item--footer">ارسال شده به ارزیاب</p>
          </div>

          <div className="aside__item">
            <div className="aside__item--icon"><FontAwesomeIcon icon={faFile} /></div>
            <p className="aside__item--footer">صفحه پرونده</p>
          </div>

        </aside>
        <section className="items">
          <div className="statictics">
            <article className="statictics__expert">
              <div className="expert-header">
                <select className="expert-selector">
                  <option>لیست کارشناسان</option>
                </select>
                <h3>آمار کارشناسان</h3>
              </div>
              <div className="expertــchart">
                <div className="expert__chart--circle">
                  <p>تهران<br/>12<br/>تعداد کارشناسان</p>
                </div>
                <Pie data={data8} />
              </div>
              <footer className="expertــfooter">
                <div className="expertــfooter--item" style={{color:'rgb(23,126,137)'}}>
                  <div>16</div>
                  <p>هماهنگ شده</p>
                </div>
                <div className="expertــfooter--item" style={{color:'rgb(167,217,219)'}}>
                  <div>16</div>
                  <p>هماهنگی و مراجعه به محل</p>
                </div>
                <div className="expertــfooter--item" style={{color:'rgb(230,57,70)'}}>
                  <div>32</div>
                  <p>هماهنگی و عدم مراجعه به محل</p>
                </div>
              </footer>
            </article>
            <article className="statictics__doc">
              <h4 className="statictics__header">آمار پرونده ها بر اساس</h4>
              <div className="statictics__container">
                <div className="statictics__item">
                  <div className="statictics__item--circle">200</div>
                  <Pie data={data3} />
                  <p>در دست کارشناسان تخصصی</p>
                </div>

                <div className="statictics__item">
                  <div className="statictics__item--circle">670</div>
                  <Pie data={data2} />
                  <p>در دست کارشناسان تخصصی</p>
                </div>

                <div className="statictics__item">
                  <div className="statictics__item--circle">340</div>
                  <Pie data={data3} />
                  <p>در دست کارشناسان تخصصی</p>
                </div>

                <div className="statictics__item">
                  <div className="statictics__item--circle">1000</div>
                  <Pie data={data2} />
                  <p>در دست کارشناسان تخصصی</p>
                </div>

                <div className="statictics__item">
                  <div className="statictics__item--circle">420</div>
                  <Pie data={data} />
                  <p>در دست کارشناسان تخصصی</p>
                </div>

                <div className="statictics__item">
                  <div className="statictics__item--circle">590</div>
                  <Pie data={data7} />
                  <p>در دست کارشناسان تخصصی</p>
                </div>

                <div className="statictics__item">
                  <div className="statictics__item--circle">120</div>
                  <Pie data={data6} />
                  <p>در دست کارشناسان تخصصی</p>
                </div>

                <div className="statictics__item">
                  <div className="statictics__item--circle">230</div>
                  <Pie data={data7} />
                  <p>در دست کارشناسان تخصصی</p>
                </div>

                <div className="statictics__item">
                  <div className="statictics__item--circle">480</div>
                  <Pie data={data6} />
                  <p>در دست کارشناسان تخصصی</p>
                </div>

                <div className="statictics__item">
                  <div className="statictics__item--circle">520</div>
                  <Pie data={data5} />
                  <p>در دست کارشناسان تخصصی</p>
                </div>
              </div>
            </article>
          </div>

          <div className="newdocs">
            <h5>پرونده های جدید دریافتی</h5>

            <article className="newdocs__item">
              <header className="newdocs__item--header">
                <div className="newdocs__header--info">
                  <select>
                    <option>ارزیاب پیشنهادی</option>
                  </select>
                  <button className="newdocs__header--confirm">تائید</button>
                  <p>ردیف : 225</p>
                  <p>کد: 1785936544</p>
                  <p>تاریخ تشکیل پرونده: 1400/02/27</p>
                </div>
                <div className="newdocs__header--gotobutton"><button className="newdocs__header--button">ورود به صفحه پرونده</button></div>
              </header>
              <div className="newdocs__info--container">
                
                <div className="newdocs__info--item">
                  <h3>مشخصات عمومی پرونده</h3>
                  <div className="newdocs__info--description">
                    <p>استان:تهران - تهران</p>
                    <p>بیمه گر:البرز</p>
                    <p>کارشناس پیشنهادی:امیرحسین امیری</p>
                    <p>نوع خسارت ثالث مالی</p>
                  </div>
                </div>

                <div className="newdocs__info--item">
                  <h3>مشخصات عمومی پرونده</h3>
                  <div className="newdocs__info--description">
                    <p>استان:تهران - تهران</p>
                    <p>بیمه گر:البرز</p>
                    <p>کارشناس پیشنهادی:امیرحسین امیری</p>
                    <p>نوع خسارت ثالث مالی</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="newdocs__item">
              <header className="newdocs__item--header">
                <div className="newdocs__header--info">
                  <select>
                    <option>ارزیاب پیشنهادی</option>
                  </select>
                  <button className="newdocs__header--confirm">تائید</button>
                  <p>ردیف : 225</p>
                  <p>کد: 1785936544</p>
                  <p>تاریخ تشکیل پرونده: 1400/02/27</p>
                </div>
                <div className="newdocs__header--gotobutton"><button className="newdocs__header--button">ورود به صفحه پرونده</button></div>
              </header>
              <div className="newdocs__info--container">
              <div className="newdocs__info--item">
                  <h3>مشخصات عمومی پرونده</h3>
                  <div className="newdocs__info--description">
                    <p>استان:تهران - تهران</p>
                    <p>بیمه گر:البرز</p>
                    <p>کارشناس پیشنهادی:امیرحسین امیری</p>
                    <p>نوع خسارت ثالث مالی</p>
                  </div>
                </div>

                <div className="newdocs__info--item">
                  <h3>مشخصات عمومی پرونده</h3>
                  <div className="newdocs__info--description">
                    <p>استان:تهران - تهران</p>
                    <p>بیمه گر:البرز</p>
                    <p>کارشناس پیشنهادی:امیرحسین امیری</p>
                    <p>نوع خسارت ثالث مالی</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="newdocs__item">
              <header className="newdocs__item--header">
                <div className="newdocs__header--info">
                  <select>
                    <option>ارزیاب پیشنهادی</option>
                  </select>
                  <button className="newdocs__header--confirm">تائید</button>
                  <p>ردیف : 225</p>
                  <p>کد: 1785936544</p>
                  <p>تاریخ تشکیل پرونده: 1400/02/27</p>
                </div>
                <div className="newdocs__header--gotobutton"><button className="newdocs__header--button">ورود به صفحه پرونده</button></div>
              </header>
              <div className="newdocs__info--container">
              <div className="newdocs__info--item">
                  <h3>مشخصات عمومی پرونده</h3>
                  <div className="newdocs__info--description">
                    <p>استان:تهران - تهران</p>
                    <p>بیمه گر:البرز</p>
                    <p>کارشناس پیشنهادی:امیرحسین امیری</p>
                    <p>نوع خسارت ثالث مالی</p>
                  </div>
                </div>

                <div className="newdocs__info--item">
                  <h3>مشخصات عمومی پرونده</h3>
                  <div className="newdocs__info--description">
                    <p>استان:تهران - تهران</p>
                    <p>بیمه گر:البرز</p>
                    <p>کارشناس پیشنهادی:امیرحسین امیری</p>
                    <p>نوع خسارت ثالث مالی</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="newdocs__item">
              <header className="newdocs__item--header">
                <div className="newdocs__header--info">
                  <select>
                    <option>ارزیاب پیشنهادی</option>
                    <option>ارزیاب پیشنهادی</option>
                  </select>
                  <button className="newdocs__header--confirm">تائید</button>
                  <p>ردیف : 225</p>
                  <p>ردیف : 225</p>
                  <p>ردیف : 225</p>
                </div>
                <div className="newdocs__header--gotobutton"><button className="newdocs__header--button">ورود به صفحه پرونده</button></div>
              </header>
              <div className="newdocs__info--container">
              <div className="newdocs__info--item">
                  <h3>مشخصات عمومی پرونده</h3>
                  <div className="newdocs__info--description">
                    <p>استان:تهران - تهران</p>
                    <p>بیمه گر:البرز</p>
                    <p>کارشناس پیشنهادی:امیرحسین امیری</p>
                    <p>نوع خسارت ثالث مالی</p>
                  </div>
                </div>

                <div className="newdocs__info--item">
                  <h3>مشخصات عمومی پرونده</h3>
                  <div className="newdocs__info--description">
                    <p>استان:تهران - تهران</p>
                    <p>بیمه گر:البرز</p>
                    <p>کارشناس پیشنهادی:امیرحسین امیری</p>
                    <p>نوع خسارت ثالث مالی</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer>
          <div className="pagination">
            <div ><button className="pagination__next__prev"><FontAwesomeIcon style={{ color:"#777"}} icon={faChevronLeft} /></button></div>
            <div className="pagination__pages">
              <button className="pagination__button">22</button>
              <button className="pagination__button">21</button>
              <button className="pagination__button">20</button>
              <span>...</span>
              <button className="pagination__button">3</button>
              <button className="pagination__button">2</button>
              <button className="pagination__button pagination__button--current">1</button>
            </div>
            <div ><button className="pagination__next__prev"><FontAwesomeIcon style={{ color:"#777"}} icon={faChevronRight} /></button></div>
          </div>
      </footer>
      
    </>
  );
}

export default App;
