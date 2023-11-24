import {TariffListData} from "./TariffListData.js"
import { useState } from 'react';
import './TariffList.css';


function TariffList() {
    const [tariffs, setTariff] = useState(TariffListData);

    function handleClick(index) {
        const nextTariffs = tariffs.map((tariff, i) => {
            if (i === index) {
              return {
                ...tariff,
                selected: !tariff.selected,
            };
            } else {
                return {
                  ...tariff,
                selected: tariff.selected = false};
            }
        });
        setTariff(nextTariffs);
    }


    return (
        <div className="TariffList font">
            {tariffs.map((tariff, i) =>
            (<div className="TariffListItem" onClick={() => {
                handleClick(i);
            }}
            >
                {tariff.selected 
                    ? <div className={`title selected ${tariff.fistBlockBackground}`}>{tariff.title}</div>
                    : <div className={`title ${tariff.fistBlockBackground}`}>{tariff.title}</div>} 
            
                <div className={`price-box ${tariff.secondBlockBackground}`}>
                    <p>руб</p>
                    <p className="price">{tariff.price}</p>
                    <p>/мес</p>
                </div>
                <div className="speed">{tariff.speed}</div>
                <div className="info">Объем включенного трафика не ограничен</div>
            </div>)
            )}
        </div>
    );
}

export default TariffList;