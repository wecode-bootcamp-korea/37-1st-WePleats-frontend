import './Footer.scss';

function Footer() {
  return (
    <div className="footerBox">
      <h3 className="title">개성을 살려주는 소비, 플리츠마마</h3>
      <span className="describe">
        이제 개발자의 책상은 밋밋하고 칙칙하다라는 편견은 No
        <br />
        오피스 공간을 화려하게 Upgrade!
      </span>
      <div className="border" />
      <ul className="infos">
        <li className="info">이용약관</li>
        <li className="info">개인정보처리방침</li>
        <li className="info">사업자정보확인</li>
      </ul>
      <span className="copyright">
        ©2022 WEPLEATS Int.Co. ,Ltd. All Rights Reserved
      </span>
    </div>
  );
}

export default Footer;
