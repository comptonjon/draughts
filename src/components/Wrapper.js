import AuthRoute from './AuthRoute';

const Wrapper = ({children}) => {
    console.log("TYPE", typeof(children));
    console.log(children);
    return (
        children
    )
}

export default Wrapper;