import './Page.css'

const Page = ({name, children}) => {
    return (
        <div className={`${name} page-container`}>
            <div className="content-container">
                {children}
            </div>
        </div>
    )
};

export default Page;