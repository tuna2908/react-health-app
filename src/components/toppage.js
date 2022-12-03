import React, { useContext, useEffect } from 'react';
import { MEAL_CATEGORY, MEAL_HISTORY, ROUTE } from '../common/constants';
import { useResetRenderingOnTop } from '../common/hooks';
import { AppContext } from '../common/hooks/useReuseRouteContext';
import '../styles/toppage.css';
import { DetailButton } from './detailbutton';


export const TopPage = () => {
    const { setCurrentRoute } = useContext(AppContext);     //routing context
    const onHandleClickTabRecord = () => setCurrentRoute(ROUTE.RECORD_PAGE);

    useResetRenderingOnTop();

    return (
        <>
            <PersonalInfo />
            <TransitButtons />
            <MealHistory />
            <DetailButton displayText="記録をもっと見る" onClick={onHandleClickTabRecord} />
        </>
    )
}

const PersonalInfo = () => {
    return <div className='personal-info'>
        <div className='personal-info__left' >
            <img src='./images/main_photo.png' alt='' className='personal-info__left__BG' />
            <img src='./images/main_photo_text.png' alt='' className='align-center' />
        </div>
        <img src='./images/main_graph.png' alt='' className='personal-info__right' />
    </div>
}

const TransitButtons = () => {
    return <div className='transit__buttons'>
        {MEAL_CATEGORY.map((mealInf, ind) => (<div key={'meal-cat' + ind} className='transit-button'>
            <img src='./images/hexagon.png' alt='' />
            <div className='transit-button__icon'>
                <img src={mealInf.src} alt='' />
                <span className='transit-button__text'>{mealInf.text}</span>
            </div>
        </div>))}
    </div>
}

const MealHistory = () => {
    return <div className='meal-history'>
        {MEAL_HISTORY.map(mealInf => (<div className='meal-history__item'>
            <img src={mealInf.src} alt='' className='meal-history__image' />
            <span className='meal-history__text'>{mealInf.text}</span>
        </div>))}
    </div>
}