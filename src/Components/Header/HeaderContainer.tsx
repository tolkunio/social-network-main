import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {authUserTC, AuthUserType, setAuthUserData} from '../../redux/auth-reducer';
import {userApi} from '../../api/api';

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        // console.log('constructor componentDidMount()')
        // authUserTC();
        userApi.authMe()
            .then((res) => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data)
                }
            });
    }

    render() {
        const {userId, login, email, isAuth} = this.props;
        return <Header userId={userId}
                       login={login}
                       email={email}
                       isAuth={isAuth}
        />
    }
};
export type MapStatePropsType = {
    userId: string,
    email: string,
    login: string,
    isAuth: boolean,
}
export type MapDispatchPropsType = {
    setAuthUserData: (authData: AuthUserType) => void;
    authUserTC: () => void
}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    const {userId, email, login, isAuth} = state.auth;
    return {
        userId,
        email,
        login,
        isAuth
    }
}
export default connect<MapStatePropsType,
    MapDispatchPropsType,
    {},
    AppRootStateType>
(mapStateToProps, {authUserTC, setAuthUserData})(HeaderContainer);