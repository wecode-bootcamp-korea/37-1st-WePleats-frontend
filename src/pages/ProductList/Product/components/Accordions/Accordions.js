import React from 'react';
import Accordion from './Accordion/Accordion';
import './Accordions.scss';

function Accordions({ product }) {
  return (
    <div className="accordion">
      <ul className="lists">
        {ACCORDION_LIST.map(info => (
          <Accordion
            key={info.id}
            title={info.title}
            text={info.text}
            productSize={product.size}
          />
        ))}
      </ul>
    </div>
  );
}

export default Accordions;

const ACCORDION_LIST = [
  {
    id: 1,
    title: '배송 안내',
    text: '주문 기준 3일내 출고를 원칙으로 합니다.(영업일 기준)출고 후 1~3일 이내 받아보실 수 있습니다. (택배 영업소 사정에 따라 다소 차이가 있을 수 있습니다.)운송장번호 조회를 통해 배송과정을 확인하실 수 있습니다.일시 품절 및 제품 공급이 불가능 할 경우 결제일로부터 4영업일 이내 고객님께 안내 후 환불해드립니다.',
  },
  {
    id: 2,
    title: '반품 및 교환',
    text: '원단, 봉제 불량 또는 제품 하자의 경우 구입일로 부터 2주 이내 무상 수선 또는 교환, 환불이 가능합니다. 출고 후 1~3일 이내 받아보실 수 있습니다.상품하자 이외 사이즈, 색상 교환 또는 단순 착오나 변심에 의한 교환/반품 시 택배비는 고객 부담입니다.(왕복택배비 6천원 본인부담)또한 사이즈, 색상 교환, 단순 착오나 변심에 의한 교환의 경우 제품 회수가 완료된 후 교환 요청한 제품이 배송되는 점 참고 바랍니다.',
  },
  {
    id: 3,
    title: '사이즈',
    text: null,
  },
];
