import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {AuthUserType, setAuthUserData} from '../../redux/auth-reducer';

type HeaderContainerPropsType=MapStatePropsType & MapDispatchPropsType;
class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                withCredentials: true,
                headers: {'API-KEY': '7710dd5f-ea56-47ff-b059-6e7cb78ca047'}
            })
            .then((res) => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data)
                }
            });
    }

    render() {
        return <Header userId={this.props.userId}
                       login={this.props.login}
                       email={this.props.email}
                       isAuth={this.props.isAuth}
        />
    }
};
export type MapStatePropsType = {
    userId: string,
    email: string,
    login: string,
    isAuth: boolean,
}
export type MapDispatchPropsType={
    setAuthUserData: (authData: AuthUserType) => void;
}
const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}
export default connect<MapStatePropsType,
                      MapDispatchPropsType,
                      {},
                       AppStateType>
(mapStateToProps, {setAuthUserData})(HeaderContainer);