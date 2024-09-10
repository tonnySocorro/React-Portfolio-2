const SocialIcon = ({icon, url, title}) => {
    return (
        <a href={url} title={title} rel="me noreferrer" target="_blank">
            <i className={`fab ${icon}`}></i>
        </a>
    );
};

export default SocialIcon;
