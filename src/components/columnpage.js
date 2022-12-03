import React, { useContext } from 'react'
import { RECOMMENDATION_CATEGORIES, RECOMMENDATION_ITEMS, ROUTE } from '../common/constants'
import { useResetRenderingOnTop } from '../common/hooks'
import { AppContext } from '../common/hooks/useReuseRouteContext'
import '../styles/columnpage.css'
import '../styles/recordpage.css'
import { DetailButton } from './detailbutton'

export const ColumnPage = (props) => {
    const { setCurrentRoute } = useContext(AppContext);
    const onHandleSignIn = () => setCurrentRoute(ROUTE.TOP_PAGE);

    useResetRenderingOnTop();

    return (
        <div className='column-page__container'>
            <div className='meal-history'>
                {RECOMMENDATION_CATEGORIES.map(({ title, detail }, ind) => (<div key={'recom-cate' + ind} className='recommendation-cate__item'>
                    <span className='recommendation-cate__title'>{title}</span>
                    <div className='horizontal-line-break' />
                    <span className='recommendation-cate__detail'>{detail}</span>
                </div>))}
            </div>
            <div className='meal-history'>
                {RECOMMENDATION_ITEMS.map(({ time, src, recommendations, title }) => (
                    <div className='recommendation__item'>
                        <div className='recommendation__item__image'>
                            <img src={src} alt='' className='meal-history__image' />
                            <span className='meal-history__text'>{time}</span>
                        </div>
                        <pre className='recommendation__item__title'>{title}</pre>
                        <span className='recommendation__item__recommend-details'>{recommendations}</span>
                    </div>
                ))}
            </div>
            <DetailButton displayText="記録をもっと見る" className="detail-button detail-button--column-page" onClick={onHandleSignIn} />
        </div>
    )
}
