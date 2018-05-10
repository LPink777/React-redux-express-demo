import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UserInfo from "../../components/UserInfo";
import { userInfoAction } from "../../actions/userInfoAction";

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserInfo: bindActionCreators(userInfoAction, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserInfo)