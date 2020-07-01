import React, {useEffect, useState} from "react";
import JobCard from "./JobCard";
import jobsRaw from "../data.json";
import FilterBar from "./FilterBar";

export default function JobsList(props) {
    // let jobs = jobsRaw;
    let [jobs, setJobs] = useState(jobsRaw);
    let [languageFilters, setLanguageFilters] = useState([]);
    let [toolFilters, setToolFilters] = useState([]);
    useEffect(() => {
    }, [jobs]);
    let toggleLanguageFilter = (filterName) => {
        if (languageFilters.includes(filterName)) {
            languageFilters.splice(languageFilters.indexOf(filterName), 1);
        } else {
            languageFilters.push(filterName);
        }
        updateJobs();
        // languageFilters.push(filterName);
    };
    let toggleToolFilter = (filterName) => {
        if (toolFilters.includes(filterName)) {
            toolFilters.splice(toolFilters.indexOf(filterName), 1);
        } else {
            toolFilters.push(filterName);
        }
        updateJobs();
    };
    let removeFilter = (filterName) => {
        if (toolFilters.includes(filterName)) {
            toolFilters.splice(toolFilters.indexOf(filterName), 1);
        } else {
            languageFilters.splice(languageFilters.indexOf(filterName), 1);
        }
        updateJobs();

    };
    let updateJobs = () => {

        if (languageFilters.length === 0 && toolFilters.length === 0) {
            setJobs(jobsRaw);
            return;
        }
        let temp = jobsRaw.filter((job) => {
            if (job.languages.some((language) => languageFilters.includes(language))) {
                return true;
            }
            if (job.tools.some((tool) => toolFilters.includes(tool))) {
                return true;
            }
            return false;
        });
        setJobs(temp);
    };
    let clearFilters = () => {
        setLanguageFilters([]);
        setToolFilters([]);
        setJobs(jobsRaw);
    };

    return (
        <div className={'jobs-list'}>
            <FilterBar filters={languageFilters.concat(toolFilters)} removeFilter={removeFilter}
                       clearFilters={clearFilters}/>
            {jobs.map((job) => <JobCard key={job.id} job={job} toggleLanguageFilter={toggleLanguageFilter}
                                        toggleToolFilter={toggleToolFilter}/>)}
        </div>

    );
}