import { createContext, useEffect, useState } from 'react';
import { ROUTE } from '../constants';

export const AppContext = createContext();
const { Provider } = AppContext;

export const useReuseRouteContext = (initRoute = ROUTE.COLUMN_PAGE) => {
    const [currentRoute, setCurrentRoute] = useState(initRoute);

    return {
        Provider, value: { currentRoute, setCurrentRoute }
    }
}
