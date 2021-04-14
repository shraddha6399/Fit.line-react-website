import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div>
            <div className="cards">
                <h1>Check out these Epic Meal Plans!</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items"> 
                            <CardItem
                            src='/images/balanced.jpg'
                            text="Balanced Diet"
                            label="Fit.line"
                            path="/services" />


                            <CardItem
                            src='/images/vegan.jpg'
                            text="Vegan Diet"
                            label="Fit.line"
                            path="/services" />

                          

                             <CardItem
                            src='/images/detox.jpg'
                            text="Detox Diet"
                            label="Fit.line"
                            path="/services" />
                           </ul>
                            <ul className="cards__items">
                             <CardItem
                            src='/images/medi.jpg'
                            text=" The Mediterranean diet"
                            label="Fit.line"
                            path="/services" />


                             <CardItem
                            src='/images/atkins.jpg'
                            text="The Atkins Diet"
                            label="Fit.line"
                            path="/services" />
                            </ul>
                           <ul className="cards__items">
                             <CardItem
                            src='/images/inter.jpg'
                            text="Intermittent Fasting"
                            label="Fit.line"
                            path="/services" />


                             <CardItem
                            src='/images/keto.jpg'
                            text="Keto Style"
                            label="Fit.line"
                            path="/services" />


                             <CardItem
                            src='/images/paleo.jpg'
                            text="The Paleo diet"
                            label="Fit.line"
                            path="/services" />

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;
