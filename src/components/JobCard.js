import React from "react";
// To import images from json data https://stackoverflow.com/questions/50115140/react-component-with-json-image-path

export default function JobCard(props) {
    let job = props.job;

    return (
        <div className={job.featured ? "job-card featured-job" : "job-card"}>
            <div className="logo">
                <img src={require('../images/' + job.logo)} alt="" className="company-logo"/>
            </div>
            <div className="details">
                <div className="primary-content">
                    <div className="row">
                        <p className={'company-name'}>{job.company}</p>
                        {job.new && <div className="highlight new">NEW! </div>}
                        {job.featured && <div className="highlight featured">FEATURED</div>}
                    </div>
                    <h2 className={'position'}>{job.position}</h2>
                    <div className="secondary">
                        <p>{job.postedAt}</p>
                        <p>{job.contract}</p>
                        <p>{job.location}</p>
                    </div>
                </div>
                <div className="tags">
                    {job.languages.map((language) => <li onClick={(e) => props.toggleLanguageFilter(language)}
                                                         key={language}>{language}</li>)}
                    {job.tools.map((tool) => <li onClick={(e) => props.toggleToolFilter(tool)} key={tool}>{tool}</li>)}
                </div>
            </div>

        </div>
    )
}