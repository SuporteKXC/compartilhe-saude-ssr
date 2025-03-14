export interface CardDynamicRoute {
    path: string;
    matchPath: string[];
}

export function getDynamicPath(routes: CardDynamicRoute[], matchRoute: string): string {
    const route = routes.find(route => route.matchPath.includes(matchRoute));

    return route ? route.path : '';
}