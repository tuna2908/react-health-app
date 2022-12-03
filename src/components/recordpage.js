
import React, { useContext, useState } from 'react';
import { DIARY_RECORDS, EXCERCISE_RECORD, GRAPH_INFO_BUTTONS, ROUTE } from '../common/constants';
import { DetailButton } from './detailbutton';
import { AppContext, useResetRenderingOnTop } from '../common/hooks';
import '../styles/columnpage.css';
import '../styles/toppage.css';
import '../styles/common.css';

export const RecordPage = () => {
    const { setCurrentRoute } = useContext(AppContext);
    const onHandleClickReturnToppage = () => setCurrentRoute(ROUTE.TOP_PAGE);

    useResetRenderingOnTop();

    return (
        <div className='column-page__container'>
            <EntryButtons />
            <BodyFatGraph />
            <ExcerciseRecords />
            <Diary />
            <DetailButton displayText="記録をもっと見る" className="detail-button detail-button--column-page" onClick={onHandleClickReturnToppage} />
        </div>
    )
}

const EntryButtons = () => {
    return <div className='entry-buttons'>
        <div className='entry-button' style={{ backgroundImage: `url('./images/MyRecommend-1.jpg')` }}>
            <span className='entry-button__title'>body record</span>
            <span className='entry-button__detail'>自分のカラダの記録</span>
        </div>
        <div className='entry-button' style={{ backgroundImage: `url('./images/MyRecommend-1.jpg')` }}>
            <span className='entry-button__title'>my excercise</span>
            <span className='entry-button__detail'>自分の運動の記録</span>
        </div>
        <div className='entry-button' style={{ backgroundImage: `url('./images/MyRecommend-1.jpg')` }}>
            <span className='entry-button__title'>my diary</span>
            <span className='entry-button__detail'>自分の日記</span>
        </div>
    </div>
}

const BodyFatGraph = () => {
    const [activeId, setActiveId] = useState(null);
    const onHandleButtonClick = (id) => {
        setActiveId(id);
    }

    return <div className='graph-info__container'>
        <div className='graph-info__title'>
            <span className='graph-info__title__text'>BODY<br />RECORD</span>
            <span className='graph-info__title__time'>2021.05.21</span>
        </div>
        <img src='./images/main_graph.png' alt='' className='graph-info__image' />
        <div className='graph-info__buttons'>
            {
                GRAPH_INFO_BUTTONS.map(({ id, displayText }) =>
                    <div className={`graph-info__button ${activeId === id && 'graph-info__button--active'}`}
                        onClick={() => onHandleButtonClick(id)}>{displayText}</div>)
            }
        </div>
    </div >
}

const ExcerciseRecords = () => {
    return <div className='graph-info__container'>
        <div className='graph-info__title'>
            <span className='graph-info__title__text'>MY<br />EXCERCISE</span>
            <span className='graph-info__title__time'>2021.05.21</span>
        </div>
        <div className='excercise-record__list'>
            {EXCERCISE_RECORD.map(record => <div className='excercise-record__item__container'>
                <span>*</span>
                <div>
                    <span className='excercise-record__item__name'>{record.name}</span>
                    <span className='excercise-record__item__calories'>{record.calories + 'Kcal'}</span>
                </div>
                <span className='excercise-record__item__duration'>{record.time + 'min'}</span>
            </div>)}
        </div>
    </div >
}

const Diary = () => {
    return <div className='diary__container'>
        <div className='diary__title'>
            <span>MY DIARY</span>
        </div>
        <div className='diary__list'>
            {DIARY_RECORDS.map(record => <div className='diary__item'>
                <span className='diary__item__time'>{record.time.date}</span>
                <span className='diary__item__time'>{record.time.time}</span>
                <span className='diary__item__title'>{record.title}</span>
                <span className='diary__item__body'>{record.body}</span>
            </div>)}
        </div>
    </div >
}
