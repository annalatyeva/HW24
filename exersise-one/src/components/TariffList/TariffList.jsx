import {TariffListData} from "./TariffListData.js"
import TariffListItem from "./TariffListItem.jsx";
import './TariffList.css';


function TariffList() {
    return (
        <div className="TariffList font">
            {TariffListData.map((tariff) =>
            <TariffListItem
            fistBlockBackground={tariff.fistBlockBackground}
            secondBlockBackground={tariff.secondBlockBackground} 
            title={tariff.title} 
            price={tariff.price} 
            speed={tariff.speed}
            selected={tariff.selected}>
            </TariffListItem>
            )}
        </div>
    );
}

export default TariffList;