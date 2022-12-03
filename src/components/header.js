import React, { useContext, useState } from 'react';
import { ROUTE } from '../common/constants';
import { AppContext } from '../common/hooks/useReuseRouteContext';
import '../styles/header.css';

export const Header = () => {
    const [isMenuActive, setMenuActive] = useState(false);

    const { setCurrentRoute } = useContext(AppContext);
    const onHandleClickTabRecord = () => setCurrentRoute(ROUTE.RECORD_PAGE);
    const onHandleClickTopPage = () => setCurrentRoute(ROUTE.TOP_PAGE);
    const onHandleClickColumnPage = () => setCurrentRoute(ROUTE.COLUMN_PAGE);

    const onHandleClickMenu = () => {
        setMenuActive(!isMenuActive);
    }

    return (
        <div className='header'>
            <img src='./images/menu-icons/logo.png' alt='logo' onClick={onHandleClickTopPage} className='header__logo' />
            <div className='header__right-area'>
                <div className='header__tab' onClick={onHandleClickTabRecord}>
                    <img src='./images/menu-icons/icon_memo.png' alt='logo' className='icon-base' />
                    <span className='header__tab__text'>自分の記録</span>
                </div>
                <div className='header__tab'>
                    <img src='./images/menu-icons/icon_challenge.png' alt='logo' className='icon-base' />
                    <span className='header__tab__text'>自分の記録</span>
                </div>
                <div className='header__tab'>
                    <img src='./images/menu-icons/icon_info.png' alt='logo' className='icon-base' />
                    <span className='header__tab__text'>自分の記録</span>
                </div>
                <div className='header__tab' onClick={onHandleClickMenu}>
                    <img src='./images/menu-icons/icon_menu.png' alt='logo' className='icon-base' />
                    {isMenuActive && <div className='header__detail-menu'>
                        <span className='header__detail-menu__li' onClick={onHandleClickTabRecord}>自分の記録</span>
                        <div className='horizontal-line-break horizontal-line-break--full-size' />

                        <span className='header__detail-menu__li'>体重グラフ</span>
                        <div className='horizontal-line-break horizontal-line-break--full-size' />

                        <span className='header__detail-menu__li'>目標</span>
                        <div className='horizontal-line-break horizontal-line-break--full-size' />

                        <span className='header__detail-menu__li'>選択中のコース</span>
                        <div className='horizontal-line-break horizontal-line-break--full-size' />

                        <span className='header__detail-menu__li' onClick={onHandleClickColumnPage}>コラム一覧</span>
                        <div className='horizontal-line-break horizontal-line-break--full-size' />

                        <span className='header__detail-menu__li'>設定</span>
                    </div>}
                </div>
            </div>
        </div>
    )
}
