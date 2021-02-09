function useAuth(nextState, replace, next) {
    if (true) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname },
        });
    }
    next();
}

export default useAuth;
