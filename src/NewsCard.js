import React, { Component } from 'react';
import TittleDiv from './TittleDiv'
import AdminMessage from './AdminMessage'

import './css/mainPageStyles.css'

class NewsCard extends Component {
    render() {
        let mes1 = ['12.03.2017', 'Сегодня во всех комнатах будет произведена уборка с 15:10 до 16:45.'];
        let mes2 = ['24.03.2017', 'Внимание жителям! Через 2 дня крайний срок оплаты общежития.'];
        let mes3 = ['03.05.2017', 'Сегодня, на втором этаже, был оставлен телефон. Владельцу подойти к администратору.'];
        return (
                <div className="row">
                    <div className="col s12 m4 l10 offset-l1">
                        <div className="card">
                            <div className="card-content">
                                <TittleDiv text="Объявления"/>
                            </div>
                            <AdminMessage Date={mes1[0]} text={mes1[1]}/>
                            <AdminMessage Date={mes2[0]} text={mes2[1]}/>
                            <AdminMessage Date={mes3[0]} text={mes3[1]}/>
                        </div>
                    </div>
                </div>
        );
    }
}

export default NewsCard;
