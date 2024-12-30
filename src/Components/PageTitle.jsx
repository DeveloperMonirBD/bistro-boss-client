import { Helmet } from "react-helmet";

const PageTitle = ({title}) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title} page || Bistro Boss Restaurant</title>
        </Helmet>
    );
};

export default PageTitle;